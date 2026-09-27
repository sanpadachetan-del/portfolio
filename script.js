document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

function downloadResume(e) {
  e.preventDefault();
  alert("Replace this link in index.html with your actual resume PDF.");
}

function sendMessage(e) {
  e.preventDefault();
  alert("Form demo: connect this form to Formspree, EmailJS, or your backend to receive messages.");
}
