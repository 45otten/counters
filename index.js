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



//roll the dice


let x;

document.getElementById("roll").onclick=function(){
    x=Math.floor(Math.random(x)*6+1);
    document.getElementById("p1").innerHTML=x;
}
document.getElementById("resetdice").onclick=function(){
    x=0;
    document.getElementById("p1").innerHTML=x;
}


//number guessing game


let answer=Math.floor(Math.random()*10+1)
let guessed=0;
let guess;


document.getElementById('gbtn').onclick=function(){
    guess=document.getElementById('guessed').value
    guessed+=1
    
    if(guess>10){
        alert('You can only enter number between 1-10')
    }
     else if(guess<1){
        alert('You can only enter nummber between 1-10')
    }
    else if(guess==answer){
        alert(`${answer} is the number it took u ${guessed} guesses.`)
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

//tempreture convertor

// let temp;
// temp=Number(temp);
//  const ce=document.getElementsByName('ctemp');
//  const fa=document.getElementsByName('ftemp');

// function c(temp){
//    return (temp-32)*(5/9);
// }

// function f(temp){
//     return (9/5)*(temp+32);
// }

//  document.getElementById("submittemp").onclick=function(){

//     temp=document.getElementById("tempinput").value
//  if(temp == null || temp == ""){
//      alert("Please input a tempreture")
//  }
//  }

//for premium content


document.getElementById("checkbtn").onclick=function(){
    
    const checkbox=document.getElementById("checkbox");
    const visa=document.getElementById("visa");
    const MasterCard=document.getElementById("MasterCard");
    const paypal=document.getElementById("paypal");

    if(!(checkbox.checked)){
       alert("PLEASE CHECK THAT SUBSCRIBE BUTTON")
    }
    else{
    if(MasterCard.checked && checkbox.checked)
    {
        alert("You are subscribed!")
    }
    else if(paypal.checked && checkbox.checked)
    {
        alert("You are subscribed!")
    }
    else if(visa.checked && checkbox.checked)
    {
        alert("You are subscribed!")
    }
    else{
        alert("Please Select a payment method!")
    }
}
}

