// scripts/temples.js
// Mobile-first behavior: update footer year + last modified, and control hamburger menu

document.addEventListener('DOMContentLoaded', function () {
  // 1) Update copyright year safely
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2) Update last modified date (document.lastModified is a browser-provided string)
  const lmEl = document.getElementById('last-modified');
  if (lmEl) {
    // Convert to nicer local string when possible, otherwise fallback to raw
    try {
      const raw = document.lastModified;
      const date = new Date(raw);
      if (!isNaN(date.getTime())) {
        lmEl.textContent = date.toLocaleString();
      } else {
        lmEl.textContent = raw || 'Unknown';
      }
    } catch (e) {
      lmEl.textContent = document.lastModified || 'Unknown';
    }
  }

  // 3) Hamburger menu toggling (mobile)
  const header = document.querySelector('.site-header');
  const btn = document.querySelector('.hamburger');
  const nav = document.getElementById('primary-nav');

  if (btn && header && nav) {
    btn.addEventListener('click', function () {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // toggle a class on header to show/hide nav (CSS handles display)
      header.classList.toggle('nav-open');
      // toggle label for accessibility
      btn.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
      // optionally change icon text
      const icon = btn.querySelector('.hamburger-icon');
      if (icon) icon.textContent = expanded ? '☰' : '✕';
    });

    // Close menu when a link is clicked (useful on mobile)
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

  // Log for debug (remove in production if you want)
  console.log('temples.js: DOM loaded — controls initialized.');
});



