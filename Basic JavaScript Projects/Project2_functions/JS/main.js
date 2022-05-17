function displayDate() {
  //displaing the current date with JavaScript
  var date = document.getElementById("date");
  date.style.color = "red";
  date = date.innerHTML = Date();
}

function concatenatedString() {
  //concatenating using +=
  var sentence =
    "Use the document.getElementById method within your JavaScript code ";
  sentence += "in order to display the concatenated string. ";
  sentence += " Save the file.";
  document.getElementById("conc").innerHTML = sentence;
}
