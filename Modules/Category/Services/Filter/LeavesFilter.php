<?php

namespace Modules\Category\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class LeavesFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->doesntHave('children');
    }
}
