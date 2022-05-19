function doTheSum() {
  var addition = 52 + 41;
  document.getElementById("Math").innerHTML = "52 + 41 = " + addition;
}
function doTheSub() {
  var substraction = 52 - 41;
  document.getElementById("Sub").innerHTML = "52 - 41 = " + substraction;
}
function doTheMulti() {
  var multiplication = 52 * 41;
  document.getElementById("Multi").innerHTML = "52 * 41 = " + multiplication;
}
function doTheDiv() {
  var division = 2132 / 41;
  document.getElementById("Div").innerHTML = "2132 / 41 = " + division;
}
function doTheMath() {
  var multiOp = ((21 + 20) * 52) / (60 - 8);
  document.getElementById("Multiple").innerHTML =
    "(21 + 20) * 52 / (60 - 8) = " + multiOp;
}
function doTheRemaind() {
  var Division = 52 / 41;
  Division = Math.floor(Division);
  var remainder = 52 % 41;
  document.getElementById("Modulus").innerHTML =
    "52 / 41 = " + Division + " and a remainder is " + remainder;
}
function doTheNegative() {
  var negative = 52;
  document.getElementById(
    "Negation"
  ).innerHTML = `The negative form of ${negative} is ${-negative}`;
}
function doTheInd() {
  var number = 51.2;
  var origNumber = number;
  number++;
  document.getElementById(
    "Inc"
  ).innerHTML = `After using the Increment opterator on ${origNumber} we are getting ${number}`;
}
function doTheDec() {
  var number = 51.2;
  var origNumber = number;
  number--;
  document.getElementById(
    "Dec"
  ).innerHTML = `After using the Decrement opterator on ${origNumber} we are getting ${number}`;
}
function doTheRandom() {
  document.getElementById("Ran").innerHTML = Math.round(Math.random() * 100);
}
// Counting the area of the cirecle - small program
function circleArea() {
  var r = prompt("What is the radius of the circle?");
  r = parseInt(r);
  var area = Math.round(Math.PI * Math.pow(r, 2));
  console.log(area);
  if (isNaN(area)) {
    alert("The readius input has to be a number");
  } else {
    document.getElementById(
      "result"
    ).innerHTML = `<strong>The area of the circle is ${area}</strong>`;
    document.getElementById(
      "explain"
    ).innerHTML = `This small program uses three Math methods: <br /> 
    <strong>Math.pow(r,2) - to get the second power of the radius
    <br />Math.PI - because you need the PI number to count the area of the circle,
    <br />Math.roun() - just to round the result. </strong><br /><br />
    It also check if the input provided by user is a valid (numberic) input.
    `;
  }
}
