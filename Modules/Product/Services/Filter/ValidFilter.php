<?php

namespace Modules\Product\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class ValidFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->where('validity', 'valid');
    }
}
