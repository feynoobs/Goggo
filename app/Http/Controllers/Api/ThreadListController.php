<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Thread;

class ThreadListController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $threads = Thread::where('board_id', $request->bbsid)->get();
        $responses = [];

        foreach ($threads as $thread) {
            $responses[$thread->id]['thread'] = $thread;
            $responses[$thread->id]['responses'] = Thread::find($thread->id)->responses;
        }

        return response()->json($responses, 200);

    }
}
