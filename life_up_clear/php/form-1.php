<?php

 $name = $_GET['name'];
 $email = $_GET['email'];
 $mes = $_GET['mes'];

 
 mail("admin344@gmail.com", "Вопрос", $name."\n email:".$email."\n Вопрос: ".$mes);
 header( "Location: https://lifeup.com.ua" );

?>