<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Modules\Order\Database\factories\OrderDetailFactory;
use Modules\Product\Entities\Product;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'offer_id',
        'offer_type',
        'quantity',
        'start_date',
        'end_date',
        'unit_price',
        'currency',
    ];

    protected static function newFactory()
    {
        return OrderDetailFactory::new();
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }

    public function offer(): HasOne
    {
        return $this->hasOne(ItemOffer::class, 'order_details_id', 'id');
    }
}
