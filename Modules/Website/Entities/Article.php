<?php

namespace Modules\Website\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Website\Database\factories\ArticleFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = [];

    protected static function newFactory()
    {
        return ArticleFactory::new();
    }
}
