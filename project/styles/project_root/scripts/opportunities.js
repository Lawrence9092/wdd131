// ===============================
// opportunities.js - Dynamic Opportunities Listing
// Author: Lawrence Ngwenya
// ===============================

const opportunities = [
  {
    id: "opp1",
    title: "Commercial Farming Cooperative",
    location: "Mashonaland East",
    investmentUSD: 25000,
    description: "A cooperative model empowering smallholder farmers through shared equipment and training."
  },
  {
    id: "opp2",
    title: "Affordable Housing Units",
    location: "Harare",
    investmentUSD: 120000,
    description: "Developing low-cost homes targeted at first-time buyers with financing partnerships."
  },
  {
    id: "opp3",
    title: "Solar Mini-Grid Project",
    location: "Midlands Province",
    investmentUSD: 60000,
    description: "Deploying off-grid solar power systems in rural communities."
  }
];

// ✅ Generate a single card
function createOpportunityCard(op) {
  const risk = op.investmentUSD > 50000 ? "High Investment" : "Entry Level";
  return `
    <article class="opp-card" data-id="${op.id}">
      <img src="images/${op.id}.jpg" alt="${op.title}" loading="lazy" />
      <h3>${op.title}</h3>
      <p>${op.description}</p>
      <p><strong>Location:</strong> ${op.location}</p>
      <p><strong>Investment:</strong> $${op.investmentUSD.toLocaleString()}</p>
      <p class="tag">${risk}</p>
      <button class="save-btn" data-id="${op.id}">Save</button>
    </article>
  `;
}

// ✅ Render cards into the DOM
function renderOpportunities() {
  const container = document.getElementById("opportunityList");
  if (!container) return;
  container.innerHTML = opportunities.map(createOpportunityCard).join("");
  attachSaveHandlers();
}

// ✅ Add click handlers to buttons
function attachSaveHandlers() {
  document.querySelectorAll(".save-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.target.dataset.id;
      saveOpportunity(id);
      e.target.textContent = "Saved ✓";
      e.target.disabled = true;
    });
  });
}

// ✅ Save opportunities in localStorage
function saveOpportunity(id) {
  const saved = JSON.parse(localStorage.getItem("savedOpps") || "[]");
  if (!saved.includes(id)) {
    saved.push(id);
    localStorage.setItem("savedOpps", JSON.stringify(saved));
  }
}

// ✅ Initialize page
document.addEventListener("DOMContentLoaded", renderOpportunities);
