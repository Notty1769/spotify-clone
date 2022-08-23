// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("fighting-dreamers-naruto-opening.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = documet.getElementById("myProgressBar");

let songs = [
  {
    songName: "Fighting Dreamers",
    filePath: "songs/fighting-dreamers-naruto-opening.mp3",
    coverPath: "images/thumbnail/naruto.png",
  },
  {
    songName: "Hitohiro no Hanibara",
    filePath: "songs/hitohiro-no-hanabira-from-bleach.mp3",
    coverPath: "images/thumbnail/bleach.png",
  },
  {
    songName: "Again",
    filePath: "songs/again-from-fma-brotherhood-opening-song-1.mp3",
    coverPath: "images/thumbnail/fma.png",
  },
  {
    songName: "Odd Future",
    filePath: "songs/ODD FUTURE-mha.mp3",
    coverPath: "images/thumbnail/mha.png",
  },
];

// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener("click", () => {
  // if (audioElement.paused || audioElement.currentTime <= 0) {
  //   audioElement.play();
  // }
  console.log("Function is accessible");
});

// Listen to Events
myProgressBar.addEventListener("time", () => {
  console.log("timeupdate");
  // Update Seekbar
});
