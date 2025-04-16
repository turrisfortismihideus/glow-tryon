const video = document.getElementById("video");
const overlay = document.getElementById("overlay");

// Access webcam
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    video.srcObject = stream;
  })
  .catch(err => {
    console.error("Webcam access denied:", err);
  });

// Change overlay image
window.changeStyle = (src) => {
  overlay.src = src;
};