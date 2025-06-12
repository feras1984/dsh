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

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Modules\Product\Http\Controllers\ProductController;
use Modules\User\Http\Controllers\ProfileController;
use Modules\User\Http\Controllers\Site\Auth\AuthenticatedSessionController;
use Modules\User\Http\Controllers\Site\Auth\ConfirmablePasswordController;
use Modules\User\Http\Controllers\Site\Auth\EmailVerificationNotificationController;
use Modules\User\Http\Controllers\Site\Auth\EmailVerificationPromptController;
use Modules\User\Http\Controllers\Site\Auth\NewPasswordController;
use Modules\User\Http\Controllers\Site\Auth\PasswordController;
use Modules\User\Http\Controllers\Site\Auth\PasswordResetLinkController;
use Modules\User\Http\Controllers\Site\Auth\RegisteredUserController;
use Modules\User\Http\Controllers\Site\Auth\VerifyEmailController;
use Modules\Website\Http\Controllers\Site\BlockController;
use Modules\Website\Http\Controllers\Site\HomeController;

Route::get('/', function () {
    return redirect(\app()->getLocale() . '/home');
})->name('home');
Route::middleware('language')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home');
    Route::get('/block/{category}', [BlockController::class, 'index']);
    Route::get('/block/details/{category}/{block}', [BlockController::class, 'show']);
});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'language'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::patch('/profile/avatar', [ProfileController::class, 'uploadProfile']);
});

Route::middleware(['guest', 'language'])->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware(['auth', 'language'])->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});

Route::get('/test', function () {
    $order = \Modules\Order\Entities\Order::query()->where('id', 11)->first();
//    event(new \Modules\Order\Events\InvoiceEvent($order));

    return view('order::emails.invoice', [
        'order' => \Modules\Order\Facades\OrderService::mapOrderModel($order),
    ]);
});


