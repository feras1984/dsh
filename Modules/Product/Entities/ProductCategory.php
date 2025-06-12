<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Database\factories\ProductCategoryFactory;

class ProductCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'category_id',
        'is_active',
        'is_extended',
    ];

    protected static function newFactory()
    {
        return ProductCategoryFactory::new();
    }
}
