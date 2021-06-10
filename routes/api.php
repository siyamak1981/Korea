<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/me', function (Request $request) {
//     return $request->user();
// });
Route::post('/login', 'Api\Auth\Authcontroller@login')->name('api.login'); 
Route::post('/register', 'Api\Auth\Authcontroller@register')->name('api.register'); 
Route::get('/logout', 'Api\Auth\Authcontroller@logout')->name('api.logout'); 
Route::post('/forget-password', 'Api\Auth\ForgetPasswordController@sendResetLinkEmail')->name('api.forget-password'); 
Route::post('/reset-password', 'Api\Auth\ResetPasswordController@reset')->name('api.reset-password');

Route::group(['middleware'=>'auth:api'], function(){
    Route::get('/profile', 'Api\Auth\UserController@index')->name('api.profile');
    Route::get('/profile/edit/{name}', 'Api\Auth\UserController@edit')->name('api.edit_profile');
    Route::post('/profile/update/{name}', 'Api\Auth\UserController@update')->name('api.update_profile');
    });