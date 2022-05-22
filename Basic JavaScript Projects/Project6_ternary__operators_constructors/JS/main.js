// The use of ternary operator, additionally i'm checking for the valid imput...
function checkHeight() {
  var frontSeat;
  var howTall = prompt("How toll are you (cm)?");
  howTall = parseInt(howTall);
  if (howTall < 0 || howTall > 250) {
    document.getElementById("answer").innerHTML =
      "You're eiter a giant or you're smaller than nothing :D";
  } else {
    frontSeat =
      howTall > 150
        ? "You're allowed to drive in the front seat!"
        : "You're either too short, or you did't provide a valid height!";
    document.getElementById("answer").innerHTML = frontSeat;
  }
}

function canVote() {
  var allowed;
  var age = prompt("How old are you?");
  age = parseInt(age);
  if (age > 0 && age < 110) {
    allowed = age > 18 ? "You can Vote!" : "Sorry, you're to young!";
    document.getElementById("can").innerHTML = allowed;
  } else {
    document.getElementById("can").innerHTML = "Please provide a valid age!";
  }
}

// Keywords_and_Constructors

function Vechicle(Make, Model, Year, Color) {
  this.Vechicle_Make = Make;
  this.Vechicle_Model = Model;
  this.Vechicle_Year = Year;
  this.Vechicle_Color = Color;
}
var Jack = new Vechicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vechicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vechicle("Ford", "Pinto", "1971", "Mustard");

function myFunction() {
  document.getElementById(
    "Keywords_and_Constructors"
  ).innerHTML = `Erick drives a ${Erick.Vechicle_Color} colored ${Erick.Vechicle_Make} ${Erick.Vechicle_Model} manufactured in ${Erick.Vechicle_Year}.`;
}

// my constructor function
function Computer(Chassis, Hard_Drive, Monitor, Graphics, Memmory) {
  this.Computer_Case = Chassis;
  this.Computer_Hard_drive = Hard_Drive;
  this.Computer_Monitor = Monitor;
  this.Computer_Graphics = Graphics;
  this.Computer_Memmory = Memmory;
}
var Damien = new Computer(
  "Black",
  "2T SDD + 2T SDD",
  '35" Widescreen',
  "Hi-End",
  "min 16GB"
);
var Kinga = new Computer(
  "White",
  "1T SDD",
  "Touchscreen",
  "Integrated",
  "min 16GB"
);
var Simon = new Computer(
  "Fancy, Gaming",
  "3T SDD",
  "Large, Gaming",
  "Hi-End",
  "32GB"
);
var Mili = new Computer(
  "Small",
  "1T SDD",
  "White, Touchscreen",
  "Integrated",
  "16GB"
);
function showDetails() {
  document.getElementById(
    "computerConst"
  ).innerHTML = `The new computer for Mili requirements: <br />
    Case - ${Mili.Computer_Case},<br />
    SDD/HDD - ${Mili.Computer_Hard_drive},<br />
    Monitor - ${Mili.Computer_Monitor},<br />
    GPU - ${Mili.Computer_Graphics},<br />
    Memmory - ${Mili.Computer_Memmory},<br />
    <br />
    Please make sure that computer is fummy tested before shipment.
    `;
}
// Nested functions
function countFunction1() {
  document.getElementById(`Nested_Functions`).innerHTML = price();

  function price() {
    var computerOnePrice = 3000;
    var fullPrice;
    function countVat() {
      var Vat = 0.22;
      fullPrice = computerOnePrice + computerOnePrice * Vat;
    }
    countVat();
    return fullPrice;
  }
}
