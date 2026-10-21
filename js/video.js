/* ============================================================
 *  video.js —— 视频卡片网格 + 悬停预览封面 + 视频弹窗播放
 *  用法：<div id="videoGrid" data-videos></div>
 *
 *  封面策略（优先级由高到低）：
 *    1. data.js 中手写的 poster（真实照片）
 *    2. 由视频文件截取的真实帧（canvas 抽帧，结果缓存到 sessionStorage）
 *    3. js/art.js 生成的 SVG 插画
 *  桌面端（支持 hover 的设备）悬停卡片即静音循环预览视频片段。
 * ============================================================ */
window.BH_Video = (function () {
  let modal = null, videoEl = null, errorEl = null, closing = false;

  const PEEK_MAX = 12;              // 悬停预览最大循环时长（秒）
  const PEEK_DELAY = 260;           // 悬停触发延迟（毫秒）
  const CAPTURE_AT = 1.2;           // 抽帧时间点（秒）
  const canHover = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : false;

  /* ---------------- 弹窗播放 ---------------- */
  function buildModal() {
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '视频播放');
    modal.innerHTML =
      '<div class="modal-dialog">' +
        '<button class="modal-close" type="button" aria-label="关闭">' + BH_UI.ICON.close + '</button>' +
        '<div class="modal-media">' +
          '<video controls playsinline preload="metadata" poster=""></video>' +
          '<div class="modal-embed"></div>' +
          '<div class="media-error"></div>' +
        '</div>' +
        '<div class="modal-body"><h3></h3><p></p></div>' +
      '</div>';
    document.body.appendChild(modal);

    videoEl = modal.querySelector('video');
    errorEl = modal.querySelector('.media-error');
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    videoEl.addEventListener('error', function () {
      if (closing) return;                       // 关闭弹窗清空 src 时的假错误
      errorEl.innerHTML = describeError();
      errorEl.classList.add('is-show');
    });
    videoEl.addEventListener('playing', function () { errorEl.classList.remove('is-show'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* 错误诊断：区分「环境不支持 H.264」与「文件缺失/路径错误」 */
  function describeError() {
    const h264 = videoEl.canPlayType('video/mp4; codecs="avc1.640028, mp4a.40.2"');
    if (!h264) {
      return '当前浏览器或预览环境<b>不支持 H.264（MP4）视频解码</b>。<br>' +
        '请改用 <b>Chrome / Edge / Firefox</b> 直接打开本页；IDE 内置预览、' +
        '部分套壳浏览器未内置 H.264 解码器，会表现为视频黑屏或无法播放。';
    }
    return '视频资源加载失败（' + (location.protocol === 'file:' ? 'file:// 本地直开' : location.protocol) + '）。<br>' +
      '请确认 <b>assets/video/</b> 下存在对应 mp4 文件，且 js/data.js 中 src 路径一致；' +
      '若已部署到公网，依次检查：① 文件是否真的进了仓库（<b>git ls-files assets</b>）；' +
      '② 是否误用了 <b>Git LFS</b>（Pages 不支持，线上会拿到指针文件）；' +
      '③ 是否触发平台带宽限制（Network 里状态码为 <b>429</b>）；④ 单文件是否超过平台上限。';
  }

  /* 选源：优先 MP4/H.264；环境不支持且提供了 webm 备源时改用 WebM */
  function pickSource(item) {
    if (item.webm) {
      const h264 = videoEl.canPlayType('video/mp4; codecs="avc1.640028, mp4a.40.2"');
      if (!h264) return item.webm;
    }
    return item.src;
  }

  function open(item) {
    if (!modal) buildModal();
    modal.querySelector('h3').textContent = item.title;
    modal.querySelector('p').textContent = item.desc;
    errorEl.classList.remove('is-show');

    const embedBox = modal.querySelector('.modal-embed');
    if (item.embed) {
      /* 外链嵌入模式：播放第三方平台的视频，站点里不放本地大文件 */
      try { videoEl.pause(); } catch (e) { /* noop */ }
      videoEl.removeAttribute('src');
      videoEl.style.display = 'none';
      embedBox.innerHTML = '<iframe src="' + item.embed + '" title="' + item.title +
        '" allowfullscreen frameborder="0" scrolling="no" loading="lazy"></iframe>';
      embedBox.classList.add('is-show');
    } else {
      embedBox.classList.remove('is-show');
      embedBox.innerHTML = '';
      videoEl.style.display = '';
      videoEl.poster = item._poster || item.poster || BH_ART.uri({ motif: item.motif, colors: item.colors });
      videoEl.src = pickSource(item);
    }

    modal.classList.add('is-open');
    document.body.classList.add('is-locked');
    if (!item.embed) {
      const p = videoEl.play();
      if (p && p.catch) p.catch(function () { /* 浏览器自动播放限制，交由用户点击 */ });
    }
  }

  function close() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    const embedBox = modal.querySelector('.modal-embed');
    if (embedBox) { embedBox.classList.remove('is-show'); embedBox.innerHTML = ''; }
    closing = true;
    try {
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    } catch (e) { /* noop */ }
    setTimeout(function () { closing = false; }, 0);
  }

  /* ---------------- 抽帧：用视频真实画面做封面 ---------------- */
  function capture(item) {
    return new Promise(function (resolve) {
      const key = 'bh:poster:' + item.id;
      let cached = null;
      try { cached = sessionStorage.getItem(key); } catch (e) { cached = null; }
      /* 只接受合法的 data URL；坏缓存直接丢弃，避免整个会话都用一张失败封面 */
      if (cached && cached.indexOf('data:image/') === 0) { item._poster = cached; return resolve(cached); }
      if (cached) { try { sessionStorage.removeItem(key); } catch (e) { /* noop */ } }

      const v = document.createElement('video');
      v.muted = true;
      v.playsInline = true;
      v.preload = 'auto';
      v.src = item.src;

      let done = false;
      const finish = function (url) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        v.removeAttribute('src');
        try { v.load(); } catch (e) { /* noop */ }
        if (url) {
          item._poster = url;
          try { sessionStorage.setItem(key, url); } catch (e) { /* 超配额则忽略缓存 */ }
        }
        resolve(url);
      };
      const timer = setTimeout(function () { finish(null); }, 8000);

      v.addEventListener('loadeddata', function () {
        try { v.currentTime = Math.min(CAPTURE_AT, (v.duration || 6) * 0.2); } catch (e) { /* noop */ }
        shoot();
      });
      v.addEventListener('seeked', shoot);
      v.addEventListener('error', function () { finish(null); });

      function shoot() {
        if (done || !v.videoWidth) return;
        try {
          const c = document.createElement('canvas');
          const w = 640;
          c.width = w;
          c.height = Math.round(w * v.videoHeight / v.videoWidth);
          c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
          finish(c.toDataURL('image/jpeg', 0.72));
        } catch (e) { finish(null); }
      }
    });
  }

  /* 串行抽帧，避免多路视频同时解码 */
  function captureAll(host, items) {
    let chain = Promise.resolve();
    items.forEach(function (v, i) {
      chain = chain.then(function () {
        if (v.poster || !v.src) return null;    // 已有真实封面 / 纯外链条目，跳过
        return capture(v).then(function (url) {
          if (!url) return;
          const img = host.querySelector('[data-cover="' + i + '"]');
          if (!img) return;
          const next = new Image();
          next.onload = function () {
            img.src = url;
            img.classList.add('is-real');
          };
          next.src = url;
        });
      });
    });
    return chain;
  }

  /* ---------------- 悬停预览 ---------------- */
  function startPeek(card) {
    stopPeek();
    const v = card.querySelector('.video-peek');
    if (!v) return;
    if (!v.src) v.src = v.getAttribute('data-src') || v.getAttribute('src');
    v.currentTime = 0;
    const p = v.play();
    if (p && p.catch) p.catch(function () { /* 静音播放被拒：保持静态封面 */ });
    card.classList.add('is-peeking');
  }

  function stopPeek() {
    Array.prototype.forEach.call(document.querySelectorAll('.video-card.is-peeking'), function (c) {
      const v = c.querySelector('.video-peek');
      if (v) { v.pause(); v.currentTime = 0; }
      const bar = c.querySelector('.peek-bar');
      if (bar) bar.style.width = '0%';
      c.classList.remove('is-peeking');
    });
  }

  /* ---------------- 渲染 ---------------- */
  function mount(selector, items) {
    const host = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!host) return;
    host.classList.add('video-grid');
    host.innerHTML = items.map(function (v, i) {
      const cover = v.poster || BH_ART.uri({ motif: v.motif, colors: v.colors });
      return '<article class="video-card" data-idx="' + i + '" tabindex="0" role="button" aria-label="播放 ' + v.title + '">' +
        '<div class="video-thumb">' +
          '<img class="video-cover" data-cover="' + i + '" src="' + cover + '" alt="' + v.title + '" loading="lazy">' +
          /* 只有本地 mp4 才生成预览层；纯外链条目（仅 embed）不产生任何资源请求 */
          (v.src ? '<video class="video-peek" data-src="' + v.src + '" muted playsinline preload="metadata"></video>' : '') +
          '<span class="peek-bar"></span>' +
          (v.src ? '<span class="video-hint">' + BH_UI.ICON.play + '悬停预览</span>' : '') +
        '</div>' +
        '<span class="video-dur" data-dur="' + i + '"' + (v.src ? '' : ' style="display:none"') + '>' + v.dur + '</span>' +
        '<div class="video-mask"><span class="play-btn">' + BH_UI.ICON.play + '</span></div>' +
        '<div class="video-caption">' +
          '<h3>' + v.title + '</h3>' +
          '<p>' + v.desc + '</p>' +
        '</div>' +
      '</article>';
    }).join('');

    function fire(card) {
      stopPeek();
      open(items[parseInt(card.getAttribute('data-idx'), 10)]);
    }
    host.addEventListener('click', function (e) {
      const card = e.target.closest('.video-card');
      if (card) fire(card);
    });
    host.addEventListener('keydown', function (e) {
      const card = e.target.closest && e.target.closest('.video-card');
      if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fire(card); }
    });

    /* 悬停预览（仅鼠标设备）+ 真实时长读取 */
    Array.prototype.forEach.call(host.querySelectorAll('.video-card'), function (card, i) {
      const peek = card.querySelector('.video-peek');
      const bar = card.querySelector('.peek-bar');
      if (!peek) return;         // 纯外链条目：没有本地视频，不预览也不抽帧

      peek.src = items[i].src;   // 立即挂载以便读取时长（preload=metadata，仅取头部）
      peek.addEventListener('loadedmetadata', function () {
        if (isFinite(peek.duration) && peek.duration > 0) {
          const node = card.querySelector('.video-dur');
          if (node) node.textContent = format(peek.duration);
        }
      });
      peek.addEventListener('timeupdate', function () {
        const span = Math.min(peek.duration || PEEK_MAX, PEEK_MAX);
        bar.style.width = Math.min(100, (peek.currentTime / span) * 100) + '%';
        if (peek.currentTime >= PEEK_MAX) peek.currentTime = 0;   // 循环预览片段
      });

      if (canHover) {
        let timer = null;
        card.addEventListener('mouseenter', function () {
          timer = setTimeout(function () { startPeek(card); }, PEEK_DELAY);
        });
        card.addEventListener('mouseleave', function () {
          clearTimeout(timer);
          if (card.classList.contains('is-peeking')) stopPeek();
        });
        card.addEventListener('focus', function () { startPeek(card); });
        card.addEventListener('blur', function () { if (card.classList.contains('is-peeking')) stopPeek(); });
      } else {
        const hint = card.querySelector('.video-hint');
        if (hint) hint.remove();
        peek.addEventListener('loadedmetadata', function () { peek.pause(); });
      }
    });

    /* 页面隐藏时停止所有预览 */
    document.addEventListener('visibilitychange', function () { if (document.hidden) stopPeek(); });

    /* 后台串行抽帧，用真实画面替换封面（全部卡片已配置真实 poster 时跳过，避免整段下载视频） */
    if (items.some(function (v) { return !v.poster && v.src; })) captureAll(host, items);
  }

  function format(s) {
    s = Math.round(s);
    const m = Math.floor(s / 60), r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  return { mount: mount, open: open, close: close, stopPeek: stopPeek };
})();
