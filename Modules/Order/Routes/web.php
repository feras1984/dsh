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
use Modules\Order\Http\Controllers\OrderController;

//Route::prefix('order')->group(function() {
//    Route::get('/', 'OrderController@index');
//});
Route::middleware(['language', 'auth'])->group(function () {
    Route::get('/', [OrderController::class, 'create']);
    Route::get('/list', [OrderController::class, 'list']);
});

Route::middleware(['auth'])->group(function () {
    Route::post('/', [OrderController::class, 'store']);
});
