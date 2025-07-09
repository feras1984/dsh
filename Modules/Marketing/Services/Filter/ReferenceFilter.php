<?php

namespace Modules\Marketing\Services\Filter;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;

class ReferenceFilter extends Filter
{

    protected function applyFilter(Builder $builder, ...$args)
    {
        $id = $args[0][0];
        $reference = $args[0][1];
        return $builder
            ->orWhere('reference_id', $id)
            ->where('reference_type', $reference)
            ->where('end_date', '>=', Carbon::now())
            ->where('is_active', 1);
//            ->orderBy('created_at', 'DESC');

        // TODO: Implement applyFilter() method.
    }
}
