/* The Tenth Floor — Site JS. Vanilla, no dependencies. */

(function () {
  'use strict';

  // 1. Mobile nav toggle
  var hamburger = document.querySelector('.nav__hamburger');
  var navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-open');
      navLinks.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(hamburger.classList.contains('is-open')));
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        hamburger.classList.remove('is-open');
        navLinks.classList.remove('is-open');
      });
    });
  }

  // 2. Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length > 0) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // 3. Case filters (work page)
  var filtersRoot = document.querySelector('[data-filters]');
  if (filtersRoot) {
    var cases = document.querySelectorAll('[data-case]');
    var state = { industry: 'all', region: 'all' };

    function applyFilters() {
      cases.forEach(function (c) {
        var ind = c.getAttribute('data-industry') || '';
        var reg = c.getAttribute('data-region') || '';
        var indMatch = state.industry === 'all' || ind.split(' ').indexOf(state.industry) !== -1;
        var regMatch = state.region === 'all' || reg.split(' ').indexOf(state.region) !== -1;
        c.style.display = (indMatch && regMatch) ? '' : 'none';
      });
    }

    filtersRoot.querySelectorAll('.filter-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var group = chip.getAttribute('data-group');
        var value = chip.getAttribute('data-value');
        if (!group || !value) return;
        state[group] = value;
        filtersRoot.querySelectorAll('.filter-chip[data-group="' + group + '"]').forEach(function (c) {
          c.classList.remove('is-active');
        });
        chip.classList.add('is-active');
        applyFilters();
      });
    });
  }

  // 4. Smooth anchor scroll
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var target = link.getAttribute('href');
    if (target === '#' || target === '#!') return;
    link.addEventListener('click', function (e) {
      var el = document.querySelector(target);
      if (!el) return;
      e.preventDefault();
      var top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // 5. Active nav state
  var path = window.location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav__links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href) return;
    if (href === path || (href !== '/' && path.indexOf(href) === 0)) {
      a.classList.add('is-active');
    }
  });
})();
