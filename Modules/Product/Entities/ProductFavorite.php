<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Database\factories\ProductFavoriteFactory;

class ProductFavorite extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'favorite',
    ];

    protected $casts = [
        'favorite' => 'boolean',
    ];

    protected static function newFactory()
    {
        return ProductFavoriteFactory::new();
    }
}
