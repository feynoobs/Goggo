<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Response;

class PostController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            'name' => 'nullable',
            'email' => 'nullable',
            'message' => 'required'
        ]);
        Response::create($request->all());

        return response()->json([], 200);
    }
}
