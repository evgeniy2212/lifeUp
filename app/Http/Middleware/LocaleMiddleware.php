<?php

namespace App\Http\Middleware;

use Closure;
use App;

class LocaleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public static function getLocale(){

    }

    public function handle($request, Closure $next)
    {

        return $next($request);
    }
}
