<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\GeneralCardController;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\SettingsController;
use App\Mail\SendEmailToAdmin;
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

Route::post('/generalcard/{reference}', [GeneralCardController::class, 'updateGeneralCardByReference']);
Route::post('/generalcards', [GeneralCardController::class, 'updateMultipleGeneralCards']);

Route::get('/generalcard/image/{reference}', [GeneralCardController::class, 'getImageByReference']);
Route::get('/generalcard/{reference}', [GeneralCardController::class, 'getGeneralCardByReference']);
Route::get('/generalcards', [GeneralCardController::class, 'getAllGeneralCards']);
Route::delete('/generalcard/{reference}', [GeneralCardController::class, 'deleteGeneralCardByReference']);

Route::get('/testconnection', [GeneralCardController::class, 'response']);



Route::post('/settings', [SettingsController::class, 'updateSettings']);
Route::get('/settings', [SettingsController::class, 'getAllSettings']);



Route::post('/send-email', function (Request $request) {

    // Call the convertJsonToPdf method
    $pdfController = new PdfController();
    $pdfFileName= $pdfController->convertJsonToPdf($request);

   $generalSettings = new SettingsController();
   $settings = $generalSettings->getInternalSettings();
   $adminEmail = $settings['contactMe']['contactMeEmail'];

    Mail::send(new SendEmailToUser($request,$pdfFileName));

    Mail::send(new SendEmailToAdmin($request,$pdfFileName,$adminEmail));

    return response()->json(['message' => 'Request Sent to Admin'], 200);
});
