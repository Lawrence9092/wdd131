document.addEventListener('DOMContentLoaded', () => {
  // -------------------
  // Footer date updates
  // -------------------
  const yearEl = document.getElementById('year');
  const lmEl = document.getElementById('last-modified');

  if (yearEl) yearEl.textContent = new Date().getFullYear();
  if (lmEl) {
    try {
      const date = new Date(document.lastModified);
      lmEl.textContent = !isNaN(date.getTime()) ? date.toLocaleString() : document.lastModified || 'Unknown';
    } catch {
      lmEl.textContent = document.lastModified || 'Unknown';
    }
  }

  // -------------------
  // Hamburger menu
  // -------------------
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');

  if (btn && header && nav) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      header.classList.toggle('nav-open');
      btn.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      const icon = btn.querySelector('.hamburger-icon');
      if (icon) icon.textContent = expanded ? '☰' : '✕';
    });

    nav.addEventListener('click', (e) => {
      if (e.target && e.target.matches('a')) {
        header.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Open navigation');
        const icon = btn.querySelector('.hamburger-icon');
        if (icon) icon.textContent = '☰';
      }
    });
  }

  // -------------------
  // Temple data (new URLs integrated)
  // -------------------
  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    }
    // Add more temple objects if desired
  ];

  // -------------------
  // Render function
  // -------------------
  const gallery = document.getElementById("gallery");

  function renderTemples(list) {
    gallery.innerHTML = '';
    list.forEach(t => {
      const figure = document.createElement('figure');
      figure.innerHTML = `
        <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
        <figcaption>
          <strong>${t.templeName}</strong><br>
          ${t.location}<br>
          Dedicated: ${t.dedicated}<br>
          Area: ${t.area.toLocaleString()} sq ft
        </figcaption>
      `;
      gallery.appendChild(figure);
    });
  }

  // Initial render
  renderTemples(temples);

  // -------------------
  // Navigation filtering
  // -------------------
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const filter = link.textContent.toLowerCase();
      let filtered = temples;

      switch (filter) {
        case 'old':
          filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
          break;
        case 'new':
          filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
          break;
        case 'large':
          filtered = temples.filter(t => t.area > 90000);
          break;
        case 'small':
          filtered = temples.filter(t => t.area < 10000);
          break;
        case 'home':
        default:
          filtered = temples;
      }

      renderTemples(filtered);
    });
  });
});
