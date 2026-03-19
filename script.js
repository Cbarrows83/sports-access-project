document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function (e) {
    const sameHost = this.hostname === window.location.hostname;
    const hasTarget = this.getAttribute('target') === '_blank';
    const isAnchor = this.getAttribute('href').startsWith('#');

    if (sameHost && !hasTarget && !isAnchor) {
      e.preventDefault();
      document.body.style.opacity = '0';
      setTimeout(() => {
        window.location.href = this.href;
      }, 180);
    }
  });
});
