console.log("Hello index")



function passCheck(){
    
    let pass1=document.getElementById("pass1").value;
    let pass2=document.getElementById("pass2").value;
    if(pass2.length != 0 || pass1.length != 0)
    {
        if (pass1 == pass2) 
        
       { console.log(true);
        document.getElementById("pass1").style.backgroundColor = ("lightblue");
        document.getElementById("pass2").style.backgroundColor = ("lightblue");}

        else { document.getElementById("pass1").style.backgroundColor = ("coral");
        document.getElementById("pass2").style.backgroundColor = ("coral");}
    
}


}

document.getElementById("pass1").addEventListener("keyup", passCheck )
document.getElementById("pass2").addEventListener("keyup", passCheck )