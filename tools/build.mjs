/* ============================================================
 *  build.mjs —— 生成可直接上传公网的 dist/（零依赖）
 *
 *  做的事：
 *    1. 4 个 CSS 合并为 css/app.css（去注释、去空行）
 *    2. 9 个 JS  合并为 js/app.js（保持原加载顺序，段间加 ; 防 ASI）
 *    3. 8 个 HTML 的引用块替换为单条 CSS / 单条 JS
 *    4. 复制 assets/（跳过 README.txt），生成 .nojekyll
 *    5. 不复制 tools/、README.md、视频图文素材/
 *
 *  用法：node tools/build.mjs
 * ============================================================ */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const dist = path.join(root, 'dist');

const PAGES = [
  'index.html', 'scenery.html', 'culture.html', 'folk.html',
  'food.html', 'routes.html', 'video.html', 'about.html'
];
const CSS_FILES = ['base.css', 'layout.css', 'components.css', 'responsive.css'];
const JS_FILES = [
  'data.js', 'art.js', 'components.js', 'carousel.js',
  'lightbox.js', 'gallery.js', 'video.js', 'routes.js', 'main.js'
];

const kb = function (n) { return (n / 1024).toFixed(1) + ' KB'; };
const mb = function (n) { return (n / 1024 / 1024).toFixed(1) + ' MB'; };
const sizeOf = function (p) { return fs.statSync(p).size; };

/* ---------- 0. 清空输出目录 ---------- */
/* 清理上一轮产物：只删除可安全重建的目录，保留被环境保护的 assets 目录 */
for (const name of ['css', 'js']) {
  const p = path.join(dist, name);
  if (fs.existsSync(p)) {
    for (const f of fs.readdirSync(p)) fs.rmSync(path.join(p, f), { force: true });
  }
}
for (const p of PAGES) {
  const f = path.join(dist, p);
  if (fs.existsSync(f)) fs.rmSync(f, { force: true });
}
fs.mkdirSync(path.join(dist, 'css'), { recursive: true });
fs.mkdirSync(path.join(dist, 'js'), { recursive: true });

/* ---------- 1. 合并 CSS ---------- */
let cssRaw = '';
let cssSize = 0;
CSS_FILES.forEach(function (f) {
  const code = fs.readFileSync(path.join(root, 'css', f), 'utf8');
  cssSize += Buffer.byteLength(code, 'utf8');
  cssRaw += '/* ===== ' + f + ' ===== */\n' + code + '\n';
});
const cssOut = cssRaw
  .replace(/\/\*[\s\S]*?\*\//g, '')                       /* 去注释 */
  .split('\n')
  .map(function (l) { return l.replace(/\s+$/, ''); })     /* 去行尾空白 */
  .filter(function (l) { return l !== ''; })               /* 去空行 */
  .join('\n');
const cssPath = path.join(dist, 'css', 'app.css');
fs.writeFileSync(cssPath, cssOut);

/* ---------- 2. 合并 JS（顺序必须与 HTML 中原顺序一致） ---------- */
let jsSize = 0;
const jsOut = JS_FILES.map(function (f) {
  const code = fs.readFileSync(path.join(root, 'js', f), 'utf8');
  jsSize += Buffer.byteLength(code, 'utf8');
  /* 前缀 ; 防止上一段末尾没有分号时与下一段首字符粘连 */
  return '\n/* ===== ' + f + ' ===== */\n;' + code + '\n';
}).join('');
const jsPath = path.join(dist, 'js', 'app.js');
fs.writeFileSync(jsPath, jsOut);

/* ---------- 3. 处理页面引用 ---------- */
const cssRe = /^([ \t]*)<link rel="stylesheet" href="css\/(?:base|layout|components|responsive)\.css">[ \t]*\r?\n/gm;
const jsRe = /^([ \t]*)<script src="js\/(?:data|art|components|carousel|lightbox|gallery|video|routes|main)\.js"><\/script>[ \t]*\r?\n/gm;

let pagesWithIssue = [];
PAGES.forEach(function (p) {
  const src = path.join(root, p);
  if (!fs.existsSync(src)) { pagesWithIssue.push(p + '（不存在）'); return; }
  let html = fs.readFileSync(src, 'utf8');

  let cssDone = false;
  html = html.replace(cssRe, function (all, indent) {
    if (cssDone) return '';
    cssDone = true;
    return indent + '<link rel="stylesheet" href="css/app.css">\n';
  });

  let jsDone = false;
  html = html.replace(jsRe, function (all, indent) {
    if (jsDone) return '';
    jsDone = true;
    return indent + '<script src="js/app.js"></script>\n';
  });

  if (!cssDone || !jsDone) pagesWithIssue.push(p + '（引用块未匹配到）');
  fs.writeFileSync(path.join(dist, p), html);
});

/* ---------- 4. 复制素材（逐文件读写，避开 cpSync 在受监控环境下的覆盖异常） ---------- */
function walk(dir, list) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (d) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) walk(p, list); else list.push(p);
  });
  return list;
}
function copyAssets(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach(function (d) {
    const s = path.join(srcDir, d.name), t = path.join(destDir, d.name);
    if (d.isDirectory()) copyAssets(s, t);
    else if (!s.toLowerCase().endsWith('.txt')) fs.copyFileSync(s, t);
  });
}
copyAssets(path.join(root, 'assets'), path.join(dist, 'assets'));
/* 移除上一轮构建遗留、本轮已不再产出的素材文件 */
const allow = new Set(walk(path.join(root, 'assets'), []).map(function (f) { return f.replace(root, dist); }));
walk(path.join(dist, 'assets'), []).forEach(function (f) {
  if (allow.has(f) || f.toLowerCase().endsWith('.txt')) return;
  try { fs.unlinkSync(f); } catch (e) { /* 忽略单个文件删除失败 */ }
});

/* GitHub Pages：阻止 Jekyll 处理 */
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

/* ---------- 5. 报告 ---------- */
const all = walk(dist, []);
const total = all.reduce(function (s, f) { return s + sizeOf(f); }, 0);
const videos = all.filter(function (f) { return /\.(mp4|webm)$/i.test(f); });
const videoTotal = videos.reduce(function (s, f) { return s + sizeOf(f); }, 0);
const others = all.filter(function (f) { return !/\.(mp4|webm)$/i.test(f); });
const otherTotal = others.reduce(function (s, f) { return s + sizeOf(f); }, 0);

console.log('');
console.log('  构建完成 → dist/');
console.log('  ────────────────────────────────────────────');
console.log('  CSS  ' + CSS_FILES.length + ' 个 → 1 个   ' + kb(cssSize) + ' → ' + kb(sizeOf(cssPath)));
console.log('  JS   ' + JS_FILES.length + ' 个 → 1 个   ' + kb(jsSize) + ' → ' + kb(sizeOf(jsPath)));
console.log('  HTML ' + PAGES.length + ' 页，素材已复制（不含 README.txt）');
console.log('  ────────────────────────────────────────────');
console.log('  代码与图片等：' + others.length + ' 个文件，' + mb(otherTotal));
console.log('  视频        ：' + videos.length + ' 个文件，' + mb(videoTotal));
console.log('  合计        ：' + all.length + ' 个文件，' + mb(total));
if (pagesWithIssue.length) {
  console.log('  ⚠ 页面处理异常：' + pagesWithIssue.join(' / '));
}
const heavy = videos.filter(function (f) { return sizeOf(f) > 25 * 1024 * 1024; });
if (heavy.length) {
  console.log('');
  console.log('  ⚠ 以下视频超过 25 MB（Cloudflare Pages 单文件上限，其他平台也会拖慢首屏）：');
  heavy.forEach(function (f) {
    console.log('      ' + path.basename(f) + '  ' + mb(sizeOf(f)));
  });
  console.log('    压缩示例：ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 26 -preset slow -c:a aac -b:a 96k out.mp4');
}
console.log('');
