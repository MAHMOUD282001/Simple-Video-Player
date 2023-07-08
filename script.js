let playPauseBtn = document.querySelector(".play-pause");

let backwardBtn = document.querySelector(".backward");

let forwardBtn = document.querySelector(".forward");

let videoInput = document.querySelector(".handle-video");

const videoPlayer = document.getElementById('videoPlayer');


let url;

let video;

videoInput.onchange = function () {

  const file = videoInput.files[0];
  const reader = new FileReader();

  reader.onload = function() {
    videoPlayer.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
  
  videoPlayer.onended = () => {
    playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  };
};

playPauseBtn.addEventListener("click", function () {
  if (videoInput.files[0]) {
    if (this.innerHTML === '<i class="fa-solid fa-pause"></i>') {
      this.innerHTML = '<i class="fa-solid fa-play"></i>';
      videoPlayer.pause();
    } else {
      this.innerHTML = '<i class="fa-solid fa-pause"></i>';
      videoPlayer.play();
    }
  }
  
  else{
    console.log("No Video Seclected")
  }
});

forwardBtn.addEventListener("click", function () {
  if (videoInput.files[0]) {
    videoPlayer.currentTime += 5;
  }
  
  else{
    console.log("No Video Seclected")
  }
});

backwardBtn.addEventListener("click", function () {
  if (videoInput.files[0]) {
    videoPlayer.currentTime -= 5;
  }
  
  else{
    console.log("No Video Seclected")
  }
});
