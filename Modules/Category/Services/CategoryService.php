<?php

namespace Modules\Category\Services;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;
use Modules\Category\Entities\Category;
use Modules\Category\Entities\CategoryTranslation;
use Modules\Category\Services\Filter\CountFilter;
use Modules\Category\Services\Filter\ExtendedFilter;
use Modules\Category\Services\Filter\LeavesFilter;
use Modules\Category\Services\Filter\NotExtendedFilter;
use Modules\Category\Services\Filter\OrderFilter;
use Modules\File\Entities\File;
use Modules\File\Facades\FileService;
use Modules\File\Facades\UploadService;
use Modules\Marketing\Facades\Offer\OfferService;
use Modules\Product\Services\Filter\ActiveFilter;

class CategoryService
{
    private string $entity;

    public function __construct()
    {
        $this->entity = 'Modules\Category\Entities\Category';
    }

    public function mapCategoryModel(Category $category) {
        $translations = $category->translations()->get();
        $images = $category->images()->get();
        $translationsModel = [];
        $imagesModel = [];
        foreach ($translations as $translation) {
            $translationsModel[] = $this->mapCategoryTranslationModel($translation);
        }

        foreach ($images as $image) {
            $imagesModel[] = FileService::mapFileModel($image);
        }
        return [
            'id' => $category->id,
            'parentId' => $category->parent_id,
            'order' => $category->order,
            'isActive' => (bool)$category->is_active,
            'isExtended' => (bool)$category->is_extended,
            'translations' => $translationsModel,
            'images' => $imagesModel,
            'createdAt' => Carbon::make($category->created_at)->format('M d, Y'),
        ];
    }

    public function mapCategoryTranslationModel(CategoryTranslation $translation) {
        return [
            'id' => $translation->id,
            'categoryId' => $translation->category_id,
            'name' => $translation->name,
            'description' => $translation->description,
            'language' => $translation->language,
            'isActive' => (bool)$translation->is_active,
        ];
    }

    public function getCategories(): array
    {
        //TODO: Add categories to buffer!
        $categories = Category::query()->orderBy('order', 'ASC')->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            $categoriesModel[] = $this->mapCategoryModel($category);
        }

        return $categoriesModel;
    }

    public function getMainCategories(): array
    {
//        $categories = Category::query()->orderBy('order', 'ASC')->get();
        $categories = app(Pipeline::class)
            ->send(Category::query())
            ->through([
                NotExtendedFilter::class,
                OrderFilter::class,
            ])
            ->thenReturn()->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            $categoriesModel[] = $this->mapCategoryModel($category);
        }

        return $categoriesModel;
    }

    public function extendedCategories(): array
    {
        $categories = app(Pipeline::class)
            ->send(Category::query())
            ->through([
                ExtendedFilter::class,
                ActiveFilter::class,
                OrderFilter::class,
            ])
            ->thenReturn()->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            $categoriesModel[] = $this->mapCategoryModel($category);
        }

        return $categoriesModel;
    }

    public function getCategoriesCount() {
        return app(Pipeline::class)
            ->send(Category::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }

    public function getLeaveCategories(): array
    {
//        $categories = Category::query()->get();
        $categories = app(Pipeline::class)
            ->send(Category::query())
            ->through([
                LeavesFilter::class,
                NotExtendedFilter::class,
            ])
            ->thenReturn()->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            if (count($category->children) === 0) $categoriesModel[] = $this->mapCategoryModel($category);
        }
        return $categoriesModel;
    }

    public function getCategory(int $id): Model|null
    {
        return Category::query()->where('id', $id)->first();
    }

    public function getCategoryName(int $id) {
        return Category::query()
            ->where('id', $id)
            ->first()
            ->translations()->get()
            ->where('language', app()->getLocale())
            ->first()->name;
    }

    private function fillCategory(Category &$category, Array $data): void
    {
        $category->fill([
            'parent_id' => array_key_exists('parentId', $data) ? $data['parentId'] : null,
            'order' => array_key_exists('order', $data) ? $data['order'] : 1,
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            'is_extended' => array_key_exists('isExtended', $data) ? $data['isExtended'] === 'true' : 0,
        ]);
    }

    private function fillCategoryTranslation(int $categoryId, Array $data): void
    {
        $translations = json_decode($data['translations']);
        foreach ($translations as $key => $value) {
            $translation = new CategoryTranslation();
            $translation->fill([
                'category_id' => $categoryId,
                'name' => $value->name,
                'description' => $value->description,
                'language' => $key,
                'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            ]);
            $translation->save();
        }
    }

    public function storeCategory(Array $data): array
    {
//        1. Store CategoryContainer.
        $category = new Category();
        $this->fillCategory($category, $data);
        $category->save();
//        2. Store File:
        $data['refId'] = $category->id;
        $data['refType'] = 'Modules\Category\Entities\Category';
        UploadService::saveFile($data, 'image', 'category');
//        3. Store Translation.

        $this->fillCategoryTranslation($category->id, $data);


        return $this->mapCategoryModel($category);
    }

    public function updateImage(Array $data, Category $category): array
    {
        $image = $category->images()->first();
        UploadService::updateFile($image->id, 'image', 'category');
        return $this->mapCategoryModel($category);
    }

    public function changeStatus(Array $data, Category $category): array
    {
        $children = $category->children()->get();
        $translations = $category->translations()->get();
        $category->is_active = array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1;
        $category->update();
        foreach ($translations as $translation) {
            $translation->is_active = array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1;
            $translation->update();
        }
        foreach ($children as $child) {
            $this->changeStatus($data, $child);
        }

        return $this->mapCategoryModel($category);
    }

    public function changeExtendedStatus(Array $data, Category $category) {
        $category->is_extended = $data['isExtended'] === 'true';
        $category->update();
        return $this->mapCategoryModel($category);
    }

    private function fillTranslation(CategoryTranslation $translation, Array $data, string $key, mixed $value): void
    {
//        dd($value->name);
        $translation->fill([
            'category_id' => $data['categoryId'],
            'name' => $value->name,
            'description' => $value->description,
            'language' => $key,
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
        ]);
    }

    public function updateCategory(Array $data, Category $category): array
    {
        $receivedTranslations = json_decode($data['translations']);
//        dd($receivedTranslations);
        //1. Update CategoryContainer.
        $this->fillCategory($category, $data);
        $category->update();
        //2. Update Translation.
        foreach ($receivedTranslations as $key => $value) {

            $translation = CategoryTranslation::query()
                ->where('category_id', $category->id)
                ->where('language', $key)
                ->first();
            if (is_null($translation)) {
                $translation = new CategoryTranslation();
                //Key Represent Language!.
                $this->fillTranslation($translation, $data, $key, $value);
                $translation->save();
            }
            $this->fillTranslation($translation, $data, $key, $value);
            $translation->update();
        }

        return $this->mapCategoryModel($category);
    }

    public function deleteCategory(Category $category): void
    {
        $children = $category->children()->get();
        foreach ($children as $child) {
            $this->deleteCategory($child);
        }
        $images = $category->images()->get();
        foreach ($images as $image) {
            UploadService::deleteFile($image->id, 'category');
        }
        $category->delete();
    }

    public function reorderList(Array $data) {

        $list = json_decode($data['list']);
        foreach ($list as $item) {
            $block = Category::query()->where('id', $item->id)->first();
            $block->order = $item->order;
            $block->update();
        }
    }

//    *******************************************************************    //
//    ***************************Website Methods ************************    //

    public function mapLocaleCategory(Category $category) {
        $translation = CategoryTranslation::query()
            ->where('category_id', $category->id)
            ->where('language', app()->getLocale())
            ->first();

//        $images = $category->images()->get();
        $images = File::query()
            ->where('reference_type', $this->entity)
            ->where('reference_id', $category->id)
            ->where('is_active', 1)
            ->orderBy('order', 'ASC')
            ->get();

        $imagesModel = [];


        foreach ($images as $image) {
            $imagesModel[] = FileService::mapFileModel($image);
        }
        $childrenModel = [];
        foreach ($category->children()->get() as $item) {
            if ($item->is_active)
                $childrenModel[] = $this->mapLocaleCategory($item);
        }

        return [
            'id' => $category->id,
            'order' => $category->order,
            'name' => $translation->name,
            'images' => $imagesModel,
            'children' => $childrenModel,
        ];
    }

    public function getActiveCategories(): array
    {
        $categories = Category::query()
            ->where('is_active',1)
            ->where('parent_id', null)
            ->where('is_extended', 0)
            ->orderBy('order', 'ASC')
            ->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            $categoriesModel[] = $this->mapLocaleCategory($category);
        }

        return $categoriesModel;
    }

    public function getActiveExtendedCategories(): array
    {
        $categories = Category::query()
            ->where('is_active',1)
            ->where('parent_id', null)
            ->where('is_extended', 1)
            ->orderBy('order', 'ASC')
            ->get();
        $categoriesModel = [];
        foreach ($categories as $category) {
            $categoriesModel[] = $this->mapLocaleCategory($category);
        }

        return $categoriesModel;
    }

//    *******************************************************************    //
}
