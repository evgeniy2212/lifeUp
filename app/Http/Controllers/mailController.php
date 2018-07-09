<?php

namespace App\Http\Controllers;

use App\Mail\PresentEmail;
use Illuminate\Http\Request;
use App\Mail\DemoEmail;
use Illuminate\Support\Facades\Mail;

class mailController extends Controller
{

    public function send(Request $request)
    {
        $data = $request->all();

        $objDemo = new \stdClass();

        $objDemo->sender = $data['name'];

        $objDemo->email = $data['email'];

        $objDemo->text = $data['text'];

        Mail::to("lifeup.life@gmail.com")->send(new DemoEmail($objDemo));

        return redirect()->back();
    }

    public function send_present(Request $request){
        $data = $request->all();

        $objPresent = new \stdClass();

        $objPresent->sender = $data['name'];

        $objPresent->email = $data['email'];

        Mail::to("lifeup.life@gmail.com")->send(new PresentEmail($objPresent));

        return redirect()->back();
    }
}
