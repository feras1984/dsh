<?php

namespace Modules\Marketing\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class CountFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->count();
    }
}
