<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\Category\Http\Controllers\AdminCategoryController;

Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', [AdminCategoryController::class, 'index'])->name('admin.category');
    Route::get('/create', [AdminCategoryController::class, 'create']);
    Route::get('/reorder', [AdminCategoryController::class, 'reorder']);
    Route::get('/{category}', [AdminCategoryController::class, 'edit']);
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::post('/', [AdminCategoryController::class, 'store'])->name('category.create');
    Route::post('/reorder', [AdminCategoryController::class, 'storeReorder']);
    Route::patch('/image/{category}', [AdminCategoryController::class, 'upload']);
    Route::patch('/{category}', [AdminCategoryController::class, 'update']);
    Route::patch('/activate/{category}', [AdminCategoryController::class, 'activate']);
    Route::patch('/extend/{category}', [AdminCategoryController::class, 'extend']);
    Route::delete('/{category}', [AdminCategoryController::class, 'destroy']);
});
