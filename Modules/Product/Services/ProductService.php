<?php

namespace Modules\Product\Services;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Modules\Category\Facades\CategoryService;
use Modules\File\Entities\File;
use Modules\File\Facades\FileService;
use Modules\File\Facades\UploadService;
use Modules\Marketing\Entities\ProductOffer;
use Modules\Marketing\Facades\Offer\OfferService;
use Modules\Product\Entities\Product;
use Modules\Product\Entities\ProductCategory;
use Modules\Product\Entities\ProductFavorite;
use Modules\Product\Entities\ProductLike;
use Modules\Product\Entities\ProductRating;
use Modules\Product\Entities\ProductReview;
use Modules\Product\Entities\ProductTranslation;
use Modules\Product\Facades\UserProductService\UserProductService;
use Modules\Product\Services\Filter\ActiveFilter;
use Modules\Product\Services\Filter\CategoryFilter;
use Modules\Product\Services\Filter\CountFilter;
use Modules\Product\Services\Filter\LimitFilter;
use Modules\Product\Services\Filter\OffsetFilter;
use Modules\Product\Services\Filter\OrderFilter;
use Modules\Product\Services\Filter\SearchFilter;
use Modules\Product\Services\Filter\ValidFilter;
use Modules\User\Entities\User;
use Modules\User\Facades\UserService\CustomerService\Normal\NormalService;
use Modules\User\Facades\UserService\UserService;

class ProductService
{

    private string $imageContainer;
    private string $reference;

    public function __construct()
    {
        $this->imageContainer = 'product';
        $this->reference = 'Modules\Product\Entities\Product';
    }

    public function mapProductModel(Product $product) {
        $category = $product->category()->first();
        $extended = $product->extended()->first();
        $translations = $product->translations()->get();
        $images = $product->images()->get();
        $offer = OfferService::getOfferByReference($product->id);

        $translationsModel = [];
        $imagesModel = [];

        foreach ($translations as $translation) {
            $translationsModel[] = $this->mapProductTranslationModel($translation);
        }

        foreach ($images as $image) {
            $imagesModel[] = FileService::mapFileModel($image);
        }

        return [
            'id' => $product->id,
            'categoryId' => $category->id,
            'order' => $product->order,
            'isActive' => (bool)$product->is_active,
            'translations' => $translationsModel,
            'sellPrice' => $product->sell_price,
            'originalPrice' => $product->original_price,
            'count' => $product->count,
            'sku' => $product->sku,
            'images' => $imagesModel,
            'createdAt' => Carbon::make($product->created_at)->format('M d, Y'),
            'category' => CategoryService::mapCategoryModel($category),
            'extended' => is_null($extended) ? null : CategoryService::mapCategoryModel($extended),
            'offer' => $offer,
            'totalSales' => $product->total_sales,
        ];
    }

    public function mapProductTranslationModel(ProductTranslation $translation) {
        return [
            'id' => $translation->id,
            'productId' => $translation->product_id,
            'name' => $translation->name,
            'description' => $translation->description,
            'language' => $translation->language,
            'isActive' => (bool)$translation->is_active,
        ];
    }

    public function getProducts() {
        $products = Product::query()->get();
        $productsModel = [];
        foreach ($products as $product) {
            $productsModel[] = $this->mapProductModel($product);
        }

        return $productsModel;
    }

    public function getAdminProducts(): array
    {
//        $products = Product::query()->get();
        $products = app(Pipeline::class)
            ->send(Product::query())
            ->through([
                LimitFilter::class,
                OffsetFilter::class,
                SearchFilter::class,
            ])
            ->thenReturn()->get();
        $productsModel = [];
        foreach ($products as $product) {
            $productsModel[] = $this->mapProductModel($product);
        }

        return $productsModel;
    }

    public function getProductsCount() {
        return app(Pipeline::class)
            ->send(Product::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }

//    ==============================================================================
//    ==========================Product Activities==================================

    public function getLikes(Product $product) {
//        dd($product->userLikes()->get());
        return NormalService::mapUserListActivities($product->userLikes()->get());
    }

    public function getFavorites(Product $product) {
        return NormalService::mapUserListActivities($product->userFavorites()->get());
    }

    public function getRatings(Product $product) {
        return NormalService::mapUserListRating($product->userRatings()->get());
    }

    public function getReviews(Product $product) {
        return NormalService::mapUserListReviews($product->userReviews()->get());
    }
//    ==============================================================================

    private function fillProduct(Product &$product, Array $data): void
    {
        $product->fill([
            'category_id' => $data['categoryId'],
            'order' => array_key_exists('order', $data) ? $data['order'] : 1,
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            'sell_price' => $data['sellPrice'],
            'original_price' => $data['originalPrice'],
            'count' => $data['count'],
            'sku' => $data['sku'],
        ]);
    }

    private function fillProductTranslation(int $productId, Array $data): void
    {
        $translations = json_decode($data['translations']);
        foreach ($translations as $key => $value) {
            $translation = new ProductTranslation();
            $translation->fill([
                'product_id' => $productId,
                'name' => $value->name,
                'description' => $value->description,
                'language' => $key,
                'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            ]);
            $translation->save();
        }
    }

    public function fillProductCategory(int $productId, Array $data): void {
        $prodCat = ProductCategory::query()
            ->where('product_id', $productId)
            ->where('is_extended', 0)
            ->first();
        if (is_null($prodCat)) {
            $prodCat = new ProductCategory();
        }
        $prodCat->fill([
            'product_id' => $productId,
            'category_id' => $data['categoryId'],
            'is_extended' => array_key_exists('isExtended', $data) ? $data['isExtended'] === 'true' : 0,
        ]);

        $prodCat->save();
    }

    public function storeProduct(Array $data) {
        $product = new Product();
        $this->fillProduct($product, $data);
        $product->save();

        $data['refId'] = $product->id;
        $data['refType'] = $this->reference;
        UploadService::saveFile($data, 'image', $this->imageContainer);

        //Put image as cover:
//        $data['isCover'] = 1;

        $this->fillProductTranslation($product->id, $data);

        $this->fillProductCategory($product->id, $data);

        return $this->mapProductModel($product);
    }

    public function getProductBySKU($sku, $id = -1) {
        if ($id) return Product::query()->where('id', '<>', $id)->where('sku', $sku)->first();
        return Product::query()->where('sku', $sku)->first();
    }

    public function getProductName(int $id) {
        return Product::query()
            ->where('id', $id)->first()
            ->translations()->get()
            ->where('language', app()->getLocale())->first()->name;
    }


    public function changeStatus(Array $data, Product $product) {
        $state = array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1;
        $product->is_active = $state;
        $translations = $product->translations()->get();
        foreach ($translations as $translation) {
            $translation->is_active = $state;
            $translation->update();
        }
        $product->update();
        return $this->mapProductModel($product);
    }

    private function fillTranslation(ProductTranslation $translation, Array $data, string $key, mixed $value): void
    {
//        dd($value->name);
        $translation->fill([
            'product_id' => $data['productId'],
            'name' => $value->name,
            'description' => $value->description,
            'language' => $key,
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
        ]);
    }

    public function updateProduct(Array $data, Product $product): array
    {
        $receivedTranslations = json_decode($data['translations']);
//        dd($receivedTranslations);
        //1. Update CategoryContainer.
        $this->fillProduct($product, $data);
        $product->update();
        //2. Update Translation.
        foreach ($receivedTranslations as $key => $value) {

            $translation = ProductTranslation::query()
                ->where('product_id', $product->id)
                ->where('language', $key)
                ->first();
            if (is_null($translation)) {
                $translation = new ProductTranslation();
                //Key Represent Language!.
                $this->fillTranslation($translation, $data, $key, $value);
                $translation->save();
            }
            $this->fillTranslation($translation, $data, $key, $value);
            $translation->update();
        }

        $this->fillProductCategory($product->id, $data);

        return $this->mapProductModel($product);
    }

    public function extendedCategory(Product $product, array $data) {
        $prodCat = ProductCategory::query()
            ->where('product_id', $product->id)
            ->where('is_extended', 1)
            ->first();
        if (is_null($prodCat)) {
            $prodCat = new ProductCategory();
        }

        $prodCat->fill([
            'product_id' => $product->id,
            'category_id' => $data['categoryId'],
            'is_extended' => 1,
        ]);
        $prodCat->save();
        return $this->mapProductModel($product);
    }

    public function deleteExtendedCategory(Product $product, array $data) {
        $prodCat = ProductCategory::query()
            ->where('product_id', $product->id)
            ->where('category_id', $data['categoryId'])
            ->where('is_extended', 1)
            ->first();
        if (!is_null($prodCat)) {
            $prodCat->delete();
        }
        return $this->mapProductModel($product);
    }

    public function deleteProduct(Product $product): void
    {
        $images = $product->images()->get();
        foreach ($images as $image) {
            UploadService::deleteFile($image->id, $this->imageContainer);
        }
        $product->delete();
    }

    // We need $data['image'], $data['isCover'].
    public function saveImage(Array $data, Product $product): array
    {
        $data['refId'] = $product->id;
        $data['refType'] = $this->reference;
        UploadService::saveFile($data, 'image', $this->imageContainer);
        return $this->mapProductModel($product);
    }

    //We need $data['imageId'], $data['image']
    public function updateImage(Array $data, Product $product): array
    {
        $image = $product->images()->where('id', $data['imageId'])->first();
        UploadService::updateFile($image->id, 'image', $this->imageContainer);
        return $this->mapProductModel($product);
    }

    //We need $data['imageId]
    public function deleteImage(Array $data, Product $product): array
    {
        UploadService::deleteFile($data['imageId'], $this->imageContainer);
        return $this->mapProductModel($product);
    }

//    *******************************************************************    //
//    ***************************Website Methods ************************    //
    public function mapLocaleProduct(Product $product) {
        $translation = ProductTranslation::query()
            ->where('product_id', $product->id)
            ->where('language', app()->getLocale())
            ->first();

        $offer = OfferService::getOfferByReference($product->id);

        $category = $product->category()->first();

        $like = false;

        $images = File::query()
            ->where('reference_type', $this->reference)
            ->where('reference_id', $product->id)
            ->where('is_active', 1)
            ->orderBy('order', 'ASC')
            ->get();
        $imagesModel = [];

        $reviews = UserProductService::getReviews($product->reviews()->get());

        foreach ($images as $image) {
            $imagesModel[] = FileService::mapFileModel($image);
        }

        $likes = $product->likes()->get();
        $favorites = $product->favorites()->get();
        $ratings = $product->ratings()->get();
        $reviews = $product->reviews()->get();

        $averageRate = $product->ratings()->get()->avg('rate');

        return [
            'id' => $product->id,
            'name' => $translation->name,
            'description' => $translation->description,
            'categoryId' => $category->id,
            'order' => $product->order,
            'sellPrice' => $product->sell_price,
            'originalPrice' => $product->original_price,
            'count' => $product->count,
            'sku' => $product->sku,
            'images' => $imagesModel,
            'createdAt' => Carbon::make($product->created_at)->format('M d, Y'),
            'category' => CategoryService::mapLocaleCategory($category),
            'reviews' => $reviews,
            'offer' => $offer,
            'likes' => UserProductService::getLikes($likes),
            'favorites' => UserProductService::getFavorites($favorites),
            'ratings' => UserProductService::getRatings($ratings),
            'average' => $averageRate ?? 0,
        ];
    }
    public function getActiveProducts() {
//        $products = Product::query()
//            ->where('is_active', 1)
//            ->orderBy('order', 'ASC')
//            ->get();

        $products = app(Pipeline::class)
            ->send(Product::query())
            ->through([
                LimitFilter::class,
                OffsetFilter::class,
                ActiveFilter::class,
                CategoryFilter::class,
//                OrderFilter::class,
            ])
            ->thenReturn()->get();
        $productsModel = [];

        foreach ($products as $product) {
            $productsModel[] = $this->mapLocaleProduct($product);
        }

        return $productsModel;
    }

    public function getCountOfActiveProducts() {
        return app(Pipeline::class)
            ->send(Product::query())
            ->through([
                ActiveFilter::class,
//                CountFilter::class,
//                OrderFilter::class,
            ])
            ->thenReturn()->count();
    }

    public function getCountOfActiveCategoryProducts(int $categoryId) {
        return app(Pipeline::class)
            ->send(Product::query()->whereHas('categories', function ($query) use ($categoryId) {
                return $query->where('category_id', $categoryId);
            }))
            ->through([
                ActiveFilter::class,
//                CountFilter::class,
//                OrderFilter::class,
            ])
            ->thenReturn()->count();
    }

    public function getProductByName(string $name) {
        $products = Product::query()
            ->where('is_active', 1)
            ->whereHas('translations', function ($query) use ($name) {
            return $query
                ->where('is_active', 1)
                ->where('name', 'LIKE', "%{$name}%");
        })->get();
        $productsModel = [];

        foreach ($products as $product) {
            $productsModel[] = $this->mapLocaleProduct($product);
        }

        return $productsModel;
    }

    public function changeProductLikeStatus($data) {
        if (Auth::check()) {
            $like = ProductLike::query()
                ->where('user_id', Auth::id())
                ->where('product_id', $data['product_id'])
                ->first();

            if(is_null($like)) {
                $like = new ProductLike();
            }

            $like->fill([
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
                'like' => (bool)$data['like'],
            ]);

            $like->save();
        }
    }

    public function changeProductFavoriteStatus($data) {
        if (Auth::check()) {
            $favorite = ProductFavorite::query()
                ->where('user_id', Auth::id())
                ->where('product_id', $data['product_id'])
                ->first();

            if(is_null($favorite)) {
                $favorite = new ProductFavorite();
            }

            $favorite->fill([
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
                'favorite' => (bool)$data['favorite'],
            ]);

            $favorite->save();
        }
    }

    public function changeProductReviewStatus($data) {
        if (Auth::check()) {
            $review = ProductReview::query()
                ->where('user_id', Auth::id())
                ->where('product_id', $data['product_id'])
                ->first();

            if(is_null($review)) {
                $review = new ProductReview();
            }

            $review->fill([
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
                'review' => $data['review'],
                'is_active' => false,
            ]);

            $review->save();

            return UserProductService::mapReviewModel($review);
        }
    }

    public function changeProductRating($data) {
        if (Auth::check()) {
            $rate = ProductRating::query()
                ->where('user_id', Auth::id())
                ->where('product_id', $data['product_id'])
                ->first();

            if(is_null($rate)) {
                $rate = new ProductRating();
            }

            $rate->fill([
                'user_id' => Auth::id(),
                'product_id' => $data['product_id'],
                'rate' => $data['rate'],
            ]);

            $rate->save();
        }
    }

    public function topProducts() {
        $products = Product::query()->limit(7)->orderBy('total_sales', 'DESC')->get();
        $productsModel = [];
        foreach ($products as $product) {
            $productsModel[] = $this->mapProductModel($product);
        }

        return $productsModel;
    }

    public function localeTopProducts() {
        $products = Product::query()->limit(3)->orderBy('total_sales', 'DESC')->get();
        $productsModel = [];
        foreach ($products as $product) {
            $productsModel[] = $this->mapLocaleProduct($product);
        }

        return $productsModel;
    }

    public function localeOffers() {
        $offers = app(Pipeline::class)
            ->send(ProductOffer::query())
            ->through([
                ActiveFilter::class,
                ValidFilter::class,
                LimitFilter::class,
                OffsetFilter::class,
            ])
            ->thenReturn()->get();
//        $offers = ProductOffer::query()
//        ->where('is_active', 1)
//        ->where('validity', 'valid')
//        ->get();
        $productsModel = [];
        foreach ($offers as $offer) {
            $product = Product::query()->where('id', $offer->product_id)->first();
            $productsModel[] = $this->mapLocaleProduct($product);
        }
        return $productsModel;
    }

    //==================================================================//
    //-----------Methods related to the user in the profile-------------//
    public function getUserProductsActivities(User $user) {
        $likedProductsModel = [];
        $favoriteProductsModel = [];
        $ratingProductsModel = [];
        $reviewProductModel = [];

        $likedProducts = UserProductService::getLikedProducts($user->id);
        foreach ($likedProducts as $likedProduct) {
            $likedProductsModel[] = [
                ...$this->mapLocaleProduct($likedProduct),
                'date' => Carbon::make($likedProduct->likes[0]->updated_at)->format('d M, Y')
            ];
        }

        $favoriteProducts = UserProductService::getFavoriteProducts($user->id);
        foreach ($favoriteProducts as $favoriteProduct) {
            $favoriteProductsModel[] = [
                ...$this->mapLocaleProduct($favoriteProduct),
                'date' => Carbon::make($favoriteProduct->favorites[0]->updated_at)->format('d M, Y')
            ];
        }

        $ratingProducts = UserProductService::getRatingsProducts($user->id);
        foreach ($ratingProducts as $ratingProduct) {
            $ratingProductsModel[] =
                [...$this->mapLocaleProduct($ratingProduct),
                    'rating' => $ratingProduct->ratings[0]->rate,
                    'date' => Carbon::make($ratingProduct->ratings[0]->updated_at)->format('d M, Y')
                ];
//            dd($ratingProduct->ratings[0]->rate);
        }

        $reviewProducts = UserProductService::getReviewsProducts($user->id);
        foreach ($reviewProducts as $reviewProduct) {
            $reviewProductModel[] =
                [...$this->mapLocaleProduct($reviewProduct),
                    'review' => $reviewProduct->reviews[0]->review,
                    'date' => Carbon::make($reviewProduct->reviews[0]->updated_at)->format('d M, Y')
                ];
        }

        return [
            'user' => UserService::mapUserShort($user),
            'likes' => $likedProductsModel,
            'favorites' => $favoriteProductsModel,
            'ratings' => $ratingProductsModel,
            'reviews' => $reviewProductModel,
        ];

    }

    public function handleOrderItems($items) {
        foreach ($items as $item) {
            $product = Product::query()->where('id', $item->productId)->first();
            $count = $product->count;
            $totalSales = $product->total_sales;
            $product->fill([
                'count' => max($count - $item->quantity, 0),
                'total_sales' => $totalSales + $item->quantity,
            ]);
            $product->update();
        }
    }
//    *******************************************************************    //
}
