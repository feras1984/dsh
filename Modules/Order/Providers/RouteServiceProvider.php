<?php

namespace Modules\Order\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The module namespace to assume when generating URLs to actions.
     *
     * @var string
     */
    protected $moduleNamespace = 'Modules\Order\Http\Controllers';

    /**
     * Called before routes are registered.
     *
     * Register any model bindings or pattern based filters.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->prefix('order')
            ->namespace($this->moduleNamespace)
            ->group(module_path('Order', '/Routes/web.php'));

        Route::middleware('web')
            ->prefix('admin/order')
            ->namespace($this->moduleNamespace)
            ->group(module_path('Order', '/Routes/admin.web.php'));
//            =================================================
//            This snippet for languages only:
//            =================================================
        Route::middleware(['web'])
            ->prefix('{locale}/order')
            ->where(['locale' => '[a-zA-Z]{2}'])
            ->group(module_path('Order', '/Routes/web.php'));
        Route::middleware(['web'])
            ->prefix('{locale}/admin/order')
            ->where(['locale' => '[a-zA-Z]{2}'])
            ->group(module_path('Order', '/Routes/admin.web.php'));
//            =================================================
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->moduleNamespace)
            ->group(module_path('Order', '/Routes/api.php'));
    }
}
