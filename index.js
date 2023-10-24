let count=0;
document.getElementById("decrease").onclick=function(){
    count-=1;
    document.getElementById("counter").innerHTML=count;
}
document.getElementById("reset").onclick=function(){
    count=0;
    document.getElementById("counter").innerHTML=count;
}
document.getElementById("increase").onclick=function(){
    count+=1;
    document.getElementById("counter").innerHTML=count;
}

let x;

document.getElementById("roll").onclick=function(){
    x=Math.floor(Math.random(x)*6+1);
    document.getElementById("p1").innerHTML=x;
}
document.getElementById("resetdice").onclick=function(){
    x=0;
    document.getElementById("p1").innerHTML=x;
}