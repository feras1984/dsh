<?php


namespace Modules\Website\Services\menus;

use Carbon\Carbon;
use Modules\Website\Entities\MenuCategory;

class MenuCategoryService
{
    public function mapMenuCategoryModel(MenuCategory $category) {
        return [
            'id' => $category->id,
            'name' => $category->name,
            'isActive' => (bool)$category->is_active,
            'createdAt' => Carbon::make($category->created_at)->format('M d, Y'),
        ];
    }

    public function getMenuCategories() {
        $categories = MenuCategory::query()->get();
        $categoryModel = [];
        foreach ($categories as $category) {
            $categoryModel[] = $this->mapMenuCategoryModel($category);
        }

        return $categoryModel;
    }

    public function fillCategoryForm(MenuCategory &$category) {
        $data = request()->all();
        $category->fill([
            'name' => $data['name'],
            'is_active' => $data['isActive'] === 'true',
        ]);
    }

    public function storeMenuCategory() {
        $category = new MenuCategory();
        $this->fillCategoryForm($category);
        $category->save();
        return $this->mapMenuCategoryModel($category);
    }

    public function updateMenuCategory($id) {
        $category = MenuCategory::query()->where('id', $id)->first();
        $this->fillCategoryForm($category);
        $category->update();
        return $this->mapMenuCategoryModel($category);
    }

    public function deleteMenuCategory($id) {
        $category = MenuCategory::query()->where('id', $id)->first();
        $category->delete();
    }

}
