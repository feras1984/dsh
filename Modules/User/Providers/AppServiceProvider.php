<?php

namespace Modules\User\Providers;

use App\Services\UserService\CustomerService\Normal\NormalService;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Modules\User\Entities\Admin;
use Modules\User\Entities\Customer;
use Modules\User\Entities\User;
use Modules\User\Observers\UserObserver;
use Modules\User\Policies\UserPolicy;
use Modules\User\UserService\AdminService\Administrator\AdministratorService;
use Modules\User\UserService\CustomerService\Influencer\InfulencerService;
use Modules\User\UserService\UserService;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        User::observe(UserObserver::class);
    }
}
