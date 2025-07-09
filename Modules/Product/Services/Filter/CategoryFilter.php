<?php

namespace Modules\Product\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class CategoryFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('categoryId')) {
            return $builder->whereHas('categories', function ($query) {
                return $query->where('category_id', request()->get('categoryId'));
            });
        } else return $builder;
    }
}
