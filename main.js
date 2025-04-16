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
const form = document.getElementById("save-form");
const nameInput = document.getElementById("bride-name");
const notesInput = document.getElementById("notes");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const look = {
    bride: nameInput.value,
    style: overlay.src,
    notes: notesInput.value,
    timestamp: new Date().toISOString(),
  };
  const saved = JSON.parse(localStorage.getItem("savedLooks") || "[]");
  saved.push(look);
  localStorage.setItem("savedLooks", JSON.stringify(saved));
  confirmation.textContent = `Saved look for ${look.bride}`;
  form.reset();
});