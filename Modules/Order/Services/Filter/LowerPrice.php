<?php

namespace Modules\Order\Services\Filter;

use Illuminate\Database\Eloquent\Builder;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class LowerPrice extends Filter
{

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('lowerPrice')) {
            return $builder->where('total_price', '>=', request()->get('lowerPrice'));
        }
        else return $builder;
    }
}
