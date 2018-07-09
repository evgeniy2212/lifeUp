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

Route::get('/', function() {

    return redirect('/ru');
});

Route::get('/{locale}', 'StartController@index')->name('base');

Route::resource('comments', 'CommentController');

Route::post('/mail', 'mailController@send')->name('mail');

Route::post('/mail_present', 'mailController@send_present')->name('mail_present');

