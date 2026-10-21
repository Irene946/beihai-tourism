/* 轻量自检：校验数据完整性与插画生成器输出（无需浏览器） */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(import.meta.dirname, '..');
const sandbox = { window: {}, console, encodeURIComponent, Math, Object, Array, JSON };
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
for (const f of ['js/data.js', 'js/art.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), sandbox, { filename: f });
}
const D = sandbox.window.BH_DATA;
const ART = sandbox.window.BH_ART;

let bad = 0;
const fail = (m) => { bad++; console.error('  ✗ ' + m); };

/* 1. 数据集与 id 唯一性 */
const sets = { spots: D.spots, foods: D.foods, cultures: D.cultures, folkes: D.folkes, routes: D.routes, videos: D.videos };
for (const [k, arr] of Object.entries(sets)) {
  const ids = arr.map(i => i.id);
  if (new Set(ids).size !== ids.length) fail(`${k} 存在重复 id`);
  console.log(`  ${k}: ${arr.length} 条`);
}

/* 2. motif 是否都能生成 */
const motifs = ['beach', 'island', 'street', 'mangrove', 'peak', 'museum', 'food', 'pearl', 'junk', 'stilt', 'shell', 'lantern', 'boat'];
for (const m of motifs) {
  const svg = ART.create({ motif: m, colors: ['#3FB6E0', '#0A5C7E'] });
  if (!svg.startsWith('<svg') || !svg.includes('</svg>')) fail(`motif ${m} 输出异常`);
  if (svg.includes('undefined')) fail(`motif ${m} 含 undefined`);
  if (svg.length < 400) fail(`motif ${m} 输出过短 (${svg.length})`);
}

/* 3. 每个条目都能生成 data URI 与组图 */
for (const [k, arr] of Object.entries(sets)) {
  for (const it of arr) {
    if (!it.motif || !Array.isArray(it.colors)) fail(`${k}.${it.id} 缺少 motif/colors`);
    const uri = ART.uri({ motif: it.motif, colors: it.colors });
    if (!uri.startsWith('data:image/svg+xml')) fail(`${k}.${it.id} URI 异常`);
    if (k !== 'videos') {
      const shots = ART.shots(it, 3);
      if (shots.length !== 3 || shots.some(s => !s.src)) fail(`${k}.${it.id} 组图异常`);
    }
  }
}

/* 4. 真实素材引用是否落盘 */
const media = [];
D.videos.forEach(v => media.push({ kind: 'video', ref: v.id, file: v.src, optional: v.poster && false }));
D.spots.concat(D.foods, D.cultures, D.folkes, D.hero).forEach(it => {
  (it.photos || (it.photo ? [it.photo] : [])).forEach(f => media.push({ kind: 'image', ref: it.id || 'hero', file: f }));
});
D.videos.forEach(v => v.poster && media.push({ kind: 'image', ref: v.id, file: v.poster }));
const checked = new Set();
media.forEach(m => {
  if (!m.file || m.file.startsWith('data:') || /^https?:/.test(m.file)) return;
  if (checked.has(m.file)) return; checked.add(m.file);
  if (!fs.existsSync(path.join(root, m.file))) fail(`素材缺失: ${m.file} (${m.kind} ${m.ref})`);
});

/* 4b. 路线关联的景点 / 美食 id 必须存在（路线页就地展示依赖它） */
D.routes.forEach(function (r) {
  (r.spotIds || []).forEach(function (id) {
    if (!D.spots.some(function (s) { return s.id === id; })) fail(`路线 ${r.id} 关联景点不存在: ${id}`);
  });
  (r.foodIds || []).forEach(function (id) {
    if (!D.foods.some(function (f) { return f.id === id; })) fail(`路线 ${r.id} 关联美食不存在: ${id}`);
  });
  if (!(r.spotIds || []).length && !(r.foodIds || []).length) fail(`路线 ${r.id} 未关联任何景点/美食`);
});

/* 5. 分类覆盖与导航目标文件存在 */
for (const n of D.nav) {
  if (!fs.existsSync(path.join(root, n.href))) fail(`导航目标缺失: ${n.href}`);
}
const needSpots = ['yintan', 'weizhou', 'laojie', 'qiaogang', 'hongshulin', 'guantouling', 'hepu'];
needSpots.forEach(id => { if (!D.spots.some(s => s.id === id)) fail(`景点缺失: ${id}`); });
['haixian', 'xiabing', 'tangshui', 'shachong', 'nanzhu'].forEach(id => {
  if (!D.foods.some(s => s.id === id)) fail(`美食缺失: ${id}`);
});
const text = JSON.stringify(D);
['疍家', '南珠', '海上丝绸之路'].forEach(kw => { if (!text.includes(kw)) fail(`文化关键词缺失: ${kw}`); });

console.log(bad ? `\n自检失败，共 ${bad} 项问题` : '\n全部自检通过 ✓');
process.exit(bad ? 1 : 0);
