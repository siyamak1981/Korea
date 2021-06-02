<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\ResetPasswordRequest;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{
    public function reset(ResetPasswordRequest $request)
    {

        $response = $this->broker()->reset(
            $this->credentials($request),
            function ($user, $password) {
                $this->resetPassword($user, $password);
            }
        );
        return $response == Password::PASSWORD_RESET
            ? $this->sendResetResponse($request, $response)
            : $this->sendResetFailedResponse($request, $response);
    }

    protected function sendResetResponse(Request $request, $response)
    {

        return response()->json([
            'message' => 'Password Reset Successfully!',
            'response' => $response
        ], 200);
    }

    protected function sendResetFailedResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Password Reset Failed!',
            'response' => $response
        ], 500);
    }


    public function broker()
    {
        return Password::broker();
    }

    protected function resetPassword($user, $password)
    {
        $user->password = Hash::make($password);
        $user->setRememberToken(Str::random(60));
        $user->save();
        // event(new PasswordReset($user));

    }

    protected function credentials(Request $request)
    {
        return $request->only(
            'email',
            'password',
            'password_confirmation',
            'token'
        );
    }
}
