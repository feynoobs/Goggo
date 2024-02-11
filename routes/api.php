<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\LogoutController;
use App\Http\Controllers\Api\BoardListContoller;
use App\Http\Controllers\Api\ThreadListController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('users', function () {
//     return User::all();
// });
Route::group(['name' => 'api.', 'middleware' => ['api']], function() {
    Route::post('/boards', BoardListContoller::class)->name('boards');
    Route::post('/threads', ThreadListController::class)->name('threads');
    Route::post('/login', LoginController::class)->name('login');
    Route::group(['middleware' => ['auth:sanctum']], function() {
        Route::post('/logout', LogoutController::class)->name('logout');
    });
});
