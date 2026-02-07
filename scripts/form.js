const products = [
  { id: "p1", name: "Budget Planner App" },
  { id: "p2", name: "Smart Notebook" },
  { id: "p3", name: "Financial Calculator" },
  { id: "p4", name: "Expense Tracker" }
];

const productSelect = document.getElementById("product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});
