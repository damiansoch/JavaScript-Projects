//global vs local
function globalLocal() {
  var x = 15129;
  function count1() {
    var y = Math.sqrt(x);
    document.getElementById("result1").innerHTML = y;
  }
  function count2() {
    var z = Math.pow(x, 2);
    document.getElementById("result2").innerHTML = z;
  }
  count1();
  count2();
}
//global vs local with a mistake
function globalLocalMistake() {
  function count1() {
    var x = 15129; //x assigned locally can't be accessed by count2() function
    var y = Math.sqrt(x);
    document.getElementById("result3").innerHTML = y;
  }
  function count2() {
    var z = Math.pow(x, 2);
    document.getElementById("result4").innerHTML = z;
  }
  count1();
  count2();
}
//IF

function getDate() {
  if (new Date().getHours < 12) {
    document.getElementById(`displayResult`).innerHTML = `It's after 12PM`;
  } else {
    document.getElementById(`displayResult`).innerHTML = `It's before 12PM`;
  }
}

function isWeekend() {
  if (new Date().getDay() === 0 || new Date().getDay() === 6) {
    document.getElementById("displayWeekend").innerHTML = `It's WEEKEND !!! `;
  } else {
    document.getElementById(
      "displayWeekend"
    ).innerHTML = `Not a weekend... Go to work!!! `;
  }
}
//assigment 42
function displayPrice() {
  var price;
  var product;

  if (document.getElementById(`iPad`).checked == true) {
    price = 1200;
    product = "iPad";
  } else if (document.getElementById(`iPhone`).checked == true) {
    price = 700;
    product = "iPhone";
  } else if (document.getElementById(`MacBook`).checked == true) {
    price = 3500;
    product = "MacBook";
  } else {
    document.getElementById(
      `productPrice`
    ).innerHTML = `You have to choose a product to see the price!`;
    return;
  }
  document.getElementById(
    "productPrice"
  ).innerHTML = `Product you choose is ${product}, and the price for it is: ${price}`;
}
//assigment 43
function Time_function() {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = `It's morning time!`;
  } else if (Time > 12 == Time < 18) {
    Reply = `It's the afternoon.`;
  } else {
    Reply = `It's evening time.`;
  }
  document.getElementById(`Time_of_day`).innerHTML = Reply;
}
