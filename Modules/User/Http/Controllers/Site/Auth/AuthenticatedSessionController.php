<?php

namespace Modules\User\Http\Controllers\Site\Auth;

//use App\Http\Controllers\Controller;
use Modules\Category\Facades\CategoryService;
use  Modules\User\Http\Requests\Auth\LoginRequest;
use Modules\User\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        $categories = CategoryService::getActiveCategories();
        $extendedCats = CategoryService::getActiveExtendedCategories();
        $logo = 'logo.png';
        return Inertia::render('Site/Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
            'categories' => $categories,
            'extended' => $extendedCats,
            'logo' => $logo,
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::SITE_HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->intended(RouteServiceProvider::SITE_HOME);
    }
}
