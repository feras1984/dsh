<?php

namespace Modules\User\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Modules\User\Database\factories\CustomerFactory;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    protected static function newFactory(): CustomerFactory
    {
        return CustomerFactory::new();
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'userable');
    }
}
