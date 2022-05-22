//concat() Method
let text1 = `Hello `;
let text2 = `Michael`;
let text3 = `, how are you?`;
let text = text1.concat(text2, text3);
document.getElementById(`concat`).innerHTML = text;
// slice() Method + challenge 10

function sliceMethod() {
  let text = document.getElementById("slice").textContent;
  let textTrimmed = text.trim(); // getting rid of the white space at the beginning of the text
  document.getElementById("slice").innerHTML = textTrimmed.slice(0, 18);
  //to upperCase
}
function toUpper() {
  let text = document.getElementById("slice").textContent;
  document.getElementById("slice").innerHTML = text.toUpperCase();
}
function search() {
  let text = document.getElementById("slice").textContent;
  text = text.trim();
  let word = prompt(
    `What word do you want to search? (Returns the possition of the first match)`
  );
  let position = text.search(word);
  if (position == -1) {
    document.getElementById("position").innerHTML = `The word nod found!`;
    return;
  }
  document.getElementById(
    "position"
  ).innerHTML = `The word ${word} is at possition ${position}.`;
}
//UpperCase() method - The toUpperCase() method returns the value of the string converted to uppercase.
//search() method - The search() method executes a search for a match between a regular expression and this String object.

//toString()
const number = 123;
console.log(typeof number);
const string = number.toString();
console.log(typeof string);

//toPrecision()
const longNumber = 123.123123123;
let shortNumber = longNumber.toPrecision(6);
console.log(shortNumber);

//toFixed() returns a string representation of numObj that does not use exponential notation
// and has exactly digits digits after the decimal place.
// The number is rounded if necessary, and the fractional part is padded with zeros if necessary
// so that it has the specified length.
let fixedNumber = longNumber.toFixed(3);
console.log(fixedNumber);

//The valueOf() method returns the primitive value of a string.
//does not change the original string.
//can be used to convert a string object into a string.
let text4 = new String("Hello World!"); // creating new object
console.log(typeof text4);
text4 = text4.valueOf(); //converting to string
console.log(typeof text4);
