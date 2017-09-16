<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function top()
    {
    	$api = env('NYT_API_KEY');
        return view('news.top', compact('api'));
    }
}
