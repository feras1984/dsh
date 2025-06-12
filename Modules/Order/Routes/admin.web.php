<?php

use Illuminate\Support\Facades\Route;
use Modules\Order\Http\Controllers\AdminOrderController;
Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', [AdminOrderController::class, 'index']);
    Route::get('/details/{order}', [AdminOrderController::class, 'edit']);
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::get('/list', [AdminOrderController::class, 'list']);
    Route::patch('/payment/{order}', [AdminOrderController::class, 'paid']);
    Route::patch('/status/{order}', [AdminOrderController::class, 'status']);
    Route::get('/count', [AdminOrderController::class, 'count']);
    Route::get('/price', [AdminOrderController::class, 'totalPrice']);
    Route::get('/timeline', [AdminOrderController::class, 'timeline']);
});


