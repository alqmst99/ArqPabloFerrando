/**
 * main.js — loader, nav, reveal, filters, form
 */
(function () {
  function initLoader() {
    var loader = document.getElementById('page-loader');
    if (!loader) return;
    function hide() { loader.classList.add('hidden'); }
    if (document.readyState === 'complete') {
      setTimeout(hide, 600);
    } else {
      window.addEventListener('load', function () { setTimeout(hide, 600); });
    }
    setTimeout(hide, 2200);
  }

  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;
    var isHome = navbar.classList.contains('transparent');
    function onScroll() {
      if (!isHome) return;
      if (window.scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
      } else {
        navbar.classList.add('transparent');
        navbar.classList.remove('solid');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function initHamburger() {
    var btn = document.getElementById('hamburger') || document.querySelector('.nav-hamburger');
    var menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      btn.classList.toggle('open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        btn.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll('[data-reveal]:not(.revealed)');
    if (!els.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = data.get('name') || '';
      var email = data.get('email') || '';
      var phone = data.get('phone') || '';
      var type = data.get('type') || '';
      var message = data.get('message') || '';
      var subject = encodeURIComponent('[Consulta web] ' + type + ' — ' + name);
      var body = encodeURIComponent(
        'Nombre: ' + name + '\nEmail: ' + email + '\nTeléfono: ' + phone +
        '\nTipo: ' + type + '\n\nMensaje:\n' + message
      );
      window.location.href = 'mailto:arqpabloferrando@gmail.com?subject=' + subject + '&body=' + body;
      var success = document.getElementById('form-success');
      if (success) {
        success.hidden = false;
        form.reset();
      }
    });
  }

  function initProjectFilter() {
    var btns = document.querySelectorAll('.filter-btn');
    if (!btns.length) return;
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        btns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter') || 'all';
        document.querySelectorAll('.project-card').forEach(function (card) {
          var tags = (card.getAttribute('data-tags') || '').split(',');
          var show = filter === 'all' || tags.indexOf(filter) !== -1;
          card.style.display = show ? '' : 'none';
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', async function () {
    initLoader();
    if (window.I18N) {
      try { await window.I18N.init(); }
      catch (err) { console.error('I18N init failed', err); }
    }
    initNavbar();
    initHamburger();
    initReveal();
    initContactForm();
    initProjectFilter();
    document.addEventListener('langchange', function () { initReveal(); });
  });
})();
