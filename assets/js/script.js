(function () {
  var els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window) || !els.length) return;

  document.body.classList.add('reveal-ready');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = (i % 6) * 60;
        setTimeout(function () { el.classList.add('is-visible'); }, delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  els.forEach(function (el) { observer.observe(el); });
})();
