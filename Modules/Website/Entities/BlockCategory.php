<?php

namespace Modules\Website\Entities;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\BlockCategoryFactory;

class BlockCategory extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name',
        'slug',
        'description',
        'block_type',
        'is_active',
    ];

    public function blocks() {
        return $this->hasMany(Block::class, 'category_id', 'id');
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
        return BlockCategoryFactory::new();
    }
}
