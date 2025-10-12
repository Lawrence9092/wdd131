// ===============================
// Site Plan Script - Lawrence Ngwenya
// ===============================

// Display a welcome message in the console
console.log("Welcome to the Business & Investment Resource Hub Site Plan!");

// Example: Simple interactive enhancement
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.addEventListener("mouseover", () => {
    header.style.backgroundColor = "#004d00"; // Darker green on hover
  });
  header.addEventListener("mouseout", () => {
    header.style.backgroundColor = "var(--primary-color)";
  });
});

// Example: Display the current year in the footer automatically
const footer = document.querySelector("footer p");
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Lawrence Ngwenya`;
