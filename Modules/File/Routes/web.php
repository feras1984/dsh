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
use Modules\File\Http\Controllers\ImageController;

Route::get('/categories/{img_name}', [ImageController::class, 'getCategoryImg']);
Route::get('/products/{img_name}', [ImageController::class, 'getProductImg']);
Route::get('/blocks/{img_name}', [ImageController::class, 'getBlockImg']);
Route::get('/menus/{file_name}', [ImageController::class, 'getMenuFile']);
Route::get('/logo', [ImageController::class, 'getLogoImg']);
Route::get('/users/{img_name}', [ImageController::class, 'getUserImg']);
Route::get('/uploads/{img_name}', [ImageController::class, 'getUploadImg']);
Route::get('/defaults/{img_name}', [ImageController::class, 'getDefaultImg']);





