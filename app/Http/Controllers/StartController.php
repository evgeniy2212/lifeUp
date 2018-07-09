<?php

namespace App\Http\Controllers;

use App\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;

class StartController extends Controller
{
    public function index($locale = 'ru')
    {
        if (!in_array($locale, Config::get('app.locales'))){

            $locale = Config::get('app.locale');
        }

        App::setLocale($locale);

        $comments = Comment::all();

        return view('welcome', [ 'comments' => $comments ]);
    }
}
