<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use App\Models\User;
use http\Env\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;


class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
   
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);

        $token = $user->createToken('main')->plainTextToken;
        return response(compact('user', 'token'));
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'Provided email or password is incorrect'
            ], 422);
        }
    
        /** @var \App\Models\User $user */
        $user = Auth::user();
    
        // Set the token expiration time (e.g., 2 minutes from now)
        $expiresAt = now()->addDay();
        $token = $user->createToken('main', ['*'], $expiresAt)->plainTextToken;
    
        // Remove any expired tokens from the database
        PersonalAccessToken::where('expires_at', '<=', now())->delete();
    
        return response()->json([
            'user' => $user,
            'token' => $token,
            'expires_at' => $expiresAt->toDateTimeString(), // Return expires_at in response
        ]);
    }



    
    public function logout(Request $request)
{
    $bearerToken = $request->bearerToken();
    
    if (!$bearerToken) {
        return response()->json(['message' => 'Unauthorized'], 401);
    }
    
    // Extract the token ID from the bearer token
    $tokenId = (int) explode('|', $bearerToken)[1];
    
    // Find the token by ID
    $token = PersonalAccessToken::findToken($bearerToken);
    
    if (!$token) {
        return response()->json(['message' => 'Token not found'], 404);
    }
    
    // Revoke the token
    $token->delete();
    
    return response()->json(['message' => 'Successfully logged out'], 200);
}





    // public function logoutAll(Request $request)
    // {
    //     User::all()->each(function ($user) {
    //         $user->tokens()->delete();
    //     });
    
    //     return response()->json(['message' => 'All users successfully logged out'], 200);
    // }
    



    // public function logout(Request $request)
    // {
    //     logger('Request Headers:', [$request->header()]);
        
    //     $user = $request['user'];
    //     logger('User:', [$user]);
        
    //     if (!$user) {
    //         return response('User not authenticated', 401);
    //     }
    
    //     $user->currentAccessToken()->delete();
    //     return response('Successfully Logged Out', 204);
    // }     

}
