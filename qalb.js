/* qalb.js — shared across all pages */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  /* ── ACTIVE NAV LINK ── */
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* ── SIDEBAR ── */
  const sidebar  = document.getElementById('sidebar');
  const overlay  = document.getElementById('sidebarOverlay');
  const openBtn  = document.getElementById('sidebarOpen');
  const closeBtn = document.getElementById('sidebarClose');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (openBtn)  openBtn.addEventListener('click', openSidebar);
  if (closeBtn) closeBtn.addEventListener('click', closeSidebar);
  if (overlay)  overlay.addEventListener('click', closeSidebar);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSidebar(); });

  /* ── SCROLL FADE-IN ── */
  const observer = new IntersectionObserver(entries => {
    entries.forEach(el => {
      if (el.isIntersecting) {
        el.target.classList.add('visible');
        el.target.style.transitionDelay = el.target.dataset.delay || '0s';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
});
