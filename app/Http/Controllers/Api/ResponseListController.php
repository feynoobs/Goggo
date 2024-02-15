<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Thread;

class ResponseListController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $thread = Thread::find($request->id);
        $responses = [];

        if (!is_null($thread)) {
            $responses['thread'] = $thread;
            $responses['responses'] = Thread::find($thread->id)->responses;
        }

        return response()->json($responses, 200);
    }
}
