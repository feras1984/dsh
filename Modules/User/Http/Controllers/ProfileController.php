<?php

namespace Modules\User\Http\Controllers;

//use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Http\JsonResponse;
use Modules\Category\Facades\CategoryService;
use Modules\Setting\Facades\LanguageService;
use Modules\User\Facades\UserService\UserService;
use Modules\User\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Exception;
use Symfony\Component\HttpFoundation\Response as StaticResponse;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $categories = CategoryService::getActiveCategories();
        $logo = 'logo.png';
        $languages = LanguageService::getActiveLanguages();
        $extendedCats = CategoryService::getActiveExtendedCategories();
        return Inertia::render('Site/Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'languages' => $languages,
            'categories' => $categories,
            'logo' => $logo,
            'extended' => $extendedCats,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): JsonResponse | RedirectResponse
    {

        try {
            UserService::update($request);
            if ($request->user()->isDirty()) {
                Auth::logout();
                return Redirect::route('login');
            }
            return response()->json([
                'status' => 'success',
                'message' => 'User info has been updated!',
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
//        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function uploadProfile(Request $request) {
        try {
            $data = $request->all();
            UserService::uploadProfile($data);
            return \response()->json([
                'status' => 'success',
                'message' => 'image has been uploaded',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something happened while updating user image!',
                'details' => $exception->getMessage(),
            ],
                StaticResponse::HTTP_INTERNAL_SERVER_ERROR,
            );
        }
    }
}
