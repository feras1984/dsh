<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;

class RevenueFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        return $builder->with('discount')->get()->sum(function ($order) {
            // Calculate the total discount for the order
            $d = $order->discount()->get();
            if (is_null($d)) return $order->total_price;
            $totalDiscount = $d->sum(function ($discount) use ($order) {
                return $discount->is_percent ?
                    $order->total_price * ($discount->amount / 100) :
                    $discount->amount;
            });
            // Calculate the adjusted total price for the order
            return $order->total_price - $totalDiscount;
        });
    }
}
