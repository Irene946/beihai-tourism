/* ============================================================
 *  carousel.js —— 轮播图（首页英雄区）
 *  支持：自动播放、悬停暂停、左右箭头、指示点、键盘、触摸滑动
 * ============================================================ */
window.BH_Carousel = (function () {
  const AUTO = 5600;

  /* 依据数据构建首页英雄轮播 */
  function buildHero(host, slides) {
    if (!host) return null;
    host.classList.add('carousel');
    host.innerHTML =
      slides.map(function (s, i) {
        const bg = s.photo || BH_ART.uri({ motif: s.motif, colors: s.colors });
        return '<div class="hero-slide' + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '" role="group" aria-label="' + (i + 1) + ' / ' + slides.length + '">' +
          '<div class="hero-media"><img src="' + bg + '" alt="' + s.title + '"' + (s.photo ? '' : ' loading="eager"') + '></div>' +
          '<div class="hero-body container">' +
            '<span class="badge badge--glass">' + s.sub + '</span>' +
            '<h1 class="hero-title">' + s.title + '</h1>' +
            '<p class="hero-desc">' + s.desc + '</p>' +
            '<div class="hero-actions">' +
              '<a class="btn btn--coral" href="' + s.btn.href + '">' + s.btn.text + '</a>' +
              '<a class="btn btn--ghost-light" href="routes.html">看看路线</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
      '<button class="carousel-arrow carousel-arrow--prev" type="button" aria-label="上一张">' + BH_UI.ICON.arrow.replace('<svg', '<svg style="transform:rotate(180deg)"') + '</button>' +
      '<button class="carousel-arrow carousel-arrow--next" type="button" aria-label="下一张">' + BH_UI.ICON.arrow + '</button>' +
      '<div class="carousel-dots">' +
        slides.map(function (s, i) {
          return '<button class="carousel-dot' + (i === 0 ? ' is-active' : '') + '" type="button" data-dot="' + i + '" aria-label="第 ' + (i + 1) + ' 张：' + s.title + '"></button>';
        }).join('') +
      '</div>';
    return init(host);
  }

  /* 为已存在的 .hero-slide 结构绑定交互 */
  function init(root) {
    const slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
    if (slides.length < 1) return null;
    const dots = Array.prototype.slice.call(root.querySelectorAll('.carousel-dot'));
    const prev = root.querySelector('.carousel-arrow--prev');
    const next = root.querySelector('.carousel-arrow--next');
    let index = 0, timer = null, paused = false;

    function go(n) {
      index = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === index); });
    }
    function start() {
      stop();
      if (slides.length > 1) timer = setInterval(function () { if (!paused) go(index + 1); }, AUTO);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    next && next.addEventListener('click', function () { go(index + 1); start(); });
    prev && prev.addEventListener('click', function () { go(index - 1); start(); });
    dots.forEach(function (d) {
      d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-dot'), 10)); start(); });
    });

    root.addEventListener('mouseenter', function () { paused = true; });
    root.addEventListener('mouseleave', function () { paused = false; });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { go(index + 1); start(); }
      if (e.key === 'ArrowLeft') { go(index - 1); start(); }
    });

    /* 触摸滑动 */
    let x0 = null;
    root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) { go(index + (dx < 0 ? 1 : -1)); start(); }
      x0 = null;
    });

    go(0);
    start();
    return { go: go, stop: stop, start: start };
  }

  return { buildHero: buildHero, init: init };
})();
