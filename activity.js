let btn = document.querySelector("button");

btn.addEventListener("click", function(){
    console.log("generate random color");
} )

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue  = Math.floor(Math.random() * 255);

    let color
}