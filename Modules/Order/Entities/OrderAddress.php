<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Modules\User\Entities\User;

class OrderAddress extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'user_id',
        'name',
        'country',
        'city',
        'state',
        'longitude',
        'latitude',
        'email',
        'email_2',
        'mobile',
        'mobile_2',
        'phone',
        'phone_2',
        'fax',
        'box',
        'building_name',
        'floor_number',
    ];

    protected static function newFactory()
    {
        return \Modules\Order\Database\factories\OrderAddressFactory::new();
    }

    public function order(): BelongsTo {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function user(): BelongsTo {
        return  $this->belongsTo(User::class, 'user_id', 'id');
    }
}
