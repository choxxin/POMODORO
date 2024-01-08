let a = 0;
let b = prompt("ENTER NO OF MINUTES");
let c = b;
let audio1 = new Audio("Balynt-Afternoon.mp3");
let audio2 = new Audio("Breakfast-in-Paris.mp3");
let audio3 = new Audio("moonshine-prigida-main-version-01-36-17027.mp3");
let audio4 = new Audio("silent-wood.mp3");
let audio5 = new Audio("Soul-Long-Version-.mp3");
let audio6 = new Audio("Still-Awake-Lofi-Study-Music.mp3");
let audio7 = new Audio("Tabula-Rasa.mp3");
let rain = new Audio("RAINNN.mp3");
let bird = new Audio("birddd.mp3");
let jungle = new Audio("jungleee.mp3");
let racer = new Audio("racer.mp3");
let start = new Audio("strater.mp3");

function dec() {
  if (b == 0 && a == 0) {
    pp();
  }
  let s = b + " " + ":" + " " + a;
  if (a / 10 < 1) {
    s = b + " " + ":" + " " + "0" + a;
  }

  document.getElementById("middle").innerHTML = s;

  if (a == 0) {
    b--;
    a = 59;
  }
  a--;
}
let intervalID;
function pp() {
  if (intervalID) {
    start.play();
    clearInterval(intervalID);
    intervalID = null;
  } else {
    racer.play();
    intervalID = setInterval(dec, 1000);
  }
}
pp();

function reset() {
  a = 0;
  b = c;
}
function a1() {
  audio1.currentTime = 0;

  audio1.play();

  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
}

function a2() {
  audio2.currentTime = 0;
  audio2.play();
  audio1.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
}

function a3() {
  audio3.currentTime = 0;
  audio3.play();
  audio1.pause();
  audio2.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
}

function a4() {
  audio4.currentTime = 0;
  audio4.play();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio5.pause();
  audio6.pause();
  audio7.pause();
}

function a5() {
  audio5.currentTime = 0;
  audio5.play();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio6.pause();
  audio7.pause();
}

function a6() {
  audio6.currentTime = 0;
  audio6.play();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio7.pause();
}

function a7() {
  audio7.currentTime = 0;
  audio7.play();
  audio1.pause();
  audio2.pause();
  audio3.pause();
  audio4.pause();
  audio5.pause();
  audio6.pause();
}
let mutebutton = document.getElementById("mute");

function b1() {
  if (audio1.volume == 0) {
    audio1.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
    mutebutton.innerHTML = "PLAY";
  } else {
    mutebutton.style.border = "1px solid black";
    mutebutton.style.backgroundImage = "url('mute.jpg')";
    mutebutton.innerHTML = "PAUSE";

    audio1.volume = 0;
  }
  if (audio2.volume == 0) {
    audio2.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio2.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
  if (audio3.volume == 0) {
    audio3.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio3.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
  if (audio4.volume == 0) {
    audio4.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio4.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
  if (audio5.volume == 0) {
    audio5.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio5.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
  if (audio6.volume == 0) {
    audio6.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio6.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
  if (audio7.volume == 0) {
    audio7.volume = 1;
    mutebutton.style.border = "4px solid green";
    mutebutton.style.backgroundImage =
      "url('https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-vector-play-icon-png-image_695746.jpg')";
  } else {
    mutebutton.style.border = "1px solid black";
    audio7.volume = 0;
    mutebutton.style.backgroundImage = "url('mute.jpg')";
  }
}

let rainbutton = document.getElementById("rain");
let junglebutton = document.getElementById("jungle");
let birdbutton = document.getElementById("bird");

function b2() {
  if (rain.paused) {
    // rainbutton.style.borderColor = "Green";
    rainbutton.style.border = "4px solid Green";
    rainbutton.style.fontSize = "34px";
    rain.play();
    rain.rain.volume(0.5);
  } else {
    rainbutton.style.border = "1px solid black";
    rainbutton.style.color = "white";
    rainbutton.style.fontWeight = "700";
    rainbutton.style.letterSpacing = "2px";
    rainbutton.style.fontSize = " 20px";
    rain.pause();
    rain.volume(0.5);
  }
}
function b3() {
  if (jungle.paused) {
    junglebutton.style.border = "4px solid green";
    junglebutton.style.fontSize = "24px";
    jungle.play();
  } else {
    junglebutton.style.border = "1px solid black";
    junglebutton.style.color = "white";
    junglebutton.style.fontWeight = "700";
    junglebutton.style.letterSpacing = "2px";
    junglebutton.style.fontSize = " 20px";
    jungle.pause();
  }
}
function b4() {
  if (bird.paused) {
    birdbutton.style.border = "4px solid green";
    birdbutton.style.fontSize = "34px";
    bird.play();
  } else {
    birdbutton.style.color = "black";
    birdbutton.style.fontWeight = "700";
    birdbutton.style.letterSpacing = "2px";
    birdbutton.style.fontSize = " 20px";
    birdbutton.style.border = "1px solid black";
    bird.pause();
  }
}
fetch("tasks.html")
  .then((response) => response.text())
  .then((html) => {
    // Load the HTML content into the specified div
    document.getElementById("taskuu").innerHTML = html;
  })
  .catch((error) => console.error("Error loading HTML:", error));
function addTask() {
  var newTaskInput = document.getElementById("newTaskInput");
  var taskList = document.getElementById("taskList");

  if (newTaskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  var taskText = newTaskInput.value;
  newTaskInput.value = ""; // Clear the input field

  var listItem = document.createElement("li");
  listItem.innerHTML = `
  <span>${taskText}</span>
  <button onclick="completeTask(this)">Complete</button>
  <button onclick="removeTask(this)">Delete</button>
`;

  taskList.appendChild(listItem);
}

function completeTask(button) {
  var span = button.parentElement.querySelector("span");
  span.classList.toggle("completed");
}

function removeTask(button) {
  var taskList = document.getElementById("taskList");
  var listItem = button.parentElement;
  taskList.removeChild(listItem);
}

rain.addEventListener("ended", function () {
  rain.currentTime = 0; // Set the current time back to the beginning
  rain.play();
});
jungle.addEventListener("ended", function () {
  jungle.currentTime = 0; // Set the current time back to the beginning
  jungle.play();
});
bird.addEventListener("ended", function () {
  bird.currentTime = 0; // Set the current time back to the beginning
  bird.play();
});

audio1.addEventListener("ended", function () {
  audio1.currentTime = 0; // Set the current time back to the beginning
  audio1.play();
});
audio2.addEventListener("ended", function () {
  audio2.currentTime = 0; // Set the current time back to the beginning
  audio2.play();
});
audio3.addEventListener("ended", function () {
  audio3.currentTime = 0; // Set the current time back to the beginning
  audio3.play();
});
audio4.addEventListener("ended", function () {
  audio4.currentTime = 0; // Set the current time back to the beginning
  audio4.play();
});
audio5.addEventListener("ended", function () {
  audio5.currentTime = 0; // Set the current time back to the beginning
  audio5.play();
});
audio6.addEventListener("ended", function () {
  audio6.currentTime = 0; // Set the current time back to the beginning
  audio6.play();
});
audio7.addEventListener("ended", function () {
  audio7.currentTime = 0; // Set the current time back to the beginning
  audio7.play();
});
