//HTML Data Attributes
function displayType(character) {
  var characterType = character.getAttribute("data-character-type");
  console.log(characterType);
  alert(`${characterType} is in the ${character.innerHTML} universe!`);
}

//Array.some() method
var ages = [2, 4, 8, 18, 22, 14, 50];
checkAge = (age) => age == 18;
myFunction = () => {
  document.getElementById("displayAge").innerHTML = ages.some(checkAge);
};
myFunction();
console.log(checkAge);
