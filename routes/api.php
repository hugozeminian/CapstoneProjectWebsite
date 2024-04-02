<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GeneralCardController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\SettingsController;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendEmailToUser;

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

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::apiResource('/users', UserController::class);
});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);


//Route::get('/images/{name}', [ImageController::class, 'getImageByName']);

// Skip Route request token, should be placed in route::middleware

//Route::post('/images/{name}', [ImageController::class, 'updateImage']);

Route::post('/generalcard/{reference}', [GeneralCardController::class, 'updateGeneralCardByReference']);
Route::post('/generalcards', [GeneralCardController::class, 'updateMultipleGeneralCards']);

Route::get('/generalcard/image/{reference}', [GeneralCardController::class, 'getImageByReference']);
Route::get('/generalcard/{reference}', [GeneralCardController::class, 'getGeneralCardByReference']);
Route::get('/generalcards', [GeneralCardController::class, 'getAllGeneralCards']);
Route::delete('/generalcard/{reference}', [GeneralCardController::class, 'deleteGeneralCardByReference']);

Route::get('/testconnection', [GeneralCardController::class, 'response']);



Route::post('/api/settings/{section}/{ref}', [SettingsController::class, 'updateSettings']);


Route::get('settings/{reference}',[SettingsController::class,'getSettings']);







Route::post('/send-email', function (Request $request) {

    // Call the convertJsonToPdf method
    $pdfController = new PdfController();

   $pdfFileName= $pdfController->convertJsonToPdf($request);

    Mail::send(new SendEmailToUser($request,$pdfFileName));

    return response()->json(['message' => 'Request Sent to Admin'], 200);
});
