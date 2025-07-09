<?php

namespace Modules\Product\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Cviebrock\EloquentSluggable\Sluggable;

class ProductTranslation extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'product_id',
        'name',
        'description',
        'slug',
        'language',
        'is_active',
    ];

    public function sluggable(): array
    {
        Return [
            'slug' => [
                'source' => 'name',
            ],
        ];

    }

    protected static function newFactory()
    {
        return \Modules\Product\Database\factories\ProductTranslationFactory::new();
    }
}
