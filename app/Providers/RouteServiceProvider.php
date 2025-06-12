<?php

namespace App\Providers;

use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * Typically, users are redirected here after authentication.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Define your route model bindings, pattern filters, and other route configuration.
     */
    public function boot(): void
    {
        RateLimiter::for('api', function (Request $request) {
            return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
        });

        $this->routes(function () {
//            Route::middleware('api')
//                ->prefix('api')
//                ->group(base_path('routes/api.php'));
//
            Route::middleware('web')
                ->group(base_path('routes/web.php'));
//            =================================================
//            This snippet if no languages required:
//            =================================================

            Route::middleware('web')
                ->prefix('/admin')
            ->group(base_path('routes/admin.web.php'));
//            =================================================
//            This snippet for languages only:
//            =================================================
            Route::middleware(['web', 'language'])
                ->prefix('{locale}/admin')
                ->where(['locale' => '[a-zA-Z]{2}'])
                ->group(base_path('routes/admin.web.php'));
//            =================================================
        });
    }
}
