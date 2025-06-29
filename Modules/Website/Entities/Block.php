<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Modules\File\Entities\File;
use Modules\Website\Database\factories\BlockFactory;

class Block extends Model
{
    use HasFactory;

    protected $fillable = [
        'category_id',
        'parent_id',
        'category',
        'name',
        'description',
        'image',
        'url',
        'file',
        'order',
        'is_active',
        'start_date',
        'end_date',
        'classification',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(BlockCategory::class, 'category_id', 'id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Block::class, 'parent_id', 'id');
    }

    public function translations(): HasMany
    {
        return $this->hasMany(BlockTranslation::class, 'block_id', 'id');
    }

    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'reference');
    }

    public function images(): MorphMany
    {
        return $this->morphMany(File::class, 'reference')->where('is_image', true);
    }

    public function project(): HasOne
    {
        return $this->hasOne(Project::class, 'block_id', 'id');
    }

    protected static function newFactory()
    {
        return BlockFactory::new();
    }
}
