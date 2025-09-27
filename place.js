// place.js
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.textContent = "Toggle Dark Mode";
  document.body.prepend(button);

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
});
