<?php

namespace Modules\Product\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class ActiveFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->where('is_active', 1);
    }
}
