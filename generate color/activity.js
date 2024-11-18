let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function(){
    getRandomColor();  // Correctly calling the function here
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 256);   // Use 256 to include 255 as a possible value
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
