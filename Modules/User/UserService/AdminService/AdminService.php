<?php

namespace Modules\User\UserService\AdminService;

use Modules\User\Entities\Admin;
use Modules\User\Entities\User;
use Modules\User\Facades\UserService\CustomerService\Normal\NormalService;
use Modules\User\UserService\UserService;

class AdminService extends UserService
{
    public function mapUserModel(User $user)
    {
        $userInfo = parent::mapUserModel($user);
        $normalInfo = [
            'type' => 'admin',
            'name' => $user->userable()->first()->first_name . ' ' . $user->userable()->first()->last_name,
        ];

        return [...$userInfo, ...$normalInfo];
    }

    public function mapUserShort(User $user)
    {
        $userInfo = parent::mapUserShort($user);
        return [
            ...$userInfo,
            'name' => $user->userable()->first()->first_name . ' ' . $user->userable()->first()->last_name,
        ];
    }

    public function getName(User $user)
    {
        return $user->userable()->first()->first_name . ' ' . $user->userable()->first()->last_name;
        // TODO: Implement getName() method.
    }

    public function getAdmins() {
        $admins = parent::getUsers(Admin::class);
        dd($admins);
    }
}
