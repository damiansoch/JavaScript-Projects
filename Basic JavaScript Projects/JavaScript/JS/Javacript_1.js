//switch statement
function colorFunction() {
  var color_output;
  var Colors = document.getElementById("Color_Input").value;
  Colors = Colors.toLowerCase();
  colorString = `is a great color!`;

  switch (Colors) {
    case "red":
      document.body.style.backgroundColor = "red";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "green":
      document.body.style.backgroundColor = "green";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "yellow":
      document.body.style.backgroundColor = "yellow";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "blue":
      document.body.style.backgroundColor = "blue";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "pink":
      document.body.style.backgroundColor = "pink";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "purple":
      document.body.style.backgroundColor = "purple";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    default:
      document.body.style.backgroundColor = "white";
      color_output = "Please choose the color from the list!";
  }
  document.getElementById("output").innerHTML = color_output;
}

//getElementsByClassName()
function HelloWorldFunction() {
  var A = document.getElementsByClassName(`click`);
  console.log(A.length);
  A[0].innerHTML = `The text has changed`;
}

//canvas

//Linear gradient
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(300, 0, 10, 0);
grd.addColorStop(0, "pink");
grd.addColorStop(1, "yellow");
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 480, 230);

//line (c ctx)
ctx.moveTo(0, 0);
ctx.lineTo(500, 250);
ctx.stroke();

// Circle (c ctx)
ctx.beginPath();
ctx.arc(250, 125, 100, 0, 2 * Math.PI);
//x,y,dameter,(0 - whole circle, number - circumference, 2*pi)
ctx.stroke();

// Draw a text (c ctx)
ctx.font = "40px Arial";
// ctx.fillText("Hello World", 147, 140);
ctx.strokeText("Hello World", 147, 140);
