<?php

use Illuminate\Support\Facades\Route;
use Modules\Marketing\Http\Controllers\AdminCouponController;
use Modules\Marketing\Http\Controllers\AdminLoyaltyPointController;
use Modules\Marketing\Http\Controllers\AdminOfferController;
Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
//    OFFER PAGES:
    Route::get('/offer', [AdminOfferController::class, 'index']);
    Route::get('/offer/create', [AdminOfferController::class, 'create']);
    Route::get('/offer/details/{offer}', [AdminOfferController::class, 'edit']);

//    COUPON PAGES:
    Route::get('/coupon', [AdminCouponController::class, 'index']);
    Route::get('/coupon/create', [AdminCouponController::class, 'create']);
    Route::get('/coupon/details/{coupon}', [AdminCouponController::class, 'edit']);

//    LOYALTY POINTS PAGES:
    Route::get('/loyalty', [AdminLoyaltyPointController::class, 'index']);
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::post('/offer', [AdminOfferController::class, 'store']);
    Route::patch('/offer/{offer}', [AdminOfferController::class, 'update']);
    Route::patch('/offer/activate/{offer}', [AdminOfferController::class, 'activate']);
    Route::delete('/offer/{offer}', [AdminOfferController::class, 'destroy']);

    Route::post('/coupon', [AdminCouponController::class, 'store']);
    Route::patch('/coupon/{coupon}', [AdminCouponController::class, 'update']);
    Route::patch('/coupon/activate/{coupon}', [AdminCouponController::class, 'activate']);
    Route::delete('/coupon/{coupon}', [AdminCouponController::class, 'destroy']);
});

