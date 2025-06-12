<?php

use Illuminate\Support\Facades\Route;
use Modules\Product\Http\Controllers\AdminProductController;
Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', [AdminProductController::class, 'index'])->name('admin.product');
    Route::get('/create', [AdminProductController::class, 'create'])->name('admin.product.create');
    Route::get('/details/{product}', [AdminProductController::class, 'edit'])->name('category.product.edit');
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::post('/', [AdminProductController::class, 'store'])->name('admin.product.create');
    Route::get('/list', [AdminProductController::class, 'list'])->name('admin.product.list');
    Route::patch('/extended/{product}', [AdminProductController::class, 'extendedCategory'])->name('admin.product.extended.update');
    Route::delete('/extended/{product}', [AdminProductController::class, 'deleteExtended'])->name('admin.product.extended.delete');
    Route::patch('/{product}', [AdminProductController::class, 'update'])->name('admin.product.update');
    Route::post('/image/{product}', [AdminProductController::class, 'addImage'])->name('admin.product.image.add');
    Route::patch('/image/{product}', [AdminProductController::class, 'upload'])->name('admin.product.upload');
    Route::delete('/image/{product}', [AdminProductController::class, 'deleteImage'])->name('admin.product.image.delete');
    Route::patch('/activate/{product}', [AdminProductController::class, 'activate'])->name('admin.product.activate');
    Route::delete('/{product}', [AdminProductController::class, 'destroy'])->name('admin.product.destroy');
    Route::post('/sku/{id?}', [AdminProductController::class, 'uniqueSKU'])->name('admin.product.unique.sku');
    Route::get('/likes/{product}', [AdminProductController::class, 'likes'])->name('admin.product.likes');
    Route::get('/favorites/{product}', [AdminProductController::class, 'favorites'])->name('admin.product.favorites');
    Route::get('/ratings/{product}', [AdminProductController::class, 'ratings'])->name('admin.product.ratings');
    Route::get('/reviews/{product}', [AdminProductController::class, 'reviews'])->name('admin.product.reviews');
    Route::get('/count', [AdminProductController::class, 'count']);
    Route::get('/all/likes', [AdminProductController::class, 'allLikes']);
    Route::get('/all/favorites', [AdminProductController::class, 'allFavorites']);
    Route::get('/all/ratings', [AdminProductController::class, 'allRatings']);
    Route::get('/all/reviews', [AdminProductController::class, 'allReviews']);
    Route::get('/top/sales', [AdminProductController::class, 'topSales']);
});

