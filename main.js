// This is a simple example of a webcam overlay using HTML, CSS, and JavaScript.
// The code captures video from the webcam and overlays an image on top of it.
export const js = `
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
`;