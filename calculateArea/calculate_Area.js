let length;
let width;

function calculateArea() {
    // parseFloat(â€¦): The parseFloat() function converts the string value retrieved from the input field to a floating-point number. 
    // This conversion ensures that the input, typically text entered by the user, is treated as a number and can be used in mathematical operations.
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    let area = length * width;

    // The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals). 
    // In this case, it sets the text content to display a message along with the calculated area stored in the variable area. 
    // For example, if area holds a value of 25, the text displayed will be "The area of the rectangle is: 25".
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
   }