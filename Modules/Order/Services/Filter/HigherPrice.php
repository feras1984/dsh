<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class HigherPrice extends Filter
{

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('higherPrice')) {
            return $builder->where('total_price', '<=', request()->get('higherPrice'));
        }
        else return $builder;
    }
}
