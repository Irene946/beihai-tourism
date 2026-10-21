/* ============================================================
 *  lightbox.js —— 图片灯箱
 *  支持：组图切换、条目间上一/下一、缩略图、键盘、触摸滑动、焦点管理
 * ============================================================ */
window.BH_Lightbox = (function () {
  let el = null, list = [], cur = 0, shot = 0, lastFocus = null;

  function build() {
    el = document.createElement('div');
    el.className = 'lightbox';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', '图片详情');
    el.innerHTML =
      '<div class="lb-inner">' +
        '<button class="lb-close" type="button" aria-label="关闭">' + BH_UI.ICON.close + '</button>' +
        '<button class="lb-nav lb-nav--prev" type="button" aria-label="上一个">' + BH_UI.ICON.arrow.replace('<svg', '<svg style="transform:rotate(180deg)"') + '</button>' +
        '<button class="lb-nav lb-nav--next" type="button" aria-label="下一个">' + BH_UI.ICON.arrow + '</button>' +
        '<div class="lb-stage"><img alt=""><span class="lb-counter"></span></div>' +
        '<div class="lb-info"></div>' +
      '</div>';
    document.body.appendChild(el);

    el.querySelector('.lb-close').addEventListener('click', close);
    el.querySelector('.lb-nav--prev').addEventListener('click', function () { step(-1); });
    el.querySelector('.lb-nav--next').addEventListener('click', function () { step(1); });
    el.addEventListener('click', function (e) { if (e.target === el) close(); });

    document.addEventListener('keydown', onKey);

    let x0 = null;
    el.querySelector('.lb-stage').addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    el.querySelector('.lb-stage').addEventListener('touchend', function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
      x0 = null;
    });
  }

  function onKey(e) {
    if (!el || !el.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') step(1);
    if (e.key === 'ArrowLeft') step(-1);
  }

  function step(dir) {
    cur = (cur + dir + list.length) % list.length;
    shot = 0;
    render();
  }

  function render() {
    const item = list[cur];
    if (!item) return;
    const shots = BH_ART.shots(item, 3);
    if (shot >= shots.length) shot = 0;

    const stage = el.querySelector('.lb-stage');
    const img = stage.querySelector('img');
    img.src = shots[shot].src;
    img.alt = item.name + ' · ' + shots[shot].caption;
    stage.querySelector('.lb-counter').textContent = (cur + 1) + ' / ' + list.length + '　·　' + shots[shot].caption;

    const metaHtml = item.meta ? Object.keys(item.meta).map(function (k) {
      return '<div class="meta-item"><b>' + k + '</b><span>' + item.meta[k] + '</span></div>';
    }).join('') : '';
    const tagHtml = (item.highlights || []).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('');

    el.querySelector('.lb-info').innerHTML =
      '<h3>' + item.name + '<small>' + (item.en || item.cat || '') + '</small></h3>' +
      '<div class="row"><span class="badge">' + (item.badge || item.cat) + '</span><span class="badge badge--ocean">' + item.cat + '</span></div>' +
      '<p class="lb-desc">' + (item.desc || item.summary || '') + '</p>' +
      (item.story ? '<div class="detail-block">' + item.story + '</div>' : '') +
      (metaHtml ? '<div class="meta-list">' + metaHtml + '</div>' : '') +
      (tagHtml ? '<div class="tags">' + tagHtml + '</div>' : '') +
      (item.tips ? '<p class="tip-line"><b>Tips</b><span>' + item.tips + '</span></p>' : '') +
      '<div class="lb-thumbs">' +
        shots.map(function (s, i) {
          return '<img src="' + s.src + '" class="' + (i === shot ? 'is-active' : '') + '" data-shot="' + i + '" alt="' + s.caption + '">';
        }).join('') +
      '</div>';

    Array.prototype.forEach.call(el.querySelectorAll('.lb-thumbs img'), function (t) {
      t.addEventListener('click', function () {
        shot = parseInt(t.getAttribute('data-shot'), 10);
        render();
      });
    });
  }

  function open(items, index) {
    if (!el) build();
    list = items.slice();
    cur = Math.max(0, Math.min(index | 0, list.length - 1));
    shot = 0;
    lastFocus = document.activeElement;
    el.classList.add('is-open');
    document.body.classList.add('is-locked');
    render();
    el.querySelector('.lb-close').focus();
  }

  function close() {
    if (!el) return;
    el.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  return { open: open, close: close };
})();
