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
use Modules\Category\Http\Controllers\CategoryController;

//Route::prefix('category')->group(function() {
//    Route::get('/', 'CategoryController@index');
//});

Route::middleware(['language'])->group(function() {
    Route::get('/', [CategoryController::class, 'index']);
    Route::get('/{category}', [CategoryController::class, 'show']);
//    Route::get('/create', [CategoryController::class, 'create']);
//    Route::post('/', [CategoryController::class, 'store'])->name('category.create');
//    Route::get('/{id}', [CategoryController::class, 'edit']);
//    Route::patch('/{id}', [CategoryController::class, 'update']);
//    Route::patch('/image/{id}', [CategoryController::class, 'upload']);
//    Route::delete('/{id}', [CategoryController::class, 'destroy']);
});
