function lovecalculator(){
    var a=document.getElementById("L1").value;
    var b=document.getElementById("L2").value;
    if (a.length>0 && b.length>0) {
        document.getElementById("lovers").innerHTML=a+"<br>"+"L❤️VES"+"<br>"+b;
        var c=document.getElementById("btn").value;
        var c=Math.floor(Math.random()*100);
        document.getElementById("percentage").innerHTML="percentage : "+c+"%";
        document.getElementById("dt").innerHTML="";
    }else{
        document.getElementById("dt").innerHTML="Please Enter Your Input Values";
    }
}