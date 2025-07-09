<?php

namespace Modules\File\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\File\Database\factories\FileFactory;

class File extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'url',
        'reference_id',
        'reference_type',
        'order',
        'is_active',
        'is_cover',
        'is_image',
    ];

    protected static function newFactory()
    {
        return FileFactory::new();
    }

    public function reference(): MorphTo
    {
        return $this->morphTo();
    }
}
