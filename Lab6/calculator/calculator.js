"use strict"

window.onload = function (){
    document.getElementById("add").onclick = add;
    document.getElementById("subtract").onclick = subtract;
}

function add(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    document.getElementById("result").value= number1+number2; 
}
function subtract(){
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);
    document.getElementById("result").value = number1 - number2;
}