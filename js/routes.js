/* ============================================================
 *  routes.js —— 精品路线：路线切换 + 行程时间轴
 *  用法：<div id="routeBoard" data-routes></div>
 * ============================================================ */
window.BH_Routes = (function () {

  /* 按 id 取条目（保持 routes 里声明的顺序） */
  function pickByIds(ids, pool) {
    return (ids || []).map(function (id) {
      return pool.filter(function (it) { return it.id === id; })[0];
    }).filter(Boolean);
  }

  /* 单张关联卡片 */
  function pickCard(item) {
    const metaKeys = item.meta ? Object.keys(item.meta).slice(0, 2) : [];
    const metaHtml = metaKeys.map(function (k) {
      return '<span class="pick-meta-item"><b>' + k + '</b>' + item.meta[k] + '</span>';
    }).join('');
    return '<button class="pick-card" type="button" data-pick-item="' + item.id + '">' +
      '<span class="pick-media">' +
        '<img src="' + BH_ART.thumb(item) + '" alt="' + item.name + '" loading="lazy">' +
        '<span class="pick-flag">' + (item.badge || item.cat) + '</span>' +
      '</span>' +
      '<span class="pick-body">' +
        '<span class="pick-name">' + item.name + '<em>' + (item.en || item.cat) + '</em></span>' +
        '<span class="pick-summary">' + (item.summary || '') + '</span>' +
        (metaHtml ? '<span class="pick-meta">' + metaHtml + '</span>' : '') +
        '<span class="pick-more">查看详情' + BH_UI.ICON.arrow + '</span>' +
      '</span>' +
    '</button>';
  }

  /* 路线内的「沿途景点 / 沿线美食」分段详情区（停留在本模块，不跳页） */
  function picksHtml(r) {
    const spots = pickByIds(r.spotIds, BH_DATA.spots);
    const foods = pickByIds(r.foodIds, BH_DATA.foods);
    return '<div class="route-picks">' +
      '<div class="pick-head">' +
        '<h4 class="pick-title">这条路线包含什么</h4>' +
        '<div class="pick-tabs" role="tablist" aria-label="路线内容">' +
          '<button class="pick-tab is-active" type="button" role="tab" aria-selected="true" data-pick-tab="spots">' +
            '沿途景点 <b>' + spots.length + '</b></button>' +
          '<button class="pick-tab" type="button" role="tab" aria-selected="false" data-pick-tab="foods">' +
            '沿线美食 <b>' + foods.length + '</b></button>' +
        '</div>' +
      '</div>' +
      '<div class="pick-pane is-active" data-pick-pane="spots">' +
        '<div class="pick-grid">' + spots.map(pickCard).join('') + '</div>' +
        '<p class="pick-foot">按路线顺序排列，点卡片可看大图与完整玩法 · ' +
          '<a href="scenery.html">浏览全部景点</a></p>' +
      '</div>' +
      '<div class="pick-pane" data-pick-pane="foods">' +
        '<div class="pick-grid">' + foods.map(pickCard).join('') + '</div>' +
        '<p class="pick-foot">都是这条线上顺路能吃到的 · ' +
          '<a href="food.html">浏览全部美食</a></p>' +
      '</div>' +
    '</div>';
  }

  function panelHtml(r) {
    return '<div class="route-panel" data-panel="' + r.id + '">' +
      '<div class="route-hero">' +
        '<div class="route-hero-media"><img src="' + BH_ART.uri({ motif: r.motif, colors: r.colors }) + '" alt="' + r.name + '"></div>' +
        '<div class="stack">' +
          '<div class="row"><span class="badge">' + r.badge + '</span>' +
            '<span class="badge badge--ocean">' + r.days + ' 天</span>' +
            '<span class="badge badge--sand">强度：' + r.level + '</span></div>' +
          '<h3 class="h3">' + r.name + '</h3>' +
          '<p class="lead">' + r.desc + '</p>' +
          '<p class="text-soft" style="font-size:14px">适合人群：' + r.suitable + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="timeline timeline--alt">' +
        r.stops.map(function (s) {
          return '<div class="tl-item">' +
            '<div class="tl-card">' +
              '<div class="tl-top"><span class="tl-time">' + s.time + '</span>' +
                '<span class="tag">' + s.tag + '</span></div>' +
              '<h4>' + s.title + '</h4>' +
              '<p>' + s.desc + '</p>' +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>' +
      picksHtml(r) +
    '</div>';
  }

  function mount(selector, routes) {
    const host = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!host) return;
    host.innerHTML =
      '<div class="route-tabs" role="tablist" aria-label="路线选择">' +
        routes.map(function (r, i) {
          return '<button class="route-tab' + (i === 0 ? ' is-active' : '') + '" type="button" role="tab" data-route="' + r.id + '">' +
            '<h4>' + r.name + '</h4>' +
            '<p>' + r.desc.slice(0, 42) + '…</p>' +
            '<div class="row"><span class="badge badge--ocean">' + r.days + ' 天</span>' +
              '<span class="badge badge--sand">' + r.level + '</span></div>' +
          '</button>';
        }).join('') +
      '</div>' +
      routes.map(panelHtml).join('');

    const tabs = Array.prototype.slice.call(host.querySelectorAll('.route-tab'));
    const panels = Array.prototype.slice.call(host.querySelectorAll('.route-panel'));

    function select(id, scroll) {
      tabs.forEach(function (t) { t.classList.toggle('is-active', t.getAttribute('data-route') === id); });
      panels.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-panel') === id); });
      if (location.hash.slice(1) !== id) {
        try { history.replaceState(null, '', '#' + id); } catch (err) { /* file:// 下可能受限，忽略 */ }
      }
      if (scroll) {
        const y = host.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { select(t.getAttribute('data-route'), false); });
    });

    /* 路线内「景点 / 美食」分段切换 */
    Array.prototype.forEach.call(host.querySelectorAll('.route-picks'), function (box) {
      const btns = Array.prototype.slice.call(box.querySelectorAll('.pick-tab'));
      const panes = Array.prototype.slice.call(box.querySelectorAll('.pick-pane'));
      btns.forEach(function (b) {
        b.addEventListener('click', function () {
          const key = b.getAttribute('data-pick-tab');
          btns.forEach(function (x) {
            const on = x === b;
            x.classList.toggle('is-active', on);
            x.setAttribute('aria-selected', String(on));
          });
          panes.forEach(function (p) { p.classList.toggle('is-active', p.getAttribute('data-pick-pane') === key); });
        });
      });
    });

    /* 卡片 -> 灯箱查看完整详情（不跳页） */
    host.addEventListener('click', function (e) {
      const card = e.target.closest('.pick-card');
      if (!card) return;
      const id = card.getAttribute('data-pick-item');
      const item = BH_DATA.spots.concat(BH_DATA.foods).filter(function (it) { return it.id === id; })[0];
      if (item && window.BH_Lightbox) BH_Lightbox.open([item], 0);
    });

    const hash = location.hash.replace('#', '');
    const hit = routes.some(function (r) { return r.id === hash; });
    select(hit ? hash : routes[0].id, false);
  }

  return { mount: mount, panelHtml: panelHtml };
})();
