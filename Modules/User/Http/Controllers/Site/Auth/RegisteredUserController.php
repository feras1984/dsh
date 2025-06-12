<?php

namespace  Modules\User\Http\Controllers\Site\Auth;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Redirect;
use Modules\Category\Facades\CategoryService;
use Modules\User\Facades\UserService\UserService;
use  Modules\User\Http\Controllers\Controller;
use  Modules\User\Entities\User;
use Modules\User\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;
use PHPUnit\Exception;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        $categories = CategoryService::getActiveCategories();
        $extendedCats = CategoryService::getActiveExtendedCategories();
        $logo = 'logo.png';
        return Inertia::render('Site/Auth/Register', [
            'categories' => $categories,
            'extended' => $extendedCats,
            'logo' => $logo,
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $data = $request->all();
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

//        $user = User::create([
//            'name' => $request->name,
//            'email' => $request->email,
//            'password' => Hash::make($request->password),
//        ]);
//
//        event(new Registered($user));
//
//        Auth::login($user);
//
//        return redirect(RouteServiceProvider::SITE_HOME);
        try {
//            dd(UserService::getHome());
            UserService::store();

            return redirect(UserService::getHome());
        } catch (Exception $exception) {
            return Redirect::back()->withErrors(['msg' => $exception->getMessage()]);
        }
    }

    public function validateEmail(): JsonResponse
    {
        $email = \request()->email;
        $user = UserService::validateEmail($email);
        if (!is_null($user)) {
            return response()->json([
                'status' => true,
            ]);
        } else {
            return \response()->json([
                'status' => false,
            ]);
        }

    }
}
