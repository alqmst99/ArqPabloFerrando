/**
 * i18n.js — Bilingual system ES / EN
 * Resolves data paths relative to the current page depth.
 */
(function () {
  const SUPPORTED = ['es', 'en'];
  const DEFAULT = 'es';
  let currentLang = DEFAULT;
  let content = null;
  let projects = null;

  function dataBase() {
    // pages/* → ../data/   root → data/
    const path = window.location.pathname.replace(/\\/g, '/');
    if (path.includes('/pages/')) return '../data/';
    return 'data/';
  }

  function detectLang() {
    const params = new URLSearchParams(window.location.search);
    const fromUrl = params.get('lang');
    if (fromUrl && SUPPORTED.includes(fromUrl)) return fromUrl;
    const stored = localStorage.getItem('ferrando-lang');
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'es').slice(0, 2).toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  }

  function setLang(lang, push) {
    if (!SUPPORTED.includes(lang)) return;
    currentLang = lang;
    localStorage.setItem('ferrando-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    if (push !== false) {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', lang);
        history.replaceState({ lang }, '', url);
      } catch (e) { /* ignore */ }
    }

    applyTranslations();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  }

  function t(obj) {
    if (obj == null) return '';
    if (typeof obj === 'string') return obj;
    return obj[currentLang] || obj.es || obj.en || '';
  }

  function getByPath(obj, path) {
    if (!obj || !path) return null;
    return path.split('.').reduce(function (o, k) {
      return (o && o[k] != null) ? o[k] : null;
    }, obj);
  }

  function applyTranslations() {
    if (!content) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getByPath(content, el.getAttribute('data-i18n'));
      if (val != null) el.textContent = t(val);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = getByPath(content, el.getAttribute('data-i18n-html'));
      if (val != null) el.innerHTML = t(val);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var val = getByPath(content, el.getAttribute('data-i18n-placeholder'));
      if (val != null) el.placeholder = t(val);
    });
    document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
      var l = btn.getAttribute('data-set-lang');
      btn.classList.toggle('active', l === currentLang);
      btn.setAttribute('aria-pressed', l === currentLang ? 'true' : 'false');
    });
  }

  async function loadData() {
    var base = dataBase();
    var cRes = await fetch(base + 'content.json');
    var pRes = await fetch(base + 'projects.json');
    if (!cRes.ok || !pRes.ok) {
      throw new Error('Failed to load data from ' + base);
    }
    content = await cRes.json();
    projects = await pRes.json();
    return { content: content, projects: projects };
  }

  window.I18N = {
    init: async function () {
      currentLang = detectLang();
      await loadData();
      setLang(currentLang, false);
      document.querySelectorAll('[data-set-lang]').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          setLang(btn.getAttribute('data-set-lang'));
        });
      });
      return { content: content, projects: projects, lang: currentLang };
    },
    setLang: setLang,
    t: t,
    getContent: function () { return content; },
    getProjects: function () { return projects; },
    getLang: function () { return currentLang; },
    applyTranslations: applyTranslations
  };
})();
