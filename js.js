const roll=document.getElementById("roll");
const number=document.getElementById("number");
let randomNumber;
max = 100;
min = 1;


roll.onclick = function(){
    randomNumber = Math.floor(Math.random()*100)+1;
    number.textContent=randomNumber;
}


//Randomizes a number between 1-100