<?php

use Illuminate\Support\Facades\Route;

use App\Models\TThread;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    // $obj = new \App\Models\TThread();
    // dd(TThread::find(1));
    // dd($obj->responses);
    dd(\App\Models\Thread::find(1)->responses);
});
// Route::get('/{any?}', fn() => view('app'))->where('any', '.+');
