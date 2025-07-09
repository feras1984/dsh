<?php

namespace Modules\Product\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class OrderFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->orderBy('order', 'ASC');
    }
}
