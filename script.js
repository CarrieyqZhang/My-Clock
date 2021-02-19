var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var sleeptime = 22;
var breaktime;
var evening = 18;

// Getting current time
var showCurrentTime = function () {
  // display time
  var clock = document.getElementById("myclock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

  // Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function () {
  var time = new Date().getHours();
  var messageText;
  var image = "images/day.jpg";

  var timeEventJS = document.getElementById("timeEvent");

  if (time == breaktime) {
    image = "images/break.jpg";
    messageText = "Have a Break!";
  } else if (time == wakeuptime) {
    image = "images/wakeup.jpg";
    messageText = "Wake up!";
  } else if (time == lunchtime) {
    image = "images/Lunch.jpg";
    messageText = "Go for a lunch!";
  } else if (time == sleeptime) {
    image = "images/sleep.jpg";
    messageText = "Sleep tight!";
  } else if (time < noon) {
    image = "images/morning.jpg";
    messageText = "Good morning!";
  } else if (time >= evening) {
    image = "images/evening.jpg";
    messageText = "Good evening!";
  } else {
    image = "images/afternoon.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("breakTimeButton");

var partyEvent = function () {
  if (breaktime < 0) {
    breaktime = new Date().getHours();
    breakTimeButton.innerText = "Skip the Break!";
    breakTimeButton.style.backgroundColor = "#F3CACA";
  } else {
    breaktime = -1;
    breakTimeButton.innerText = "Break Time!";
    breakTimeButton.style.backgroundColor = "#ABDCC2";
  }
};

partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function () {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function () {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates Nap-Time selector
var SleepTimeSelector = document.getElementById("SleepTimeSelector");

var sleepEvent = function () {
  sleeptime = SleepTimeSelector.value;
};

SleepTimeSelector.addEventListener("change", sleepEvent);
