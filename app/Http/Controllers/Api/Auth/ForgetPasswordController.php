<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;


class ForgetPasswordController extends Controller
{

    public function sendResetLinkEmail(ForgotPasswordRequest $request)
    {
        $response = $this->broker()->sendResetLink(
            $request->only('email')
        );

        return $response == Password::RESET_LINK_SENT
            ? $this->sendResetLinkResponse($request, $response)
            : $this->sendResetLinkFailedResponse($request, $response);
    }


    protected function sendResetLinkResponse(Request $request, $response)
    {
        return response()->json([
            'message' => 'Email Sent Successfully',
            'response' => $response
        ], 200);
    }


    protected function sendResetLinkFailedResponse(Request $request, $response)
    {


        return response()->json([
            'message' => 'Email Failed',
            'response' => $response

        ], 500);
    }
    /**
     * Get the broker to be used during password reset.
     *
     * @return \Illuminate\Contracts\Auth\PasswordBroker
     */
    public function broker()
    {
        return Password::broker();
    }
}
