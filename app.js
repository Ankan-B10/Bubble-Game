var timer = 60;
var score = 0;
var hitRnum = 0;

//* Score increaseScore()
function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}
//* For hitting bubble random value store
function getNewHit() {
  hitRnum = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitRnum;
}
//* for many bubbles
// for storing bubbles values
function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 168; i++) {
    var rnum = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rnum}</div>`;
  }

  document.querySelector("#pbottom").innerHTML = clutter;
}

//* Timer value decresed
function runTimer() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbottom").innerHTML = `<h2 id="pbottom">GAME OVER</h2>`;
    }
  }, 1000);
}

document.querySelector("#pbottom").addEventListener("click", function (dets) {
  var clickedNum = Number(dets.target.textContent);
  if (clickedNum === hitRnum) {
    increaseScore();
    makeBubble();
    getNewHit();
  } 
});

makeBubble();
runTimer();
getNewHit();
