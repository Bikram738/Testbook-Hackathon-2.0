let sec = 00;
let milisec = 00;
let minit = 00;
// let hour=00;
let inMSec = document.getElementById("milisec");
let inSec = document.getElementById("sec");
let inMinit = document.getElementById("minit");
// let inhour=document.getElementById("hour")
let interval;

let playBtn = document.getElementById("play");
let pauseBtn = document.getElementById("pause");
let resetBtn = document.getElementById("reset");
let lapBtn = document.getElementById("lap");
let lapContent = document.getElementById("time-content");
let ul = document.getElementById("laplist");

//play buttion funtion

playBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(stopWatchFnc, 10);
});
//pause button funtion
pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
});
//reset button funtion
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  sec = 00;
  milisec = 00;
  minit = 00;
  inMSec.innerText = "0" + milisec;
  inSec.innerText = "0" + sec;
  inMinit.innerText = "0" + minit;
  ul.innerHTML = "";
});
//the lap funtion
lapBtn.addEventListener("click", () => {
  if (milisec > 1) {
    let li = document.createElement("li");
    li.innerHTML = lapContent.textContent;
    ul.appendChild(li);
  }
});

let stopWatchFnc = () => {
  milisec++;
  if (milisec <= 9) inMSec.innerText = "0" + milisec;
  if (milisec > 9) inMSec.innerHTML = milisec;
  if (milisec > 99) {
    sec++;
    inSec.innerText = "0" + sec;
    milisec = 0;
    inMSec.innerText = "0" + milisec;
  }
  if (sec > 9) inSec.innerText = sec;
  if (sec > 59) {
    minit++;
    inMinit.innerText = "0" + minit;
    sec = 0;
    inSec.innerText = "0" + sec;
  }
  if (minit > 9) inMinit.innerText = minit;
};
