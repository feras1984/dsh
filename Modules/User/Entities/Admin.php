<?php

namespace Modules\User\Entities;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Modules\User\Database\factories\AdminFactory;

class Admin extends Model
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'role',
    ];

    protected static function newFactory(): AdminFactory
    {
        return AdminFactory::new();
    }

    public function user(): MorphOne
    {
        return $this->morphOne(User::class, 'userable');
    }
}
