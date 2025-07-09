<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\MenuCategoryTranslationFactory;

class MenuCategoryTranslation extends Model
{
    use HasFactory;

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
        return MenuCategoryTranslationFactory::new();
    }
}
