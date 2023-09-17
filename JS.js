var img = document.createElement("img");
    
img.src = "/images/foto1.jpg";
var src = document.getElementById("x");
    
src.appendChild(img);

var i = 0;
var images = [];
var time = 3000;
    //image list
images[0] = "/images/foto1.jpg";
images[1] = "/images/foto2.jpg";
images[2] = "/images/foto3.jpg";

function changeImg() {
    "use strict";
    document.slide.src = images[i];
    
    if (i < images.length - 1) {
        i = i + 1;
    } else {
        i = 0;
    }
    setTimeout(changeImg(), time);
}


window.onload = changeImg;


var img = document.createElement("img");
    
img.src = "/images/foto1.jpg";
var src = document.getElementById("x");
    
src.appendChild(img);
    