const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  if (navMenu.classList.contains("open")) {
    menuButton.textContent = "✖";
  } else {
    menuButton.textContent = "☰";
  }
});
