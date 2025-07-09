<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class PaidOrder extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('isPaid')) {
            $paymentStatus = request()->get('isPaid') === 'true';
            return $builder->where('is_paid', $paymentStatus);
        } else return $builder;
    }
}
