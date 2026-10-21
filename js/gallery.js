/* ============================================================
 *  gallery.js —— 卡片网格 + 分类筛选 + 关键词搜索 + 灯箱联动
 *  用法：<div id="spotGallery" data-gallery></div>
 *        BH_Gallery.mount('#spotGallery', BH_DATA.spots, { search:true });
 * ============================================================ */
window.BH_Gallery = (function () {

  function uniq(arr) {
    const out = [];
    arr.forEach(function (v) { if (out.indexOf(v) < 0) out.push(v); });
    return out;
  }

  function cardHtml(item) {
    const thumb = BH_ART.thumb(item);
    const real = BH_ART.photosOf(item).length > 0;
    const metaKey = item.meta ? Object.keys(item.meta)[0] : '';
    return '<article class="card" data-id="' + item.id + '" data-cat="' + item.cat + '" tabindex="0" role="button" ' +
      'aria-label="查看 ' + item.name + ' 详情">' +
      '<div class="card-media">' +
        '<img src="' + thumb + '" alt="' + item.name + '" loading="lazy">' +
        '<span class="media-badge' + (real ? ' media-badge--coral' : '') + '">' + (item.badge || item.cat) + (real ? ' · 实景' : '') + '</span>' +
        '<span class="media-zoom">' + BH_UI.ICON.zoom + '</span>' +
      '</div>' +
      '<div class="card-body">' +
        '<div class="card-title-row">' +
          '<h3 class="card-title">' + item.name + '<small>' + (item.en || '') + '</small></h3>' +
        '</div>' +
        '<p class="card-summary">' + item.summary + '</p>' +
        '<div class="tags">' + (item.highlights || []).slice(0, 3).map(function (t) { return '<span class="tag">' + t + '</span>'; }).join('') + '</div>' +
        '<div class="card-foot">' +
          '<span class="text-soft" style="font-size:13px">' + (metaKey ? metaKey + '：' + item.meta[metaKey] : item.cat) + '</span>' +
          '<span class="card-link">查看详情</span>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function mount(selector, items, options) {
    const host = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!host) return null;
    const opt = options || {};
    const cats = uniq(items.map(function (i) { return i.cat; }));

    host.innerHTML =
      '<div class="filter-bar">' +
        '<div class="filter-group" role="tablist" aria-label="分类筛选">' +
          '<button class="chip is-active" type="button" data-cat="__all__">全部<span class="chip-count">' + items.length + '</span></button>' +
          cats.map(function (c) {
            const n = items.filter(function (i) { return i.cat === c; }).length;
            return '<button class="chip" type="button" data-cat="' + c + '">' + c + '<span class="chip-count">' + n + '</span></button>';
          }).join('') +
        '</div>' +
        (opt.search
          ? '<label class="row" style="gap:8px"><span class="filter-note">搜索</span>' +
            '<input type="search" class="chip" data-search placeholder="输入关键词，如：海岛、糖水" style="border:1px solid var(--line);background:#fff;min-width:200px"></label>'
          : '<span class="filter-note" data-count></span>') +
      '</div>' +
      '<div class="gallery-grid">' + items.map(cardHtml).join('') + '</div>';

    const grid = host.querySelector('.gallery-grid');
    const chips = Array.prototype.slice.call(host.querySelectorAll('.chip[data-cat]'));
    const search = host.querySelector('[data-search]');
    const note = host.querySelector('[data-count]');
    let cat = '__all__', kw = '';

    function visible() {
      return items.filter(function (it) {
        const okCat = cat === '__all__' || it.cat === cat;
        const text = (it.name + it.en + it.summary + it.desc + (it.highlights || []).join('')).toLowerCase();
        const okKw = !kw || text.indexOf(kw.toLowerCase()) > -1;
        return okCat && okKw;
      });
    }

    function apply() {
      const vis = visible();
      Array.prototype.forEach.call(grid.children, function (card) {
        const id = card.getAttribute('data-id');
        const hit = vis.some(function (v) { return v.id === id; });
        card.classList.toggle('is-hidden', !hit);
      });
      let empty = grid.querySelector('.filter-empty');
      if (!vis.length) {
        if (!empty) {
          empty = document.createElement('div');
          empty.className = 'filter-empty';
          empty.textContent = '没有找到匹配的内容，换个分类或关键词试试～';
          grid.appendChild(empty);
        }
      } else if (empty) { empty.remove(); }
      if (note) note.textContent = '共 ' + vis.length + ' 项';
      /* 重新入场动画 */
      Array.prototype.forEach.call(grid.children, function (c, i) {
        c.style.animation = 'none';
        c.style.opacity = '';
        void c.offsetWidth;
        c.style.animation = 'fadeIn .45s var(--ease) ' + Math.min(i * 40, 320) + 'ms both';
      });
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        cat = chip.getAttribute('data-cat');
        apply();
      });
    });
    if (search) {
      search.addEventListener('input', function () { kw = search.value.trim(); apply(); });
    }

    function openCard(card) {
      const id = card.getAttribute('data-id');
      const vis = visible();
      const idx = vis.findIndex(function (v) { return v.id === id; });
      BH_Lightbox.open(vis, Math.max(idx, 0));
    }
    grid.addEventListener('click', function (e) {
      const card = e.target.closest('.card');
      if (card && !card.classList.contains('is-hidden')) openCard(card);
    });
    grid.addEventListener('keydown', function (e) {
      const card = e.target.closest && e.target.closest('.card');
      if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openCard(card); }
    });

    apply();

    /* 支持 #锚点 直达某个条目 */
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const idx = items.findIndex(function (v) { return v.id === id; });
      if (idx > -1) {
        const card = grid.querySelector('[data-id="' + id + '"]');
        if (card) {
          const vis = visible();
          BH_Lightbox.open(vis, vis.findIndex(function (v) { return v.id === id; }));
        }
      }
    }
    return { apply: apply };
  }

  return { mount: mount, cardHtml: cardHtml };
})();
