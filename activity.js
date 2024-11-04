let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function(){
    console.log("generate random color");
    getRandomColor();
} );

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue  = Math.floor(Math.random() * 255);

    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}