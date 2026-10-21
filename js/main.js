/* ============================================================
 *  main.js —— 页面装配入口
 *  约定：页面通过 data-* 钩子声明需要的模块，本文件统一初始化。
 * ============================================================ */
(function () {
  const D = window.BH_DATA;

  /* 公共结构 */
  BH_UI.mount();

  /* 首页轮播 */
  const heroHost = document.getElementById('heroCarousel');
  if (heroHost) BH_Carousel.buildHero(heroHost, D.hero);

  /* 卡片画廊（含筛选 + 灯箱） */
  const SETS = { spots: D.spots, foods: D.foods, cultures: D.cultures, folkes: D.folkes };
  Array.prototype.forEach.call(document.querySelectorAll('[data-gallery]'), function (host) {
    const key = host.getAttribute('data-gallery');
    const items = SETS[key];
    if (!items) return;
    BH_Gallery.mount(host, items, { search: host.hasAttribute('data-search') });
  });

  /* 精选预览（首页 / 内页底部） */
  Array.prototype.forEach.call(document.querySelectorAll('[data-preview]'), function (host) {
    const key = host.getAttribute('data-preview');
    const n = parseInt(host.getAttribute('data-limit') || '3', 10);
    const items = (SETS[key] || []).slice(0, n);
    host.className = host.className || 'grid grid-3';
    host.innerHTML = items.map(BH_Gallery.cardHtml).join('');
    host.addEventListener('click', function (e) {
      const card = e.target.closest('.card');
      if (!card) return;
      const id = card.getAttribute('data-id');
      const all = SETS[key] || [];
      BH_Lightbox.open(all, all.findIndex(function (v) { return v.id === id; }));
    });
  });

  /* 静态插画占位：[data-art='{"motif":"beach","colors":["#3FB6E0","#0A5C7E"]}'] */
  Array.prototype.forEach.call(document.querySelectorAll('[data-art]'), function (box) {
    const cfg = JSON.parse(box.getAttribute('data-art'));
    const img = new Image();
    img.src = BH_ART.uri(cfg);
    img.alt = cfg.alt || cfg.motif;
    img.loading = 'lazy';
    box.appendChild(img);
  });

  /* 真实照片占位：[data-photo='assets/img/xxx.jpg'] */
  Array.prototype.forEach.call(document.querySelectorAll('[data-photo]'), function (box) {
    const src = box.getAttribute('data-photo');
    const img = new Image();
    img.src = src;
    img.alt = box.getAttribute('data-photo-alt') || '';
    img.loading = 'lazy';
    box.appendChild(img);
  });

  /* 视频 */
  const videoHost = document.querySelector('[data-videos]');
  if (videoHost) {
    const limit = parseInt(videoHost.getAttribute('data-limit') || '0', 10);
    BH_Video.mount(videoHost, limit ? D.videos.slice(0, limit) : D.videos);
  }

  /* 路线 */
  const routeHost = document.querySelector('[data-routes]');
  if (routeHost) BH_Routes.mount(routeHost, D.routes);

  /* 统计数字 */
  const statHost = document.querySelector('[data-stats]');
  if (statHost) {
    statHost.classList.add('stat-strip');
    statHost.innerHTML = D.stats.map(function (s) {
      return '<div class="stat">' +
        '<b><span data-count="' + s.num + '" data-decimal="' + (s.decimal || 0) + '" data-suffix="' + (s.suffix || '') + '">0</span></b>' +
        '<span>' + s.label + '</span></div>';
    }).join('');
    BH_UI.bindCounters();
  }

  /* 城市概况 */
  const factHost = document.querySelector('[data-facts]');
  if (factHost) {
    factHost.classList.add('fact-list');
    factHost.innerHTML = D.facts.map(function (f) {
      return '<div class="fact-item"><b>' + f.k + '</b><span>' + f.v + '</span></div>';
    }).join('');
  }

  /* 最佳季节 */
  const seasonHost = document.querySelector('[data-seasons]');
  if (seasonHost) {
    seasonHost.classList.add('season-grid');
    seasonHost.innerHTML = D.bestTime.map(function (s) {
      return '<div class="season-card"><h4>' + s.season + '</h4>' +
        '<p>' + s.desc + '</p>' +
        '<div class="stars">' + '★'.repeat(s.score) + '<span style="color:var(--ink-300)">' + '★'.repeat(5 - s.score) + '</span></div>' +
        '</div>';
    }).join('');
  }

  /* FAQ 折叠面板 */
  const faqHost = document.querySelector('[data-faq]');
  if (faqHost) {
    faqHost.classList.add('accordion');
    faqHost.innerHTML = D.faq.map(function (f, i) {
      return '<div class="acc-item' + (i === 0 ? ' is-open' : '') + '">' +
        '<button class="acc-head" type="button" aria-expanded="' + (i === 0) + '">' +
          '<span>' + f.q + '</span><span class="acc-icon">' + BH_UI.ICON.plus + '</span>' +
        '</button>' +
        '<div class="acc-body"><div class="acc-body-inner">' + f.a + '</div></div>' +
      '</div>';
    }).join('');
  }

  /* 折叠面板交互（含页面手写的结构） */
  Array.prototype.forEach.call(document.querySelectorAll('.accordion'), function (root) {
    root.addEventListener('click', function (e) {
      const head = e.target.closest('.acc-head');
      if (!head) return;
      const item = head.parentElement;
      const body = item.querySelector('.acc-body');
      const open = item.classList.toggle('is-open');
      head.setAttribute('aria-expanded', String(open));
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    });
    /* 初始化已展开项 */
    Array.prototype.forEach.call(root.querySelectorAll('.acc-item.is-open'), function (item) {
      const body = item.querySelector('.acc-body');
      body.style.maxHeight = body.scrollHeight + 'px';
    });
  });

  /* 页面加载完成后刷新一次入场动画观察 */
  window.addEventListener('load', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-reveal]'), function (el) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
    });
  });
})();
