<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\User\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use Modules\User\Http\Controllers\AdminController;
use Modules\User\Http\Controllers\AdminUserController;
use Modules\User\Http\Controllers\CustomerController;

//Route::get('/', [AdminUserController::class, 'index']);
Route::middleware(['language', 'admin.auth'])->get('/', function () {
    return Inertia::render('Admin/Home/Home');
})->name('admin.home');

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::get('/user/list', [CustomerController::class, 'list']);
    Route::patch('/user/review/activate', [CustomerController::class, 'review']);
    Route::patch('/user/list/{user}', [CustomerController::class, 'activate']);
    Route::get('/user/count', [CustomerController::class, 'count']);
});

Route::middleware(['language', 'admin.auth', 'admin.permission'])->group(function () {
    Route::get('/', [AdminController::class, 'index']);
    Route::get('/user', [CustomerController::class, 'index']);
    Route::get('/user/activities/{user}', [CustomerController::class, 'activities']);
    Route::get('/user/orders/{user}', [CustomerController::class, 'orders']);
    Route::get('/user/{user}', [CustomerController::class, 'edit']);
});

Route::middleware(['language', 'guest'])->group(function () {
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('admin.login');
});

Route::middleware(['admin.auth', 'admin.permission'])->group(function () {
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

Route::post('login', [AuthenticatedSessionController::class, 'store'])->name('admin.store');



//require __DIR__.'/auth.php';
