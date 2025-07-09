<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Order\Database\factories\ItemOfferFactory;

class ItemOffer extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_details_id',
        'name',
        'type',
        'is_percent',
        'amount',
    ];

    protected $casts = [
        'is_percent' => 'boolean',
    ];

    protected static function newFactory()
    {
        return ItemOfferFactory::new();
    }
}
