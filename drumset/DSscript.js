const DrumBtn = document.querySelectorAll(".drum");

const animate = (key) => {
  const theKey = document.querySelector(`.${key}`);
  theKey.classList.add("btn-animatiion");
  setTimeout(() => {
    theKey.classList.remove("btn-animatiion");
  }, 150);
};
const theTune = (url) => {
  const audio = new Audio(url);
  audio.play();
}


const playTune = (key) => {
  switch (key) {
    case "W":
      // console.log("h")
      theTune("sounds/sound-1.mp3");
      break;
    case "A":
      theTune("sounds/sound-2.mp3");
      break;
    case "S":
      theTune("sounds/sound-3.mp3");
      break;
    case "D":
      theTune("sounds/sound-4.mp3");
      break;
    case "J":
      theTune("sounds/sound-5.mp3");
      break;
    case "K":
      theTune("sounds/sound-6.mp3");
      break;
    case "L":
      theTune("sounds/sound-7.mp3");
      break;

    default:
      console.log("invailed key");
  }
};
//Keyboard key funtion
document.addEventListener("keypress", (e) => {
    const pressKey = e.key;
    animate(pressKey);
    playTune(pressKey);
});

// Click and touch
const clickBTn = (event) => {
  let element = event.target;
  let theElementValue = element.innerText;
  animate(theElementValue);
  playTune(theElementValue);
};

for (let i = 0; i < DrumBtn.length; i++) {
  DrumBtn[i].addEventListener("click", clickBTn);
}

