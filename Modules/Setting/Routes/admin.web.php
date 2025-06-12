<?php

use Illuminate\Support\Facades\Route;
use Modules\Setting\Http\Controllers\AdminLanguageController;
use Modules\Setting\Http\Controllers\AdminSettingController;

Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', [AdminSettingController::class, 'index']);
    Route::get('/language', [AdminLanguageController::class, 'index']);
});
