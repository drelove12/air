const menu = document.querySelector('#menuToggle');
const nav = document.querySelector('#mainNav');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
if (window.WESTERN_AIR_CONFIG?.recruitmentLink) document.querySelector('#applyLink').href = window.WESTERN_AIR_CONFIG.recruitmentLink;
