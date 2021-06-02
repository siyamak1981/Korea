<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserLoginRequest;
use App\User;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(UserLoginRequest $request)
    {

        $credential = [
            'email' => $request->email,
            'password' => $request->password
        ];

        if (Auth::attempt($credential)) {
            $user = Auth::user();
            $success['token'] = $user->createToken('MyApp')->accessToken;
            $success['name'] = $user->name;
            return response()->json(['success' => $success], 200);
        } else {
            return response()->json(['error' => 'Unauthorised'], 401);
        }
    }

    /**
     * register
     *
     * @param  mixed $request
     * @return void
     */
    public function register(UserRegisterRequest $request)

    {

        // $developerRole = Role::developer()->first();
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        // $user->roles()->attach($developerRole->id);
        if (!$user) {

            return response()->json(["Error" => "User Does not Created !"], 500);
        }

        return response()->json(["Success" => "User registered successfully!"], 200);
    }

    public function logout(Request $request)
    {
        if (Auth::check()) {
            Auth::user()->token->delete();
        }
        return response()->json([
            'message' => 'Successfully logged out'
        ], 200);
    }
}
