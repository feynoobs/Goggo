<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        $code = 401;
        $response = [];
        if (Auth::attempt($credentials) === true) {
            $request->session()->regenerate();
            $response = Auth::user();
            $code = 200;
        }
        return response()->json($response, $code);
    }

    public function index(Request $request)
    {

    }
}
