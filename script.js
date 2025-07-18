// Fade-in animation for the About section
document.addEventListener("DOMContentLoaded", () => {
  const about = document.querySelector(".about-content");
  if (about) {
    about.classList.add("fade-in");
  }

  // Optional: scroll to top on reload
  window.scrollTo(0, 0);
});

// Contact form submission handler
function submitForm(event) {
  event.preventDefault();

  // You could add validation or send data via API here in the future

  alert("Thank you for contacting Silver Thorn Security. We'll respond shortly.");

  // Optional: reset form
  const form = event.target;
  form.reset();

  return false;
}
