/* ============================================================
 *  components.js —— 公共结构（页头 / 导航 / 页脚 / 回到顶部）
 *                    + 滚动高亮、滚动入场、数字滚动
 * ============================================================ */
window.BH_UI = (function () {
  const ICON = {
    wave: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M3 20c3-4 6-4 9 0s6 4 9 0 6-4 8 0"/><path d="M3 26c3-4 6-4 9 0s6 4 9 0 6-4 8 0"/><circle cx="23" cy="8" r="4.2" fill="currentColor" stroke="none"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7z"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21M11 8v6M8 11h6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4C5 4 2 6.7 2 10c0 1.9 1 3.6 2.6 4.7L4 17l2.7-1.4c.7.2 1.5.3 2.3.3h.5A5.6 5.6 0 018 12c0-3.3 3-6 6.7-6H9zm-2.5 3.5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2z"/><path d="M22 12.5c0-2.9-2.7-5.2-6-5.2s-6 2.3-6 5.2c0 2.9 2.7 5.2 6 5.2c.7 0 1.4-.1 2-.3L21 19l-.6-2c1.1-.9 1.6-2.3 1.6-3.5zm-8.3-1a.9.9 0 110-1.8.9.9 0 010 1.8zm4.6 0a.9.9 0 110-1.8.9.9 0 010 1.8z"/></svg>',
    weibo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 19c-3.6 0-6.5-1.8-6.5-4 0-.9.4-1.9 1.3-2.8C5.4 11 7.1 10 9.2 10c.4 0 .8 0 1.2.1.1-.7.4-1.3.8-1.8-.2 0-.5-.1-.8-.1-3.6 0-6.4 2.3-6.4 5.1 0 2.2 1.7 4.1 4.2 4.9A9 9 0 015 20.3c.2 0 .4.1.6.1 2.6 0 4.5-1.3 4.5-3 0-.8-.3-1.5-.8-2.1-.4.5-1 1-1.9 1-1.2 0-2.1-.9-2.1-2s.9-2 2.1-2c1.4 0 2.3 1.1 2.3 2.5 0 .4-.1.8-.2 1.2.7-.3 1.4-.4 2.2-.4 1.3 0 2.4.4 3.2 1.1-.1-2.6-2.3-4.6-5-4.6-.5 0-1 .1-1.4.2.5-.6.9-1.3 1.1-2.1.2-.8.2-1.6 0-2.3.9.5 1.6 1.2 2.1 2.1 1-.6 2.2-.9 3.4-.9.3 0 .6 0 .9.1-.3.4-.6.8-.8 1.3-.2.6-.3 1.2-.1 1.8.2.7.7 1.3 1.3 1.7 2.4.9 4 2.9 4 5.1 0 3.3-3.4 6-7.5 6z"/></svg>',
    douyin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-3v13.2a2.6 2.6 0 11-2.6-2.6c.3 0 .5 0 .8.1V9.5a6.4 6.4 0 105.6 6.3V8.4c1 .8 2.3 1.3 3.7 1.3V6.6c-1.4 0-2.6-.5-3.6-1.3V2z"/></svg>',
    /* 移动端底部导航条图标 */
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.2 12 4.5l8 6.7"/><path d="M6.3 10.2V20h11.4v-9.8"/><path d="M10 20v-5.2h4V20"/></svg>',
    sunsea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="7.5" r="3.1"/><path d="M3 15.2c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/><path d="M3 19.4c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/></svg>',
    museum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20.5h18"/><path d="M12 4 3.5 9.5h17L12 4z"/><path d="M5.6 9.8V20M18.4 9.8V20M9.2 20v-6h5.6v6"/></svg>',
    lantern: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2.6"/><path d="M9.2 5.6h5.6"/><ellipse cx="12" cy="12.2" rx="5.2" ry="5.6"/><path d="M12 17.8V21"/><path d="M9.6 21h4.8"/></svg>',
    bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.4 11.2h17.2c0 4.6-3.9 8.3-8.6 8.3s-8.6-3.7-8.6-8.3z"/><path d="M2.6 21h18.8"/><path d="M8 8.2c0-1.5 1-2 1-3M12 7.6c0-1.5 1-2 1-3M16 8.2c0-1.5 1-2 1-3"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="5" r="2.2"/><path d="M6 16.6V12a4 4 0 0 1 4-4h5.6"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="12.6" height="13" rx="2.6"/><path d="M15.6 10.6 21 7.2v9.6l-5.4-3.4z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11.2v6"/><circle cx="12" cy="7.9" r="1" fill="currentColor" stroke="none"/></svg>'
  };

  /* 底部导航条：页面 -> 图标 / 短标签 */
  const TAB_META = {
    'index.html': { icon: 'home', short: '首页' },
    'scenery.html': { icon: 'sunsea', short: '风光' },
    'culture.html': { icon: 'museum', short: '人文' },
    'folk.html': { icon: 'lantern', short: '民俗' },
    'food.html': { icon: 'bowl', short: '美食' },
    'routes.html': { icon: 'route', short: '路线' },
    'video.html': { icon: 'cam', short: '视频' },
    'about.html': { icon: 'info', short: '关于' }
  };

  /* ---------- 页头 ---------- */
  function renderHeader() {
    const host = document.getElementById('site-header');
    if (!host) return;
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = BH_DATA.nav.map(function (n) {
      const active = n.href.toLowerCase() === here ? ' is-active' : '';
      return '<li><a class="nav-link' + active + '" href="' + n.href + '">' + n.text + '</a></li>';
    }).join('');

    host.innerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<div class="container header-inner">' +
          '<a class="brand" href="index.html" aria-label="返回首页">' +
            '<span class="brand-logo">' + ICON.wave + '</span>' +
            '<span class="brand-text"><strong>北海</strong><em>BEIHAI · 我的家乡</em></span>' +
          '</a>' +
          '<nav class="nav" id="primaryNav" aria-label="主导航">' +
            '<ul class="nav-list">' + links + '</ul>' +
            '<a class="btn btn--ocean btn--sm" href="routes.html">规划行程</a>' +
          '</nav>' +
          '<div class="header-actions">' +
            '<a class="btn btn--coral btn--sm" href="routes.html">规划行程</a>' +
            '<button class="nav-toggle" id="navToggle" type="button" aria-label="打开导航菜单" aria-expanded="false" aria-controls="primaryNav">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="nav-mask" id="navMask"></div>' +
      tabBarHtml(here);
  }

  /* 移动端底部导航条：8 个页面一键直达，当前页高亮 */
  function tabBarHtml(here) {
    const tabs = BH_DATA.nav.map(function (n) {
      const key = n.href.toLowerCase();
      const meta = TAB_META[key] || { icon: 'sunsea', short: n.text };
      const active = key === here ? ' is-active' : '';
      return '<a class="tab' + active + '" href="' + n.href + '"' +
        (active ? ' aria-current="page"' : '') + '>' +
        ICON[meta.icon] + '<span>' + meta.short + '</span></a>';
    }).join('');
    return '<nav class="tabbar" id="tabBar" aria-label="页面导航"><div class="tabbar-inner">' + tabs + '</div></nav>';
  }

  /* ---------- 页脚 ---------- */
  function renderFooter() {
    const host = document.getElementById('site-footer');
    if (!host) return;
    const quick = BH_DATA.nav.slice(1, 5).map(function (n) {
      return '<li><a href="' + n.href + '">' + n.text + '</a></li>';
    }).join('');
    const routeLinks = BH_DATA.routes.map(function (r) {
      return '<li><a href="routes.html#' + r.id + '">' + r.name + '</a></li>';
    }).join('');

    host.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-col">' +
              '<div class="footer-brand">' +
                '<span class="brand-logo">' + ICON.wave + '</span>' +
                '<span class="brand-text"><strong>北海</strong><em>BEIHAI · 我的家乡</em></span>' +
              '</div>' +
              '<p style="font-size:14px;line-height:1.9">一座被北部湾环抱的小城：银滩的沙、涠洲的浪、老街的骑楼、侨港的烟火，还有两千年海上丝路留下的珠光帆影。</p>' +
              '<div class="footer-social" style="margin-top:18px">' +
                '<a href="#" aria-label="微信">' + ICON.wechat + '</a>' +
                '<a href="#" aria-label="微博">' + ICON.weibo + '</a>' +
                '<a href="#" aria-label="抖音">' + ICON.douyin + '</a>' +
              '</div>' +
            '</div>' +
            '<div class="footer-col"><h4>走进北海</h4><ul>' + quick + '</ul></div>' +
            '<div class="footer-col"><h4>精品路线</h4><ul>' + routeLinks + '</ul></div>' +
            '<div class="footer-col"><h4>旅行信息</h4><ul>' +
              '<li>最佳旅行季：9 月 - 次年 4 月</li>' +
              '<li>市花：三角梅</li>' +
              '<li>城市名片：南珠之乡</li>' +
              '<li>旅游热线：0779-12345</li>' +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© ' + new Date().getFullYear() + ' 我的家乡 —— 广西北海 | 文旅主题网站</span>' +
            '<span>海洋蓝 · 沙滩米白 · 珊瑚橙</span>' +
          '</div>' +
        '</div>' +
      '</footer>' +
      '<button class="to-top" id="toTop" type="button" aria-label="回到顶部">' + ICON.up + '</button>';
  }

  /* ---------- 交互：滚动 / 抽屉 / 入场 / 计数 ---------- */
  function bindHeader() {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primaryNav');
    const mask = document.getElementById('navMask');
    const toTop = document.getElementById('toTop');
    const dark = document.body.getAttribute('data-header') === 'dark';

    function setNav(open) {
      nav.classList.toggle('is-open', open);
      mask.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
    }
    /* 底部导航条：把当前页签滚到可见区域（横向可滚动时） */
    const bar = document.getElementById('tabBar');
    if (bar) {
      const inner = bar.querySelector('.tabbar-inner');
      const cur = bar.querySelector('.tab.is-active');
      if (inner && cur) {
        requestAnimationFrame(function () {
          inner.scrollLeft = Math.max(0, cur.offsetLeft - inner.clientWidth / 2 + cur.offsetWidth / 2);
        });
      }
    }

    toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
    mask.addEventListener('click', function () { setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setNav(false); });

    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle('is-stuck', y > 12);
      if (dark && header) header.classList.toggle('is-dark', y < 60);
      if (toTop) toTop.classList.toggle('is-show', y > 500);
    }
    header && header.classList.toggle('is-dark', !!dark);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    toTop && toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function bindReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          const d = parseInt(en.target.getAttribute('data-reveal'), 10) || 0;
          setTimeout(function () { en.target.classList.add('is-in'); }, d);
          io.unobserve(en.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  function bindCounters() {
    const nodes = document.querySelectorAll('[data-count]');
    if (!nodes.length) return;
    const run = function (el) {
      const target = parseFloat(el.getAttribute('data-count'));
      const dec = parseInt(el.getAttribute('data-decimal') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1400, start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(start);
    };
    if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: .4 });
    nodes.forEach(function (el) { io.observe(el); });
  }

  /* 图片加载失败兜底：换成同色系 SVG 占位，避免线上出现破图/空白
     （资源未上传、被限流 429、CDN 跨域失败等情况下仍能保持页面观感） */
  function placeholder(text) {
    const label = (text || '图片').slice(0, 10)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#0A5C7E"/><stop offset="1" stop-color="#3FB6E0"/>' +
      '</linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#g)"/>' +
      '<text x="200" y="156" text-anchor="middle" font-family="sans-serif" font-size="18" ' +
      'fill="rgba(255,255,255,.9)">' + label + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function applyFallback(el) {
    if (!el || el.tagName !== 'IMG' || el.getAttribute('data-fallback')) return;

    /* 第一层：assets/img/xxx.jpg 取不到时，尝试仓库根目录的同名文件
       （兼容素材被上传到根目录而不是 assets/img/ 的情况，站点仍能正常显示） */
    const src = el.getAttribute('src') || '';
    const m = src.match(/(?:^|\/)assets\/img\/([^/?#]+)$/);
    if (m && !el.getAttribute('data-retry-root')) {
      el.setAttribute('data-retry-root', '1');
      el.src = m[1];
      return;
    }

    /* 第二层：实在取不到，换成 SVG 占位，避免破图 */
    el.setAttribute('data-fallback', '1');
    el.src = placeholder(el.getAttribute('alt'));
  }

  /* 脚本一加载就注册（error 事件不冒泡，必须捕获阶段），
     否则会错过早于 mount 触发的 404 */
  document.addEventListener('error', function (e) { applyFallback(e.target); }, true);

  function bindImageFallback() {
    /* 兜住注册监听之前就已加载失败的图片 */
    Array.prototype.forEach.call(document.images, function (img) {
      if (img.complete && img.naturalWidth === 0) applyFallback(img);
    });
  }

  function mount() {
    renderHeader();
    renderFooter();
    bindHeader();
    bindReveal();
    bindCounters();
    bindImageFallback();
  }

  return { mount: mount, ICON: ICON, bindReveal: bindReveal, bindCounters: bindCounters, placeholder: placeholder };
})();
