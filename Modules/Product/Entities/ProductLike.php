<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Database\factories\ProductLikeFactory;

class ProductLike extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'like',
    ];

    protected $casts = [
        'like' => 'boolean',
    ];

    protected static function newFactory()
    {
        return ProductLikeFactory::new();
    }
}
