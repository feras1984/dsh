<?php

namespace Modules\Marketing\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\Marketing\Database\factories\OfferFactory;

class Offer extends Model
{
    use HasFactory;

    protected $fillable = [
        'reference_id',
        'reference_type',
        'is_active',
        'is_percent',
        'amount',
        'start_date',
        'end_date',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'is_percent' => 'boolean',
    ];

    protected static function newFactory()
    {
        return OfferFactory::new();
    }

    public function reference(): MorphTo
    {
        return $this->morphTo('reference');
    }
}
