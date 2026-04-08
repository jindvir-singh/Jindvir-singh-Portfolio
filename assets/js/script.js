"use strict";
const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
function closeMenu() { menuButton.setAttribute('aria-expanded', 'false'); navLinks.classList.remove('is-open'); }
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navLinks.classList.toggle('is-open', open); });
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); menuButton.focus(); } });
window.addEventListener('resize', () => { if (window.innerWidth > 600) closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
