<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class OrderTimelineFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->with('discount');
    }
}
