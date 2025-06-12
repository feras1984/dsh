<?php

namespace Modules\User\Policies;

use Illuminate\Auth\Access\HandlesAuthorization;
use Illuminate\Support\Facades\Request;
use Modules\User\Entities\Admin;
use Modules\User\Entities\User;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    public function admin(User $user): bool
    {
        return $user->userable()->first() instanceof Admin;
    }
}
