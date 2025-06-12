<?php

namespace Modules\Category\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class NotExtendedFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->where('is_extended', 0);
    }
}
