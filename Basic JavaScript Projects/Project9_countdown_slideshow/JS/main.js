function countdown() {
  var seconds = document.getElementById("seconds").value;
  function tick() {
    seconds -= 1;
    timer.innerHTML = seconds;
    setTimeout(tick, 1000);
    if (seconds == -1) {
      alert(`Time's Up!`);
      return; //added this so the function stops after displaing the message
    }
  }
  tick();
}
