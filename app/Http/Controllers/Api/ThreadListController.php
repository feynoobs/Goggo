<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Board;

class ThreadListController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $board = Board::find($request->id);
        $responses = [];

        if (!is_null($board)) {
            $responses['board'] = $board;
            $responses['threads'] = Board::find($board->id)->threads;
        }

        return response()->json($responses, 200);
    }
}
