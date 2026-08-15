(function () {
  var root = document.documentElement;
  var saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);

  window.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('themeToggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
        var next = current === 'light' ? 'dark' : 'light';
        root.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
      });
    }

    var navToggle = document.getElementById('navToggle');
    var navList = document.getElementById('navList');
    if (navToggle && navList) {
      navToggle.addEventListener('click', function () {
        navList.classList.toggle('open');
      });
    }

    // Animate proficiency bars into view
    var bars = document.querySelectorAll('.proficiency-fill');
    if (bars.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            el.style.width = el.getAttribute('data-fill') + '%';
            io.unobserve(el);
          }
        });
      }, { threshold: 0.3 });
      bars.forEach(function (b) { io.observe(b); });
    }
  });
})();
