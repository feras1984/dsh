<?php

namespace Modules\Website\Entities;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\BlockCategoryTranslationFactory;

class BlockCategoryTranslation extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name',
        'category_id',
        'description',
        'slug',
        'is_active',
        'language',
    ];

    protected static function newFactory()
    {
        return BlockCategoryTranslationFactory::new();
    }

    public function sluggable(): array
    {
        // TODO: Implement sluggable() method.
        Return [
            'slug' => [
                'source' => 'name',
            ],
        ];

    }
}
