// ===============================
// main.js - Shared site behavior
// Author: Lawrence Ngwenya
// ===============================

// ✅ Automatically set footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("footerYear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ✅ Dark mode toggle (example of DOM manipulation)
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.classList.add("dark-toggle");
  document.querySelector("header")?.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const mode = document.body.classList.contains("dark-mode") ? "Dark" : "Light";
    localStorage.setItem("siteTheme", mode);
  });

  // ✅ Load theme from localStorage
  const savedTheme = localStorage.getItem("siteTheme");
  if (savedTheme === "Dark") {
    document.body.classList.add("dark-mode");
  }
});

// ✅ Dark mode styling via CSS variables
document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    body.dark-mode {
      background-color: #1e1e1e;
      color: #f1f1f1;
    }
    body.dark-mode header,
    body.dark-mode footer {
      background-color: #111;
      color: #ffd700;
    }
    .dark-toggle {
      margin-top: 0.5rem;
      background-color: #ffd700;
      color: #000;
      border: none;
      padding: 0.4rem 0.8rem;
      border-radius: 4px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);
});
