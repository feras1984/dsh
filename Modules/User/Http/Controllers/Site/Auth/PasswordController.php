<?php

namespace  Modules\User\Http\Controllers\Site\Auth;

use Illuminate\Http\JsonResponse;
use Modules\User\Facades\UserService\UserService;
use  Modules\User\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Exception;
use Symfony\Component\HttpFoundation\Response as StaticResponse;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): JsonResponse
    {
        try {
            $validated = $request->validate([
                'current_password' => ['required', 'current_password'],
                'password' => ['required', Password::defaults(), 'confirmed'],
            ]);
            UserService::updatePassword($validated['password']);
            return response()->json([
                'status' => 'success',
                'message' => 'Password has been updated!',
            ],
                StaticResponse::HTTP_OK,
            );
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something happened while updating user info!',
                'details' => $exception->getMessage(),
            ],
                StaticResponse::HTTP_INTERNAL_SERVER_ERROR,
            );
        }

//        $validated = $request->validate([
//            'current_password' => ['required', 'current_password'],
//            'password' => ['required', Password::defaults(), 'confirmed'],
//        ]);
//
//        $request->user()->update([
//            'password' => Hash::make($validated['password']),
//        ]);
//
//        return back();
    }
}
