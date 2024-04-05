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
use App\Mail\SendReachOutEmailToAdmin;
use App\Mail\SendReachOutEmailToUser;

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

Route::get('/generalcard/image/{reference}', [GeneralCardController::class, 'getImageByReference']);
Route::get('/generalcard/{reference}', [GeneralCardController::class, 'getGeneralCardByReference']);
Route::get('/generalcards', [GeneralCardController::class, 'getAllGeneralCards']);
Route::delete('/generalcard/{reference}', [GeneralCardController::class, 'deleteGeneralCardByReference']);


Route::post('/settings', [SettingsController::class, 'updateSettings']);
Route::get('/settings', [SettingsController::class, 'getAllSettings']);

Route::post('/send-email-form-request', function (Request $request) {

    // Call the convertJsonToPdf method
    $pdfController = new PdfController();
    $pdfFileName = $pdfController->convertJsonToPdf($request);

    $generalSettings = new SettingsController();
    $adminEmail = $generalSettings->getAdminEmailFromSettings();

    Mail::send(new SendEmailToUser($request, $pdfFileName));

    Mail::send(new SendEmailToAdmin($request, $pdfFileName, $adminEmail));

    $pdfController->deletePdf();

    return response()->json(['message' => 'Request Sent to Admin'], 200);
});


Route::post('/send-email-reachout-request', function (Request $request) {

    $generalSettings = new SettingsController();
    $adminEmail = $generalSettings->getAdminEmailFromSettings();

    Mail::send(new SendReachOutEmailToUser($request));

    Mail::send(new SendReachOutEmailToAdmin($request, $adminEmail));

    return response()->json(['message' => 'Request Sent to Admin'], 200);
});
