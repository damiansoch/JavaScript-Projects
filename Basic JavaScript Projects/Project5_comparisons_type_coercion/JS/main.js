// infinity and -infinity
document.getElementById(
  "infinity"
).innerHTML = `The number "2E310" is an: ${2e310}`;
document.getElementById(
  "negInfinity"
).innerHTML = `The number "-2E310" is an: ${-2e310}`;

// type of data
document.writeln(`The "Word" is a: ${typeof "Word"}<br />`);
document.writeln(`The ${1234} is a: ${typeof 1234}<br />`);
document.writeln(`The ${true} is a: ${typeof true}<br />`);
document.writeln(`The ${false} is a: ${typeof true}<br />`);
document.writeln(`The ${undefined} is a: ${typeof undefined}<br />`);
document.writeln(`The ${Math} is a: ${typeof Math}<br /><br />`);

document.writeln(`When we do 0 / 0 the result is: ${0 / 0}<br />`);
document.writeln(`Is "Word" NaN? ${isNaN(0 / 0)}<br />`);
document.writeln(`Is ${0045} NaN? ${isNaN(0045)}<br /><br />`);

//boolean logic
document.write(`Is 10 > 10? ${10 > 10}<br />`);
document.write(`Is 101 > 10? ${101 > 10}<br />`);
document.write(`Is 101 < 10? ${101 < 10}<br />`);
document.write(`Is 10 < 101? ${10 < 101}<br /><br />`);

// console.log
console.log(Math.sqrt(81));

//Type Coercion
document.write("10" + 5);
document.write("<br />");

console.log(10 === "10");

document.write(`Is 11 equal to 10? ${11 == 10}<br />`);
document.write(`Is 10 equal to 10? ${10 == 10}<br /><br />`);

document.write(`Is 10 equal to 10 and the same data type? ${10 === 10}<br />`);
document.write(
  `Is 10 equal to "ten" and the same data type? ${10 === "ten"}<br />`
);
document.write(
  `Is 10 equal to "10" and the same data type? ${10 === "10"}<br />`
);
document.write(
  `Is 10 equal to 11 and the same data type? ${10 === 11}<br /><br />`
);

//logical operators

document.writeln(`Is 10 > 0 and < 100? ${10 > 0 && 10 < 100} <br />`);
document.writeln(`Is 10 > 0 and < 10? ${10 > 0 && 10 < 10} <br />`);
document.writeln(`Is 10 > 0 or < 10? ${10 > 0 || 10 < 10} <br />`);
document.writeln(`Is 10 < 0 or < 10? ${10 < 0 || 10 < 10} <br />`);

document.write(`Is 10 not a string? ${typeof 10 != "string"}`);
