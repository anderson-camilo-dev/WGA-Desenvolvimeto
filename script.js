// =============================================================
// WGA DESENVOLVIMENTO — script.js
// Menu mobile, gradiente da fita e revelação suave ao rolar.
// =============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Ano automático no rodapé ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---------- Menu mobile ----------
  const burger = document.getElementById('navBurger');
  const links = document.getElementById('navLinks');

  if (burger && links) {
    burger.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      burger.classList.toggle('open', isOpen);
      burger.setAttribute('aria-expanded', isOpen);
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        burger.classList.remove('open');
      });
    });
  }

  // ---------- Gradiente da fita (SVG signature element) ----------
  const svg = document.querySelector('.thread');
  if (svg) {
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', 'thread-gradient');
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '100%');

    const stops = [
      { offset: '0%', color: '#8b8b8d' },
      { offset: '50%', color: '#d8c4a0' },
      { offset: '100%', color: '#8b8b8d' }
    ];
    stops.forEach(s => {
      const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
      stop.setAttribute('offset', s.offset);
      stop.setAttribute('stop-color', s.color);
      gradient.appendChild(stop);
    });

    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    defs.appendChild(gradient);
    svg.prepend(defs);

    // Estica a fita pra cobrir a altura real da página
    const setThreadHeight = () => {
      const height = document.body.scrollHeight;
      svg.setAttribute('viewBox', `0 0 100 ${height / 4}`);
      svg.style.height = height + 'px';
    };
    setThreadHeight();
    window.addEventListener('resize', setThreadHeight);
  }

  // ---------- Revelação suave ao rolar ----------
  const revealTargets = document.querySelectorAll(
    '.card, .project-card, .testimonial, .team-card, .process-step, .section-title, .section-sub'
  );

  if ('IntersectionObserver' in window) {
    revealTargets.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(16px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealTargets.forEach(el => observer.observe(el));
  }

  // ---------- Nav muda de fundo ao rolar (leve reforço visual) ----------
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 40
        ? 'rgba(216, 196, 160, 0.25)'
        : 'rgba(216, 196, 160, 0.14)';
    }, { passive: true });
  }

});
