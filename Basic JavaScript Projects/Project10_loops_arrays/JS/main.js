//count to 10 loop------------------------------
function count_To_Ten() {
  let Digit = "";
  let x = 1;
  while (x < 11) {
    Digit += `<br />` + x;
    x++;
    document.getElementById(`Counting_To_Ten`).innerHTML = Digit;
  }
}
// my while loop-------------------------------- assigment 50
function Call_Loop() {
  //clearing the previus game results from the screen
  document.getElementById("Win").innerHTML = ``;
  document.getElementById("Loop").innerHTML = "";

  let winningNumber = prompt(`Select your number!`);
  winningNumber = parseInt(winningNumber);
  //checking if input is 0 - 99 range
  if (winningNumber < 0 || winningNumber > 99) {
    alert(`Choose the number between 0-99!`);
    return;
  }
  // checking if imput isn't empty
  if (!winningNumber) {
    alert(`You didn't choose the number!`);
    return;
  }

  //game
  let Print = "";
  let rounds = 0;
  let points = 100;
  Print = `Your number is: ${winningNumber} <br /><br />`;

  while (rounds < 100) {
    x = Math.random() * 100;
    x = Math.round(x);
    if (rounds == 0) {
      Print += `Randomly selected numbers:<br />`;
    }
    Print += x + `  `;
    document.getElementById("Loop").innerHTML = "<br /> " + Print;
    points = points - 1;
    rounds += 1;
    if (x == winningNumber) {
      document.getElementById(
        "Win"
      ).innerHTML = `You won! <br /> you needed: ${rounds} rounds. You are getting: ${points} poins!`;
      return;
    }
    if (rounds == 99) {
      document.getElementById(
        "Win"
      ).innerHTML = `Sorry, better luck next time!`;
    }
  }
}

//text.lenght----------------------------------
//The length property returns the length of a string.

function checkLenght() {
  let text = prompt(`Put some text to check it's lenght!`);
  let lenght = text.length;
  textLenght.innerHTML = `String: " ${text}" has: ${lenght} characters! `;
}

//For loop
var Instruments = [
  "Guitar",
  "Drums",
  "Piano",
  "Bass",
  "Violin",
  "Trumpet",
  "Flute",
];
var Content = "";
var Y;
function for_Loop() {
  for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
  }
  list_of_instruments.innerHTML = `There is ${Y} instruments on the stage: <br> ${Content}.`;
}

//Array
function array_Function() {
  var faces = new Array();

  faces[0] = new Image();
  faces[0].src = `./images/8_35846.png`;
  faces[0].description = "Sleeping face";

  faces[1] = new Image();
  faces[1].src = `./images/12_35880.png`;
  faces[1].description = "Eating face";

  faces[2] = new Image();
  faces[2].src = `./images/14_35878.png`;
  faces[2].description = "Funny face";

  faces[3] = new Image();
  faces[3].src = `./images/26_35866.png`;
  faces[3].description = "Angry face";

  let pictireNr = document.getElementById(`option`).value;

  document.getElementById(`array`).src = faces[pictireNr].src;
  document.getElementById(`text_desc`).innerHTML = faces[pictireNr].description;
}
//const

const Computer = {
  monitor: `white`,
  GPU: `gaming`,
  memory: `16GB`,
};
function constant_function() {
  let part = document.getElementById(`compDetails`).value;
  document.getElementById(
    "constant"
  ).innerHTML = `The computer ${part} needs to be ${Computer[part]}`;
}
//let
function display() {
  var x = 20;
  var disp = x + "<br>";
  document.getElementById(`letKeyword`).innerHTML = disp;
  {
    let x = 21;
    disp += x + "<br>";
    letKeyword.innerHTML = disp;
  }
  disp += x + "<br>";
  letKeyword.innerHTML = disp;
}
display();

//return statement
function returnStatement() {
  document.getElementById(`return`).innerHTML = greed();
  function greed() {
    let name = prompt("What is your name?");
    let greed = `Hello ${name}, nice to see you!`;
    return greed;
  }
}

//data structure - Object

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
  carDescription() {
    return `The car is ${this.color} ${this.year} ${this.make} ${this.model}; `;
  }
}

let damianCar = new Car("BMW", "M5", 2022, "Black");
let kingaCar = new Car("Audi", "A8", 2021, "White");
let milenaCar = new Car("Volvo", "XC90", 2022, "Red");

function displayDetails() {
  let selectedCar = document.getElementById("carSelect").value;
  switch (selectedCar) {
    case "damian":
      document.getElementById("details").innerHTML = damianCar.carDescription();
      break;
    case "kinga":
      document.getElementById("details").innerHTML = kingaCar.carDescription();
      break;
    case "milena":
      document.getElementById("details").innerHTML = milenaCar.carDescription();
      break;
  }
}

// break statement
//In in a loop, it breaks out of the loop and continues executing the code after the loop (if any).

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    text += `<br /> We reached nr "5"!<br />`;
    document.getElementById("breakStatement").innerHTML = text;
    break;
  }
  text += i;
  document.getElementById("breakStatement").innerHTML = text;
}
// continue statement
//The continue statement breaks one iteration (in the loop) if a specified condition occurs, and continues with the next iteration in the loop.

let text1 = "";

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    text1 += `<br /> We reached nr "5"!<br />`;
    document.getElementById("continueStatement").innerHTML = text1;
    continue;
  }
  text1 += i;
  document.getElementById("continueStatement").innerHTML = text1;
}
