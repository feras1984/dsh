<?php

namespace Modules\Website\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Factory;
use Illuminate\Support\Str;
use Modules\Website\Enums\BlockCategoryEnum;
use Modules\Website\Services\Articles\ArticleCategoryService;
use Modules\Website\Services\Articles\ArticleService;
use Modules\Website\Services\Blocks\AboutDSHService;
use Modules\Website\Services\Blocks\BlockCategoryService;
use Modules\Website\Services\Blocks\BlockService;
use Modules\Website\Services\Blocks\ClientService;
use Modules\Website\Services\Blocks\GeneralDirectorService;
use Modules\Website\Services\Blocks\IndustryService;
use Modules\Website\Services\Blocks\ProjectService;
use Modules\Website\Services\menus\MenuCategoryService;
use Modules\Website\Services\menus\MenuService;

class WebsiteServiceProvider extends ServiceProvider
{
    /**
     * @var string $moduleName
     */
    protected $moduleName = 'Website';

    /**
     * @var string $moduleNameLower
     */
    protected $moduleNameLower = 'website';

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerTranslations();
        $this->registerConfig();
        $this->registerViews();
        $this->loadMigrationsFrom(module_path($this->moduleName, 'Database/Migrations'));
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->register(RouteServiceProvider::class);

        $this->app->singleton('BlockCategoryService', function () {
            return new BlockCategoryService();
        });

        $this->app->singleton('BlockService', function () {
            if (request()->has('category')) {
//                dd(request()->category);
                $category = request()->get('category');
                return match ($category) {
                    Str::slug(BlockCategoryEnum::CLIENTS->value) => new ClientService(),
                    Str::slug(BlockCategoryEnum::PROJECTS->value) => new ProjectService(),
                    Str::slug(BlockCategoryEnum::ABOUT_DSH->value) => new AboutDSHService(),
                    Str::slug(BlockCategoryEnum::GENERAL_DIRECTOR_SPEECH->value) => new GeneralDirectorService(),
                    Str::slug(BlockCategoryEnum::INDUSTRIES->value) => new IndustryService(),
                    default => new BlockService(),
                };
            } else {
                return new BlockService();
            }
//            return new BlockService();
        });

        $this->app->singleton('industryService', function () {
            return new IndustryService();
        });

        $this->app->singleton('ProjectService', function () {
            return new ProjectService();
        });

        $this->app->singleton('ClientService', function () {
            return new ClientService();
        });

        $this->app->singleton('MenuCategoryService', function () {
            return new MenuCategoryService();
        });

        $this->app->singleton('MenuService', function () {
            return new MenuService();
        });

        $this->app->singleton('ArticleCategoryService', function () {
            return new ArticleCategoryService();
        });

        $this->app->singleton('ArticleService', function () {
            return new ArticleService();
        });
    }

    /**
     * Register config.
     *
     * @return void
     */
    protected function registerConfig()
    {
        $this->publishes([
            module_path($this->moduleName, 'Config/config.php') => config_path($this->moduleNameLower . '.php'),
        ], 'config');
        $this->mergeConfigFrom(
            module_path($this->moduleName, 'Config/config.php'), $this->moduleNameLower
        );
    }

    /**
     * Register views.
     *
     * @return void
     */
    public function registerViews()
    {
        $viewPath = resource_path('views/modules/' . $this->moduleNameLower);

        $sourcePath = module_path($this->moduleName, 'Resources/views');

        $this->publishes([
            $sourcePath => $viewPath
        ], ['views', $this->moduleNameLower . '-module-views']);

        $this->loadViewsFrom(array_merge($this->getPublishableViewPaths(), [$sourcePath]), $this->moduleNameLower);
    }

    /**
     * Register translations.
     *
     * @return void
     */
    public function registerTranslations()
    {
        $langPath = resource_path('lang/modules/' . $this->moduleNameLower);

        if (is_dir($langPath)) {
            $this->loadTranslationsFrom($langPath, $this->moduleNameLower);
            $this->loadJsonTranslationsFrom($langPath);
        } else {
            $this->loadTranslationsFrom(module_path($this->moduleName, 'Resources/lang'), $this->moduleNameLower);
            $this->loadJsonTranslationsFrom(module_path($this->moduleName, 'Resources/lang'));
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [];
    }

    private function getPublishableViewPaths(): array
    {
        $paths = [];
        foreach (\Config::get('view.paths') as $path) {
            if (is_dir($path . '/modules/' . $this->moduleNameLower)) {
                $paths[] = $path . '/modules/' . $this->moduleNameLower;
            }
        }
        return $paths;
    }
}
