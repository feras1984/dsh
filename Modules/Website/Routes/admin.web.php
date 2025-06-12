<?php

use Illuminate\Support\Facades\Route;
use Modules\Website\Http\Controllers\Admin\BlockCategoryController;
use Modules\Website\Http\Controllers\Admin\BlockController;
use Modules\Website\Http\Controllers\Admin\MenuCategoryController;
use Modules\Website\Http\Controllers\Admin\MenuController;

Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', function () {
        return Inertia\Inertia::render('Admin/Website/WebsiteContainer');
    });

    Route::resource('/block-category', BlockCategoryController::class);
    Route::get('/get-block/{category}', [BlockController::class, 'getBlocks']);
    Route::get('/block/create/{category}', [BlockController::class, 'create']);
    Route::get('/block/reorder/{category}', [BlockController::class, 'reorder']);
    Route::get('/block/details/{block}', [BlockController::class, 'edit']);

    Route::get('/get-menu/{category}', [MenuController::class, 'getMenus']);
    Route::get('/menu/create/{category}', [MenuController::class, 'create']);
    Route::get('/menu/reorder/{category}', [MenuController::class, 'reorder']);
    Route::get('/menu/details/{menu}', [MenuController::class, 'edit']);
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::post('/block', [BlockController::class, 'store']);
    Route::post('/block/upload/file/{block}', [BlockController::class, 'addImage'])->name('admin.block.image.add');
    Route::patch('/block/upload/file/{block}', [BlockController::class, 'uploadFile']);
    Route::delete('/block/upload/file/{block}', [BlockController::class, 'deleteImage'])->name('admin.block.image.delete');
    Route::patch('/block/activation/{block}', [BlockController::class, 'blockActivation']);
    Route::patch('/block/general-info/{id}', [BlockController::class, 'update_general_info']);
    Route::patch('/block/description/{id}', [BlockController::class, 'update_description_info']);
    Route::patch('/block/translations/{block}', [BlockController::class, 'updateTranslation']);
    Route::delete('/block/{block}', [BlockController::class, 'destroy']);
    Route::post('/block/reorder', [BlockController::class, 'storeReorder']);

    Route::post('/menu', [MenuController::class, 'store']);
    Route::patch('/menu/{menu}', [MenuController::class, 'update']);
    Route::patch('/menu/upload/file/{menu}', [MenuController::class, 'uploadFile']);
    Route::patch('/menu/activation/{menu}', [MenuController::class, 'menuActivation']);
    Route::delete('/menu/{menu}', [MenuController::class, 'destroy']);
    Route::post('/menu/reorder', [MenuController::class, 'storeReorder']);
});
