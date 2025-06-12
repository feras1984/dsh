<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class OrderStatus extends Filter
{

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('status')) {
            return $builder->where('status', request()->get('status'));
        } else return $builder;
    }
}
