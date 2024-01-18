<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        Auth::guard(config('auth.defaults.guard'))->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return response()->json([], 200);
    }
}
