<?php

namespace Modules\User\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class CustomerView extends Model
{
    use HasFactory;

    protected $fillable = [];
    protected $table = 'customers_view';

    protected static function newFactory()
    {
        return \Modules\User\Database\factories\CustomerViewFactory::new();
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
