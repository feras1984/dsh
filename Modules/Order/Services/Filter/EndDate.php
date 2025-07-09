<?php

namespace Modules\Order\Services\Filter;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Psr\Container\ContainerExceptionInterface;
use Psr\Container\NotFoundExceptionInterface;

class EndDate extends Filter
{

    /**
     * @throws ContainerExceptionInterface
     * @throws NotFoundExceptionInterface
     */
    protected function applyFilter(Builder $builder, ...$args)
    {
        if (request()->has('toDate')) {
            return $builder->where('created_at', '<=', Carbon::parse(request()->get('toDate')));
        }
        else return $builder;
    }
}
