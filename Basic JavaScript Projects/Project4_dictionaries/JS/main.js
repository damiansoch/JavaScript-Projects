// assigment #24
function myDictionary() {
  var Family = {
    Dad: "John",
    Mam: "Cloe",
    Daughter: "Amy",
    Son: "Erick",
    Dog: "Milo",
    Cat: "Bart",
  };
  var e = document.getElementById("family").value;
  document.getElementById(
    "Dictionary"
  ).innerHTML = `${e}'s name is: ${Family[e]}`;
  console.log(Family.Cat); //here the cat's name is shown in console
  delete Family.Cat;
  console.log(Family.Cat); //here cat's name in undefined

  document.getElementById("check").innerHTML = Family.Cat;
}
