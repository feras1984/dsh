<?php

namespace Modules\Setting\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Setting\Database\factories\LanguageFactory;

class Language extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'code',
        'flag_code',
        'level_order',
        'is_active',
    ];

    protected static function newFactory()
    {
        return LanguageFactory::new();
    }
}
