<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Modules\Category\Entities\Category;
use Modules\File\Entities\File;
use Modules\Product\Database\factories\ProductFactory;
use Modules\User\Entities\User;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'order',
        'is_active',
        'sell_price',
        'original_price',
        'count',
        'sku',
        'total_sales',
        'is_featured',
    ];

    protected static function newFactory(): ProductFactory
    {
        return ProductFactory::new();
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function images(): MorphMany
    {
        return $this->morphMany(File::class, 'reference')->where('is_image', true);
    }

    public function translations(): HasMany
    {
        return $this->hasMany(ProductTranslation::class, 'product_id', 'id');
    }

    public function likes(): HasMany
    {
        return $this->hasMany(ProductLike::class, 'product_id', 'id');
    }

    public function favorites(): HasMany
    {
        return $this->hasMany(ProductFavorite::class, 'product_id', 'id');
    }

    public function reviews(): HasMany
    {
        return $this->hasMany(ProductReview::class, 'product_id', 'id');
    }

    public function ratings(): HasMany
    {
        return $this->hasMany(ProductRating::class, 'product_id', 'id');
    }

    public function userLikes(): BelongsToMany
    {
        return $this->belongsToMany(User::class, ProductLike::class,
            'product_id', 'user_id', 'id')
            ->wherePivot('like', 1)
            ->withPivot('created_at');
    }

    public function userFavorites(): BelongsToMany
    {
        return $this
            ->belongsToMany(User::class, ProductFavorite::class,
                'product_id', 'user_id', 'id')
            ->wherePivot('favorite', 1)
            ->withPivot('created_at');
    }

    public function userRatings(): BelongsToMany
    {
        return $this
            ->belongsToMany(User::class, ProductRating::class,
            'product_id', 'user_id', 'id')
            ->withPivot('created_at', 'rate');
    }

    public function userReviews(): BelongsToMany
    {
        return $this
            ->belongsToMany(User::class, ProductReview::class,
            'product_id', 'user_id', 'id')
            ->withPivot('id', 'created_at', 'review', 'is_active');
    }

    public function categories(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, ProductCategory::class,
        'product_id', 'category_id', 'id');
    }

    public function extended(): BelongsToMany
    {
        return $this->belongsToMany(Category::class, ProductCategory::class,
        'product_id', 'category_id', 'id')
            ->wherePivot('is_extended', 1);
    }


}
