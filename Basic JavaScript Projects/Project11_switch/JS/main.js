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
      document.body.style.backgroundColor = "red";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    case "purple":
      document.body.style.backgroundColor = "red";
      Colors = Colors.charAt(0).toUpperCase() + Colors.slice(1);
      color_output = `${Colors} ${colorString}`;
      break;
    default:
      document.body.style.backgroundColor = "white";
      color_output = "Please choose the color from the list!";
  }
  document.getElementById("output").innerHTML = color_output;
}
