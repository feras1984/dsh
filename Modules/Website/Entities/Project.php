<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\Website\Database\factories\ProjectFactory;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'block_id',
        'location',
        'date_of_completion',
        'value',
        'is_completed'
    ];

    protected $casts = [
        'is_completed' => 'boolean',
    ];

    protected static function newFactory()
    {
        return ProjectFactory::new();
    }

    public function block(): BelongsTo
    {
        return $this->belongsTo(Block::class, 'block_id', 'id');
    }
}
