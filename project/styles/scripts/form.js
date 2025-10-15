// ===============================
// form.js - Lawrence Ngwenya
// ===============================

// Product data array
const products = [
  { id: "p1", name: "Solar Panel Kit" },
  { id: "p2", name: "Water Purifier" },
  { id: "p3", name: "Irrigation Pump" },
  { id: "p4", name: "Home Inverter" },
  { id: "p5", name: "Smart Lighting System" }
];

// Populate select options
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");
  if (select) {
    products.forEach(prod => {
      const option = document.createElement("option");
      option.value = prod.id;
      option.textContent = prod.name;
      select.appendChild(option);
    });
  }

  // Set current year in footer
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
