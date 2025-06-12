<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\Order\Database\factories\OrderFactory;
use Modules\User\Entities\User;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'offer_id',
        'order_number',
        'offer_type',
        'transaction_number',
        'reference_token',
        'total_price',
        'status',
        'pending',
        'currency',
        'is_paid',
        'payment_date',
        'customer_notes',
        'is_archived',
    ];

    protected $casts = [
        'is_paid' => 'boolean',
    ];

    protected static function newFactory(): OrderFactory
    {
        return OrderFactory::new();
    }

    public function user (): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function offer (): MorphTo
    {
        return $this->morphTo('offer');
    }

    public function details(): HasMany
    {
        return $this->hasMany(OrderDetail::class, 'order_id', 'id');
    }

    public function address(): HasOne
    {
        return $this->hasOne(OrderAddress::class, 'order_id', 'id');
    }

    public function discount(): HasOne
    {
        return $this->hasOne(OrderDiscount::class, 'order_id', 'id');
    }
}
