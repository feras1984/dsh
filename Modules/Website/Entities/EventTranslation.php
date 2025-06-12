<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\EventTranslationFactory;

class EventTranslation extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function newFactory()
    {
        return EventTranslationFactory::new();
    }
}
