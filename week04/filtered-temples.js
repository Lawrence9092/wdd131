document.addEventListener('DOMContentLoaded', function () {
  // ================================
  // 1) Footer date updates
  // ================================
  const yearEl = document.getElementById('year');
  const lmEl = document.getElementById('last-modified');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (lmEl) {
    try {
      const raw = document.lastModified;
      const date = new Date(raw);
      lmEl.textContent = !isNaN(date.getTime()) ? date.toLocaleString() : raw || 'Unknown';
    } catch {
      lmEl.textContent = document.lastModified || 'Unknown';
    }
  }

  // ================================
  // 2) Hamburger menu toggling
  // ================================
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');

  if (btn && header && nav) {
    btn.addEventListener('click', function () {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('nav-open');
      btn.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      const icon = btn.querySelector('.hamburger-icon');
      if (icon) icon.textContent = expanded ? '☰' : '✕';
    });

    nav.addEventListener('click', function (e) {
      if (e.target && e.target.matches('a')) {
        header.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open navigation');
        const icon = btn.querySelector('.hamburger-icon');
        if (icon) icon.textContent = '☰';
      }
    });
  }

  // ================================
  // 3) Temple array
  // ================================
  const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "images/aba-temple.jpg" },
    { templeName: "Accra Ghana", location: "Accra, Ghana", dedicated: "2004, January, 11", area: 17500, imageUrl: "images/accra-temple.jpg" },
    { templeName: "Adelaide Australia", location: "Adelaide, Australia", dedicated: "2000, June, 15", area: 10700, imageUrl: "images/adelaide-temple.jpg" },
    { templeName: "Anchorage Alaska", location: "Anchorage, Alaska, United States", dedicated: "1999, January, 9", area: 11937, imageUrl: "images/anchorage-temple.jpg" },
    { templeName: "Apia Samoa", location: "Apia, Samoa", dedicated: "2005, September, 4", area: 18691, imageUrl: "images/apia-samoa-temple.jpg" },
    { templeName: "Atlanta Georgia", location: "Atlanta, Georgia, United States", dedicated: "1983, June, 1", area: 34500, imageUrl: "images/atlanta-georgia-temple.jpg" },
    { templeName: "Bern Switzerland", location: "Bern, Switzerland", dedicated: "1955, September, 11", area: 35546, imageUrl: "images/bern-switzerland-temple.jpg" },
    { templeName: "Billings Montana", location: "Billings, Montana, United States", dedicated: "1999, November, 20", area: 33000, imageUrl: "images/billings-montana-temple.jpg" },
    { templeName: "Tokyo Japan", location: "Tokyo, Japan", dedicated: "1980, March, 15", area: 22000, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Tokyo_Temple.jpg" },
    { templeName: "Paris France", location: "Paris, France", dedicated: "1990, May, 10", area: 18000, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Paris_Temple.jpg" },
    { templeName: "Santiago Chile", location: "Santiago, Chile", dedicated: "2002, July, 21", area: 19500, imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Santiago_Temple.jpg" }
  ];

  // ================================
  // 4) Render temples
  // ================================
  const gallery = document.getElementById("gallery");

  function renderTemples(templesArray) {
    gallery.innerHTML = ''; // clear previous content
    templesArray.forEach(temple => {
      const figure = document.createElement("figure");
      figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
          <strong>${temple.templeName}</strong><br>
          ${temple.location}<br>
          Dedicated: ${temple.dedicated}<br>
          Area: ${temple.area.toLocaleString()} sq ft
        </figcaption>
      `;
      gallery.appendChild(figure);
    });
  }

  // Initial render: show all temples
  renderTemples(temples);

  // ================================
  // 5) Navigation filtering
  // ================================
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.textContent.toLowerCase();
      let filtered = temples;

      switch (filter) {
        case 'old': // built before 1900
          filtered = temples.filter(t => {
            const year = new Date(t.dedicated).getFullYear();
            return year < 1900;
          });
          break;
        case 'new': // built after 2000
          filtered = temples.filter(t => {
            const year = new Date(t.dedicated).getFullYear();
            return year > 2000;
          });
          break;
        case 'large': // larger than 90,000 sq ft
          filtered = temples.filter(t => t.area > 90000);
          break;
        case 'small': // smaller than 10,000 sq ft
          filtered = temples.filter(t => t.area < 10000);
          break;
        case 'home': // all temples
        default:
          filtered = temples;
      }

      renderTemples(filtered);
    });
  });
});
