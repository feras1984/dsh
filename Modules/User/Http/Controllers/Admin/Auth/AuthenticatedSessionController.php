<?php

namespace Modules\User\Http\Controllers\Admin\Auth;

//use App\Http\Controllers\Controller;
use App\Http\Controllers\ProfileController;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Gate;
use Illuminate\Validation\ValidationException;
use Modules\User\Entities\Admin;
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
        return Inertia::render('Admin/Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     * @throws ValidationException
     * @throws AuthorizationException
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        if (!Gate::allows('admin')) {
            $this->destroy($request);
            throw ValidationException::withMessages([
                'email' => trans('auth.unauthorized'),
            ]);
        }

        $request->session()->regenerate();

        return redirect()->intended(RouteServiceProvider::ADMIN_HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect(RouteServiceProvider::ADMIN_HOME);
    }
}
