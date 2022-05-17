var x = `Hello World!`; // allert windor
window.alert(x);
document.write(`<h1>${x}</h1>`);

var A = `This is a string`;
document.write(A); //printing a string

document.write(`<br />`); // breaks are added only so the webpage would look clearer
document.write(`<br />`);

var firstNumber = 23;
var secondNumber = 37;
var sum;

function Sum(x, y) {
  //addind functions
  sum = x + y;
}

Sum(firstNumber, secondNumber);
document.write(`The total is: ` + sum);

document.write(`<br />`);
document.write(`<br />`);

// or
Sum(firstNumber, secondNumber);
document.write(`The total is: ${sum}`);

document.write(`<br />`);
document.write(`<br />`);

// or we can do
var text = `The total is: `;
document.write(text + sum);

document.write(`<br />`);
document.write(`<br />`);

document.write('"Hello is\'s me"');

document.write(`<br />`);
document.write(`<br />`);

document.write(
  //concernated strings
  "Open the main.js file " +
    "and concatenate a string within the document.write() method. " +
    " Save your file."
);

document.write(`<br />`);
document.write(`<br />`);

var concernatedString =
  "Open the main.js file " +
  "and concatenate a string within the document.write() method. " +
  " Save your file.";

document.write(concernatedString);

document.write(`<br />`);
document.write(`<br />`);

var firstNumber = "eleven", //string.fontcolor method
  secondNumber = "twelve",
  thirdNumber = "five";
var firstNumber = firstNumber.fontcolor("red");
var secondNumber = secondNumber.fontcolor("orange");
var thirdNumber = thirdNumber.fontcolor("purple");

document.write(firstNumber);
document.write(`<br />`);

document.write(secondNumber);
document.write(`<br />`);

document.write(thirdNumber);
document.write(`<br />`);
document.write(`<br />`);

document.write(20 + 10); // statement + expression
document.write(`<br />`);
document.write(`<br />`);
