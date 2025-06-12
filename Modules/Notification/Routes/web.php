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
use Modules\Notification\Http\Controllers\NotificationController;

Route::prefix('notification')->group(function() {
    Route::get('/', 'NotificationController@index');
    Route::post('/send-email', [NotificationController::class, 'sendUserEmail']);
});
