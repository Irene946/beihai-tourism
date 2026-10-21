/* ============================================================
 *  art.js  ——  矢量插画生成器
 *  说明：项目不依赖任何外部图片，景点/美食/视频配图均由本文件
 *        动态生成 SVG（渐变天空 + 海浪 + 主题剪影），返回 data URI。
 *  用法：BH_ART.uri({ motif:'beach', colors:['#3FB6E0','#0A5C7E'] })
 * ============================================================ */
window.BH_ART = (function () {
  const SEA = '#083A52';      // 剪影主色（深海军蓝）
  const SAND = '#F7F1E5';     // 米白（亮部）
  let seq = 0;

  /* ---------- 通用零件 ---------- */
  const sun = (x, y, r, op) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFF6E6" opacity="${op}"/>`;

  const clouds = () => `
    <g fill="#FFFFFF" opacity=".16">
      <ellipse cx="180" cy="150" rx="86" ry="30"/>
      <ellipse cx="240" cy="132" rx="58" ry="26"/>
      <ellipse cx="620" cy="222" rx="70" ry="24"/>
      <ellipse cx="676" cy="208" rx="46" ry="20"/>
    </g>`;

  const seaBottom = (y, op) => `
    <path d="M0 ${y} C 130 ${y - 34} 250 ${y + 26} 380 ${y + 6} C 520 ${y - 16} 660 ${y + 32} 800 ${y + 4} L800 560 L0 560 Z"
          fill="${SEA}" opacity="${op}"/>`;

  const waveLine = (y, op, w) => `
    <path d="M0 ${y} C 120 ${y - 18} 220 ${y + 18} 340 ${y} S 560 ${y - 20} 800 ${y + 8}"
          fill="none" stroke="#FFFFFF" stroke-width="${w || 5}" opacity="${op}" stroke-linecap="round"/>`;

  const birds = () => `
    <g fill="none" stroke="${SEA}" stroke-width="6" stroke-linecap="round" opacity=".45">
      <path d="M596 196 q16 -16 32 0 q16 -16 32 0"/>
      <path d="M660 148 q12 -12 24 0 q12 -12 24 0"/>
    </g>`;

  /* ---------- 主题剪影 ---------- */
  const MOTIF = {
    /* 沙滩 + 椰树 */
    beach: () => `
      ${seaBottom(392, .22)}
      <path d="M0 458 C 150 424 320 492 800 444 L800 560 L0 560 Z" fill="#E9D8B2" opacity=".9"/>
      <path d="M0 424 C 160 396 300 456 800 412 L800 468 C 300 512 140 456 0 480 Z" fill="#FFFFFF" opacity=".3"/>
      <g stroke-linecap="round" fill="none">
        <path d="M198 462 C 208 396 214 340 246 292" stroke="${SEA}" stroke-width="14" opacity=".62"/>
        <g stroke="${SEA}" stroke-width="12" opacity=".62">
          <path d="M246 296 C 208 284 176 296 152 322"/>
          <path d="M246 296 C 212 262 188 244 154 238"/>
          <path d="M246 296 C 238 256 250 228 272 210"/>
          <path d="M248 298 C 270 262 302 246 334 248"/>
          <path d="M248 298 C 284 292 316 306 336 330"/>
        </g>
      </g>
      <circle cx="264" cy="312" r="10" fill="${SEA}" opacity=".62"/>
      <circle cx="282" cy="322" r="9" fill="${SEA}" opacity=".62"/>
      <g opacity=".5" fill="${SEA}">
        <path d="M596 452 q30 22 60 0 l-8 20 h-44 z"/>
        <path d="M626 452 v-58"/>
      </g>
      ${waveLine(500, .35, 4)}`,

    /* 火山岛 */
    island: () => `
      ${seaBottom(372, .18)}
      <path d="M104 384 L252 232 L398 384 Z" fill="${SEA}" opacity=".55"/>
      <path d="M296 384 L410 264 L524 384 Z" fill="${SEA}" opacity=".42"/>
      <path d="M452 384 L556 292 L660 384 Z" fill="${SEA}" opacity=".34"/>
      <path d="M0 428 C 120 398 258 456 378 430 C 500 404 640 450 800 422 L800 560 L0 560 Z" fill="${SEA}" opacity=".34"/>
      <g fill="${SEA}" opacity=".72">
        <path d="M540 456 q48 30 98 0 l-12 26 h-74 z"/>
        <path d="M588 456 v-84" stroke="${SEA}" stroke-width="7" stroke-linecap="round"/>
        <path d="M594 374 l50 76 h-50 z"/>
      </g>
      ${waveLine(486, .3, 4)}`,

    /* 骑楼老街 */
    street: () => {
      let s = `<path d="M0 470 L800 470 L800 560 L0 560 Z" fill="${SEA}" opacity=".35"/>`;
      const b = [[36, 206, .58], [222, 172, .48], [408, 200, .55], [594, 158, .44]];
      b.forEach(([x, y, op]) => {
        s += `<g opacity="${op}">
            <rect x="${x}" y="${y}" width="172" height="${478 - y}" rx="6" fill="${SEA}"/>
            <rect x="${x - 4}" y="${y - 16}" width="180" height="16" rx="4" fill="${SEA}"/>
            <g fill="${SAND}" opacity=".62">
              <path d="M${x + 22} 316 v76 a26 26 0 0 1 52 0 v-76 z"/>
              <path d="M${x + 96} 316 v76 a26 26 0 0 1 52 0 v-76 z"/>
              <rect x="${x + 14}" y="272" width="144" height="10" rx="5"/>
            </g>
            <g fill="${SAND}" opacity=".4">
              <rect x="${x + 30}" y="${y + 30}" width="24" height="30" rx="4"/>
              <rect x="${x + 74}" y="${y + 30}" width="24" height="30" rx="4"/>
              <rect x="${x + 118}" y="${y + 30}" width="24" height="30" rx="4"/>
            </g>
          </g>`;
      });
      s += `<g fill="#FFD9A0" opacity=".75">
        <circle cx="96" cy="392" r="11"/><circle cx="286" cy="392" r="11"/>
        <circle cx="472" cy="392" r="11"/><circle cx="658" cy="392" r="11"/>
      </g>`;
      return s;
    },

    /* 红树林 */
    mangrove: () => {
      let s = `${seaBottom(400, .2)}`;
      const xs = [110, 230, 350, 470, 590, 690];
      xs.forEach((x, i) => {
        const r = 42 + (i % 3) * 12;
        s += `<g opacity=".5"><rect x="${x}" y="418" width="9" height="94" fill="${SEA}"/></g>
              <g opacity=".46" fill="${SEA}">
                <circle cx="${x + 5}" cy="${412 - r * .3}" r="${r}"/>
                <circle cx="${x + 5 - r * .6}" cy="${418 - r * .1}" r="${r * .62}"/>
                <circle cx="${x + 5 + r * .6}" cy="${418 - r * .1}" r="${r * .62}"/>
              </g>`;
      });
      s += `<path d="M0 452 C 160 430 300 470 800 442 L800 560 L0 560 Z" fill="${SEA}" opacity=".3"/>`;
      s += birds() + waveLine(508, .3, 4);
      return s;
    },

    /* 冠头岭 · 山海 */
    peak: () => `
      ${seaBottom(404, .2)}
      <path d="M40 424 L300 190 L560 424 Z" fill="${SEA}" opacity=".55"/>
      <path d="M420 424 L622 246 L800 424 Z" fill="${SEA}" opacity=".38"/>
      <path d="M0 438 C 140 412 280 462 420 438 C 560 414 680 456 800 430 L800 560 L0 560 Z" fill="${SEA}" opacity=".36"/>
      <g fill="${SEA}" opacity=".8">
        <rect x="286" y="252" width="26" height="96"/>
        <path d="M276 252 L322 252 L310 226 L288 226 Z"/>
        <rect x="278" y="348" width="42" height="12" rx="4"/>
      </g>
      <circle cx="299" cy="240" r="14" fill="#FFD9A0" opacity=".9"/>
      ${waveLine(496, .28, 4)}`,

    /* 博物馆 */
    museum: () => `
      ${seaBottom(452, .2)}
      <path d="M400 168 L648 298 L152 298 Z" fill="${SEA}" opacity=".62"/>
      <rect x="156" y="298" width="488" height="16" fill="${SEA}" opacity=".72"/>
      <rect x="196" y="314" width="408" height="152" fill="${SEA}" opacity=".46"/>
      <g fill="${SAND}" opacity=".5">
        <rect x="216" y="330" width="30" height="136" rx="4"/>
        <rect x="300" y="330" width="30" height="136" rx="4"/>
        <rect x="384" y="330" width="32" height="136" rx="4"/>
        <rect x="470" y="330" width="30" height="136" rx="4"/>
        <rect x="554" y="330" width="30" height="136" rx="4"/>
      </g>
      <g fill="${SEA}" opacity=".6">
        <rect x="176" y="466" width="488" height="14" rx="4"/>
        <rect x="156" y="480" width="528" height="14" rx="4"/>
      </g>
      <circle cx="400" cy="252" r="20" fill="${SAND}" opacity=".55"/>`,

    /* 美食 */
    food: () => `
      <g fill="none" stroke="${SAND}" stroke-width="9" stroke-linecap="round" opacity=".5">
        <path d="M356 226 q20 -28 0 -56"/>
        <path d="M420 210 q20 -28 0 -56"/>
        <path d="M478 232 q20 -28 0 -56"/>
      </g>
      <path d="M212 356 a190 152 0 0 0 380 0 z" fill="${SEA}" opacity=".55"/>
      <ellipse cx="402" cy="354" rx="190" ry="48" fill="${SAND}" opacity=".72"/>
      <ellipse cx="402" cy="352" rx="150" ry="34" fill="#F2703F" opacity=".55"/>
      <g stroke="${SAND}" stroke-width="10" stroke-linecap="round" opacity=".85">
        <path d="M604 244 L484 318"/><path d="M628 232 L494 322"/>
      </g>
      <g fill="${SAND}" opacity=".6">
        <circle cx="352" cy="342" r="12"/><circle cx="466" cy="346" r="10"/>
      </g>
      <path d="M0 470 C 160 448 320 492 800 456 L800 560 L0 560 Z" fill="${SEA}" opacity=".28"/>`,

    /* 南珠 */
    pearl: () => `
      <path d="M150 448 Q 400 138 650 448 Z" fill="${SEA}" opacity=".5"/>
      <g fill="none" stroke="${SAND}" stroke-width="5" opacity=".38">
        <path d="M400 448 Q 330 330 268 300"/>
        <path d="M400 448 Q 380 300 356 244"/>
        <path d="M400 448 Q 452 300 462 240"/>
        <path d="M400 448 Q 500 330 552 306"/>
      </g>
      <path d="M150 448 Q 400 402 650 448 Z" fill="${SEA}" opacity=".6"/>
      <circle cx="400" cy="336" r="92" fill="#FFF8EE" opacity=".95"/>
      <circle cx="400" cy="336" r="92" fill="none" stroke="${SEA}" stroke-width="3" opacity=".18"/>
      <circle cx="368" cy="306" r="24" fill="#FFFFFF"/>
      <path d="M348 380 a60 60 0 0 0 104 0" fill="none" stroke="${SEA}" stroke-width="6" opacity=".18"/>
      <path d="M0 486 C 180 466 340 506 800 476 L800 560 L0 560 Z" fill="${SEA}" opacity=".26"/>`,

    /* 海上丝路 · 帆船 */
    junk: () => `
      <path d="M40 264 C 220 214 320 344 520 284 S 700 244 780 294" fill="none"
            stroke="${SAND}" stroke-width="6" stroke-dasharray="14 12" opacity=".5"/>
      ${seaBottom(400, .18)}
      <path d="M0 432 C 140 404 280 456 420 432 C 560 408 680 450 800 424 L800 560 L0 560 Z" fill="${SEA}" opacity=".34"/>
      <g fill="${SEA}" opacity=".78">
        <path d="M232 424 q84 46 168 0 l-18 30 h-132 z"/>
        <path d="M316 424 v-150" stroke="${SEA}" stroke-width="8" stroke-linecap="round"/>
        <path d="M322 282 l86 138 h-86 z"/>
        <path d="M300 300 l-78 120 h78 z"/>
      </g>
      <path d="M556 430 q64 34 128 0 l-14 24 h-100 z" fill="${SEA}" opacity=".5"/>
      <path d="M620 430 v-96" stroke="${SEA}" stroke-width="6" stroke-linecap="round" opacity=".5"/>
      <path d="M625 336 l56 92 h-56 z" fill="${SEA}" opacity=".45"/>
      ${waveLine(500, .3, 4)}`,

    /* 疍家棚屋 */
    stilt: () => `
      ${seaBottom(392, .18)}
      <g fill="${SEA}">
        <g opacity=".62">
          <rect x="120" y="344" width="150" height="94"/>
          <path d="M108 344 L195 286 L282 344 Z"/>
          <rect x="132" y="438" width="10" height="76"/><rect x="172" y="438" width="10" height="76"/>
          <rect x="212" y="438" width="10" height="76"/><rect x="252" y="438" width="10" height="76"/>
        </g>
        <g opacity=".48">
          <rect x="330" y="372" width="130" height="82"/>
          <path d="M320 372 L395 320 L470 372 Z"/>
          <rect x="344" y="454" width="9" height="62"/><rect x="392" y="454" width="9" height="62"/>
          <rect x="440" y="454" width="9" height="62"/>
        </g>
        <g opacity=".4">
          <rect x="530" y="356" width="140" height="88"/>
          <path d="M520 356 L600 300 L680 356 Z"/>
          <rect x="546" y="444" width="9" height="70"/><rect x="596" y="444" width="9" height="70"/>
          <rect x="646" y="444" width="9" height="70"/>
        </g>
      </g>
      <g fill="#FFD9A0" opacity=".7">
        <rect x="158" y="378" width="26" height="26" rx="3"/>
        <rect x="368" y="400" width="24" height="24" rx="3"/>
        <rect x="572" y="386" width="26" height="26" rx="3"/>
      </g>
      <path d="M0 462 C 160 438 320 486 800 450 L800 560 L0 560 Z" fill="${SEA}" opacity=".38"/>
      <g fill="${SEA}" opacity=".6">
        <path d="M540 500 q54 30 108 0 l-14 24 h-80 z"/>
      </g>
      ${waveLine(528, .28, 4)}`,

    /* 贝雕扇贝 */
    shell: () => `
      <path d="M400 468 C 258 468 208 380 250 300 C 296 226 504 226 550 300 C 592 380 542 468 400 468 Z"
            fill="${SEA}" opacity=".5"/>
      <g fill="none" stroke="${SAND}" stroke-width="5" opacity=".42">
        <path d="M400 466 C 372 400 312 336 254 306"/>
        <path d="M400 466 C 390 392 366 320 344 258"/>
        <path d="M400 466 C 412 392 432 320 456 258"/>
        <path d="M400 466 C 428 400 490 336 546 306"/>
      </g>
      <path d="M400 468 C 330 452 288 420 268 392 C 320 388 372 424 400 468 Z" fill="${SAND}" opacity=".28"/>
      <circle cx="400" cy="404" r="52" fill="#FFF8EE" opacity=".85"/>
      <circle cx="382" cy="388" r="16" fill="#FFFFFF"/>
      <path d="M0 500 C 180 482 340 518 800 492 L800 560 L0 560 Z" fill="${SEA}" opacity=".24"/>`,

    /* 节庆灯笼 */
    lantern: () => {
      let s = `${seaBottom(452, .2)}`;
      [[220, 210, 1], [400, 176, 1.16], [580, 214, .96]].forEach(([x, y, k]) => {
        s += `<g>
          <path d="M${x} ${y - 26} v-52" stroke="${SEA}" stroke-width="5" opacity=".5"/>
          <rect x="${x - 16}" y="${y - 22}" width="${32 * k}" height="14" rx="3" fill="${SEA}" opacity=".6"/>
          <ellipse cx="${x}" cy="${y + 52 * k}" rx="${54 * k}" ry="${62 * k}" fill="#F2703F" opacity=".85"/>
          <ellipse cx="${x}" cy="${y + 52 * k}" rx="${30 * k}" ry="${62 * k}" fill="#FFD9A0" opacity=".55"/>
          <rect x="${x - 16}" y="${y + 110 * k}" width="${32 * k}" height="14" rx="3" fill="${SEA}" opacity=".6"/>
          <path d="M${x} ${y + 124 * k} v26" stroke="#F2703F" stroke-width="6" opacity=".8"/>
        </g>`;
      });
      s += `<g fill="#FFD9A0" opacity=".7">
        <circle cx="120" cy="330" r="7"/><circle cx="700" cy="300" r="8"/>
        <circle cx="300" cy="380" r="6"/><circle cx="520" cy="360" r="7"/>
      </g>
      <path d="M0 500 C 180 480 340 516 800 490 L800 560 L0 560 Z" fill="${SEA}" opacity=".26"/>`;
      return s;
    },

    /* 渔船（开渔） */
    boat: () => `
      ${seaBottom(376, .18)}
      <path d="M0 424 C 140 398 280 448 420 424 C 560 400 680 442 800 418 L800 560 L0 560 Z" fill="${SEA}" opacity=".34"/>
      <g fill="${SEA}" opacity=".76">
        <path d="M180 436 q74 40 148 0 l-16 28 h-116 z"/>
        <path d="M254 436 v-112" stroke="${SEA}" stroke-width="7" stroke-linecap="round"/>
        <path d="M260 326 l70 108 h-70 z"/>
        <path d="M240 342 l-58 92 h58 z"/>
      </g>
      <g fill="${SEA}" opacity=".5">
        <path d="M420 452 q62 34 124 0 l-14 24 h-96 z"/>
        <path d="M482 452 v-88" stroke="${SEA}" stroke-width="6" stroke-linecap="round"/>
        <path d="M487 366 l50 84 h-50 z"/>
      </g>
      <g fill="${SEA}" opacity=".38">
        <path d="M620 462 q54 28 108 0 l-12 20 h-84 z"/>
      </g>
      ${waveLine(508, .3, 4)}`
  };

  /* ---------- 主函数 ---------- */
  function create(opts) {
    const o = Object.assign({ motif: 'beach', colors: ['#3FB6E0', '#0A5C7E'], w: 800, h: 560 }, opts);
    const id = 'a' + (++seq);
    const m = MOTIF[o.motif] || MOTIF.beach;
    const svg =
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${o.w} ${o.h}" width="${o.w}" height="${o.h}" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="${id}g" x1="0" y1="0" x2="0.35" y2="1">
            <stop offset="0" stop-color="${o.colors[0]}"/>
            <stop offset="1" stop-color="${o.colors[1]}"/>
          </linearGradient>
          <radialGradient id="${id}s" cx="0.78" cy="0.18" r="0.5">
            <stop offset="0" stop-color="#FFE9C7" stop-opacity=".85"/>
            <stop offset="1" stop-color="#FFE9C7" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="${o.w}" height="${o.h}" fill="url(#${id}g)"/>
        <rect width="${o.w}" height="${o.h}" fill="url(#${id}s)"/>
        ${sun(636, 124, 62, '.3')}
        ${clouds()}
        ${m()}
      </svg>`;
    return svg.replace(/\s{2,}/g, ' ').replace(/\n\s*/g, '');
  }

  function uri(opts) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(create(opts));
  }

  /* 变体：同一条目的多张“组图”（用于灯箱）。若条目带真实照片则优先使用 */
  const VARIANT = ['beach', 'island', 'peak', 'junk', 'mangrove', 'street'];
  function photosOf(item) {
    if (item.photos && item.photos.length) return item.photos;
    if (item.photo) return [item.photo];
    return [];
  }
  function shots(item, n) {
    const count = n || 3;
    const photos = photosOf(item);
    const caps = item.photoCaptions || [];
    const list = [];
    for (let i = 0; i < count; i++) {
      if (i < photos.length) {
        list.push({
          src: photos[i],
          caption: caps[i] || item.name + ' · 实景 ' + (i + 1),
          real: true
        });
      } else {
        const motif = i === 0 ? item.motif : VARIANT[(i + item.name.length) % VARIANT.length];
        list.push({
          src: uri({ motif: motif, colors: item.colors }),
          caption: (item.highlights && item.highlights[i]) || item.name + ' · 风光 ' + (i + 1)
        });
      }
    }
    return list;
  }

  /* 缩略图：真实照片优先，其次生成插画 */
  function thumb(item) {
    const p = photosOf(item);
    return p.length ? p[0] : uri({ motif: item.motif, colors: item.colors });
  }

  return { create, uri, shots, thumb, photosOf };
})();
