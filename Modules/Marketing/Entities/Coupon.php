<?php

namespace Modules\Marketing\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Modules\Marketing\Database\factories\CouponFactory;

class Coupon extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
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
        return CouponFactory::new();
    }
}
