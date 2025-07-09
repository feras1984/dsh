<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDiscount extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'type',
        'code',
        'is_percent',
        'amount',
    ];

    protected static function newFactory()
    {
        return \Modules\Order\Database\factories\OrderDiscountFactory::new();
    }
}
