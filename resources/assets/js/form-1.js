function form1(){
 
 var i = 0;   
 var name = document.getElementById("f1-name");
 var email = document.getElementById("f1-email");
 var mes = document.getElementById("f1-mes");

 if(name.value != ""){
    if(email.value != ""){
        if(mes.value != ""){
            window.location.replace('php/form-1.php?name=' + name.value +'&email='+email.value+'&mes='+mes.value);
        }else{
            mes.style.borderColor = "red"
        }
    }else{
        email.style.borderColor = "red"
    }
 }else{
     name.style.borderColor = "red"
 }
 
 

}