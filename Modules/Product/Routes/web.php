<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Route;
use Modules\Product\Http\Controllers\ProductController;

Route::middleware(['language'])->group(function() {
//    Route::get('/', 'ProductController@index');
    Route::get('/list', [ProductController::class, 'index']);
    Route::get('/get/{product}', [ProductController::class, 'get']);
    Route::get('/search/{name}', [ProductController::class, 'getAsyncProducts']);
    Route::get('/activities', [ProductController::class, 'activities'])->middleware(['auth']);
    Route::get('/top/sales', [ProductController::class, 'topSales']);
    Route::get('/offers', [ProductController::class, 'offers']);
    Route::get('/{product}', [ProductController::class, 'show']);
});

Route::middleware('auth')->group(function () {
    Route::post('/like', [ProductController::class, 'like']);
    Route::post('/favorite', [ProductController::class, 'favorite']);
    Route::post('/review', [ProductController::class, 'review']);
    Route::post('/rate', [ProductController::class, 'rate']);
});
