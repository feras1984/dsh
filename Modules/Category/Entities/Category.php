<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Modules\Category\Database\factories\CategoryFactory;
use Modules\File\Entities\File;
use Modules\Marketing\Entities\Offer;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_id',
        'order',
        'is_active',
        'is_extended',
    ];

    protected static function newFactory(): CategoryFactory
    {
        return CategoryFactory::new();
    }

    public function children(): HasMany
    {
        return $this
            ->hasMany(Category::class, 'parent_id', 'id')
            ->orderBy('order', 'ASC');
    }

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'parent_id', 'id');
    }

    public function images(): MorphMany
    {
        return $this->morphMany(File::class, 'reference')->where('is_image', true);
    }

    public function translations(): HasMany
    {
        return $this->hasMany(CategoryTranslation::class, 'category_id', 'id');
    }

    public function offer(): MorphOne
    {
        return $this->morphOne(Offer::class, 'reference');
    }
}
