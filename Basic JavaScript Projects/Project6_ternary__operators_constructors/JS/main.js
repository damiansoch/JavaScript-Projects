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
