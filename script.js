// script.js - Shared for all pages

// ── Back to Top ──
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ── Navbar active link sesuai halaman ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

navLinks.forEach(function (link) {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

// ── Fade in cards saat scroll ──
const cards = document.querySelectorAll('.card, .fakta-card');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

cards.forEach(function (card) {
  card.style.opacity = '0';
  card.style.transform = 'translateY(15px)';
  card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observer.observe(card);
});