<?php

namespace Modules\Website\Entities;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\MenuCategoryFactory;

class MenuCategory extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name',
        'slug',
        'is_active',
    ];

    public function menus() {
        return $this->hasMany(Menu::class, 'category_id', 'id');
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

    protected static function newFactory()
    {
        return MenuCategoryFactory::new();
    }
}
