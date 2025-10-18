// ===============================
// form.js - Handles Product Review Form
// Author: Lawrence Ngwenya
// ===============================

// ✅ Product data array
const products = [
  { id: "p1", name: "Solar Panel Kit" },
  { id: "p2", name: "Water Purifier" },
  { id: "p3", name: "Irrigation Pump" },
  { id: "p4", name: "Home Inverter" },
  { id: "p5", name: "Smart Lighting System" }
];

// ✅ Populate select dropdown dynamically using template literals
function populateProducts() {
  const select = document.getElementById("productName");
  if (!select) return;
  select.innerHTML = `
    <option value="" disabled selected>Select a Product ...</option>
    ${products.map(prod => `<option value="${prod.id}">${prod.name}</option>`).join("")}
  `;
}

// ✅ Update footer year
function updateYear() {
  const footerYear = document.getElementById("year");
  if (footerYear) footerYear.textContent = new Date().getFullYear();
}

// ✅ Form submission handler
function handleFormSubmit(e) {
  // No preventDefault because we want GET to review.html
  console.log("Form submitted:", e.target);
  // Optionally: store review count on review.html
}

document.addEventListener("DOMContentLoaded", () => {
  populateProducts();
  updateYear();

  const form = document.getElementById("reviewForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  }
});
