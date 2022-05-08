"use strict";

window.onload= function(){
    document.getElementById("btn1").onclick = swapImage;

}
function swapImage(){
    let image1 = document.getElementById("image1");
    let image2 = document.getElementById("image2");
    let temp = image1.src;
    image1.src = image2.src;
    image2.src = temp;
}
