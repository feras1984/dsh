<?php

namespace Modules\Order\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class OrderDiscountView extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $table = 'order_discounts_view';
}
