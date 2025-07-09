<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Category\Database\factories\CategoryTranslationFactory;
use Cviebrock\EloquentSluggable\Sluggable;

class CategoryTranslation extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'category_id',
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
        return CategoryTranslationFactory::new();
    }
}
