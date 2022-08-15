//defining the function using ES6 arrow function
let playSound = (event) => {
  let key = document.querySelector(`div[data-key='${event.keyCode}']`);
  let sound = document.querySelector(`audio[data-key='${event.keyCode}']`);
  if (!sound) return; //ends the function if a key doesn't do anything
  sound.currentTime = 0; //Rewinds the audio so that when clicked repeatedly it works
  sound.play();
  key.classList.add("playing");
};

//Defining the function the traditional way
function removePop(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}

let keys = document.querySelectorAll(".key");

//Listens on a keydown event on the entire document
document.addEventListener("keydown", playSound);

// removes the class .playing from each div as soon as the trasition ends
keys.forEach((key) => key.addEventListener("transitionend", removePop)); //Adds an event listener to every div with class .key
