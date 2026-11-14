// Burger menu (opens/closes with animation; the CSS handles the look)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.setAttribute('role', 'button');
menuIcon.setAttribute('tabindex', '0');
menuIcon.setAttribute('aria-label', 'Toggle menu');
menuIcon.setAttribute('aria-expanded', 'false');

function setMenu(open) {
  navbar.classList.toggle('active', open);
  menuIcon.classList.toggle('open', open);
  menuIcon.setAttribute('aria-expanded', String(open));
}
const isMenuOpen = () => navbar.classList.contains('active');

menuIcon.addEventListener('click', () => setMenu(!isMenuOpen()));

menuIcon.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    setMenu(!isMenuOpen());
  }
});

// Close the menu after clicking a link
document.querySelectorAll('.navbar a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Close when clicking outside the menu
document.addEventListener('click', (e) => {
  if (isMenuOpen() && !navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    setMenu(false);
  }
});

// Close with Esc, or when the screen becomes desktop size
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isMenuOpen()) {
    setMenu(false);
    menuIcon.focus();
  }
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 991 && isMenuOpen()) setMenu(false);
});