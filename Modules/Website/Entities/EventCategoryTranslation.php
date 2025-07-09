<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\EventCategoryTranslationFactory;

class EventCategoryTranslation extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function newFactory()
    {
        return EventCategoryTranslationFactory::new();
    }
}
