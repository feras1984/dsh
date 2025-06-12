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
use Modules\Setting\Http\Controllers\LanguageController;
use Modules\Setting\Http\Controllers\SettingController;

Route::prefix('setting')->group(function() {
    Route::get('/', [SettingController::class, 'index']);
    Route::get('/languages', [LanguageController::class, 'index']);
    Route::patch('/language/set', [LanguageController::class, 'change']);
});
