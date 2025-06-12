<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class SearchFilter extends Filter
{
    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('search')) {
            $search = request()->get('search');
            return $builder
                ->where('transaction_number',  'LIKE', "%{$search}%")
                ->orWhere('reference_token', 'LIKE', "%{$search}%")
                ;
        }
        else return $builder;
    }
}
