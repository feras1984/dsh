<?php

namespace Modules\Category\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CategoryView extends Model
{
    use HasFactory;

    protected $table = 'categories_view';

    protected $fillable = [];

    protected static function newFactory()
    {
        return \Modules\Category\Database\factories\CategoryViewFactory::new();
    }
}
