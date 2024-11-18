# Random Color Generator

This project is a simple web application that generates random background colors for a `div` element each time a button is clicked.

## Features

- **Random Color Generation**: Click the button to generate a random RGB color and apply it as the background color of the `div` element.

## How It Works

The JavaScript code uses the `Math.random()` function to generate random values for RGB color components (red, green, and blue). Each component is a number between 0 and 255. These values are then combined into an RGB string, which is applied as the background color of the `div`.

## Code Overview

- **HTML**: Contains a button and a `div` element.
- **JavaScript**: Adds an event listener to the button that triggers the `getRandomColor` function to change the `div` background color.
  
### JavaScript Code Example

```javascript
let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function() {
    console.log("generate random color");
    getRandomColor();
});

function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
