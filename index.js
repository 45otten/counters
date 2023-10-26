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
let answer=Math.floor(Math.random()*6+1)
let guessed=0;
let guess;

document.getElementById('gbtn').onclick=function(){
    guess=document.getElementById('guessed').value
    guessed+=1

    if(guess==answer){
        alert(`${answer} is the number it took u ${guessed}guess.`)
    }
    else if(guess<answer){
        alert('Wrong!Its Greater than your guess')
    }
    else{
        alert('Wrong!Its Smaller than your guess')
    }
    
}
document.getElementById('rbtn').onclick=function(){
    guessed=0;
    answer=Math.floor(Math.random()*6+1)
}
document.getElementById("checkbtn").onclick=function(){
    const checkbox=document.getElementById("checkbox");
    const visa=document.getElementById("visa");
    const MasterCard=document.getElementById("MasterCard");
    const paypal=document.getElementById("paypal");

    if(visa.checked && checkbox.checked){
       alert("You are subscribed!")
    }
    else if(MasterCard.checked && checkbox.checked)
    {
        alert("You are subscribed!")
    }
    else if(paypal.checked && checkbox.checked)
    {
        alert("You are subscribed!")
    }
    else{
        alert("Please Select a payment method! or Check that Subscribe Button!")
    }
}

