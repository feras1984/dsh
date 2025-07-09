<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Product\Database\factories\ProductRatingFactory;

class ProductRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'product_id',
        'rate',
    ];

    protected static function newFactory()
    {
        return ProductRatingFactory::new();
    }
}
