let btnup=document.getElementById("btnup");
let btndown=document.getElementById("btndown");

window.onscroll=function(){
//up button
    if(window.scrollY>=500){
        btnup.style.display="block";
    }else{
        btnup.style.display="none";
    }
    //down button
    if(window.scrollY<=window.outerHeight*10-50){
        btndown.style.display="block";
    }else{
        btndown.style.display="none";
    }
}

btnup.onclick=function(){
scrollTo({top:0,left:0,behavior:"smooth"})
}

btndown.onclick=function(){
scrollTo({top:window.outerHeight*20,left:0,behavior:"smooth"})
}