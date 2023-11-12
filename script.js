let SelectIMG = document.getElementById("Select");
let spanimg = document.getElementById("spanimg");

SelectIMG.addEventListener("change", () => {
  console.log(SelectIMG.value);
  spanimg.src = URL.createObjectURL(SelectIMG.files[0]);

  // Save the image to localStorage
  localStorage.setItem("selectedImage", spanimg.src);
});

// Load the image from localStorage if it exists
if (localStorage.getItem("selectedImage")) {
  spanimg.src = localStorage.getItem("selectedImage");
}


let playpause = document.getElementById("playpause");
let videos = document.getElementById("videos");

playpause.addEventListener("click", ()=> {
  if(videos.paused){
    videos.play()
    playpause.innerHTML =`<img src="icone/4964051_audio_media_music_pause_play_icon.svg" style="width: 40px; fill: white;">`
  }else {
    videos.pause()
    playpause.innerHTML =`<img src="icone/1564490_arrow_music_play_arrows_audio_icon.svg" style="width: 40px; fill: white;">`
  }
})



let body = document.getElementById("body");

window.onload = function (){
}


