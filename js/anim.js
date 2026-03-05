/* Intersection Observer — déclenche les animations au scroll */
(function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = el.getAttribute('data-anim-delay') || '0';
        setTimeout(function () {
          el.classList.add('is-visible');
        }, parseInt(delay));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-anim]').forEach(function (el) {
    observer.observe(el);
  });
})();
