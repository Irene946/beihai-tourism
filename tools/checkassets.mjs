/* ============================================================
 *  checkassets.mjs —— 资源引用全量体检（零依赖）
 *
 *  检查内容：
 *    1. 以 / 开头的绝对路径（部署到子目录 user.github.io/repo/ 会 404）
 *    2. 引用的文件是否真实存在
 *    3. 文件名大小写是否与磁盘一致（Linux 服务器大小写敏感，Windows 不敏感）
 *
 *  用法：
 *    node tools/checkassets.mjs          # 检查源码目录
 *    node tools/checkassets.mjs dist     # 检查构建产物
 * ============================================================ */
import fs from 'node:fs';
import path from 'node:path';

const cwd = process.cwd();
const target = process.argv[2];
const base = target ? path.resolve(cwd, target) : path.resolve(cwd);

const problems = [];
const checked = [];

const EXTERNAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#|mailto:|tel:|data:)/i;
const SKIP_EXT = /\.(html|htm|php)$/i;

function push(file, line, kind, ref, extra) {
  problems.push({
    file: path.relative(base, file),
    line: line,
    kind: kind,
    ref: ref,
    extra: extra || ''
  });
}

/* 大小写敏感的逐级查找 */
function resolveExact(baseDir, rel) {
  const parts = rel.split(/[\\/]/).filter(function (p) { return p !== ''; });
  let cur = baseDir;
  for (const part of parts) {
    if (part === '.') continue;
    if (part === '..') { cur = path.dirname(cur); continue; }
    let names;
    try { names = fs.readdirSync(cur); } catch (e) { return { ok: false, reason: 'missing-dir', dir: cur }; }
    if (names.indexOf(part) === -1) {
      const hit = names.filter(function (n) { return n.toLowerCase() === part.toLowerCase(); });
      if (hit.length) return { ok: false, reason: 'case', actual: hit[0], dir: cur };
      return { ok: false, reason: 'missing', dir: cur };
    }
    cur = path.join(cur, part);
  }
  return { ok: true, full: cur };
}

/* 从一行里抽出引用 */
function extractRefs(text) {
  const refs = [];
  const patterns = [
    /(?:src|href)\s*=\s*"([^"]+)"/g,
    /(?:src|href)\s*=\s*'([^']+)'/g,
    /url\(\s*['"]?([^'")]+)['"]?\s*\)/g,
    /'(assets\/[^']+)'/g,
    /"(assets\/[^"]+)"/g
  ];
  patterns.forEach(function (re) {
    let m;
    while ((m = re.exec(text)) !== null) refs.push(m[1]);
  });
  return refs;
}

function scanFile(file, baseDir) {
  let text;
  try { text = fs.readFileSync(file, 'utf8'); } catch (e) { return; }
  const lines = text.split(/\r?\n/);
  lines.forEach(function (line, i) {
    extractRefs(line).forEach(function (ref) {
      const clean = ref.split('?')[0].split('#')[0].trim();
      if (!clean) return;
      if (EXTERNAL.test(clean)) return;          /* 外链 / data URI / 锚点 */
      if (/^\{\{|\$\{|<%/.test(clean)) return;   /* 模板占位符 */
      if (clean.indexOf('+') !== -1) return;     /* 字符串拼接片段，不是真实路径 */
      if (/\bxxx\b|your[-_]/i.test(clean)) return;  /* 文档里的示例路径 */

      /* 1) 绝对路径检查 */
      if (clean.charAt(0) === '/') {
        push(file, i + 1, '绝对路径', clean, '部署到子目录会 404，改为相对路径');
        return;
      }
      if (SKIP_EXT.test(clean)) {
        /* 页面间跳转，只检查目标文件存在 */
        const r = resolveExact(baseDir, clean);
        checked.push(clean);
        if (!r.ok) push(file, i + 1, r.reason === 'case' ? '大小写不一致' : '文件不存在', clean,
          r.reason === 'case' ? ('磁盘上是 ' + r.actual) : '');
        return;
      }
      if (/^(?:javascript|data):/i.test(clean)) return;

      checked.push(clean);
      const r = resolveExact(baseDir, clean);
      if (!r.ok) {
        if (r.reason === 'missing') push(file, i + 1, '文件不存在', clean, '找不到该资源');
        else if (r.reason === 'case') push(file, i + 1, '大小写不一致', clean, '磁盘上是 ' + r.actual);
        else push(file, i + 1, '文件不存在', clean, '目录不存在：' + r.dir);
      }
    });
  });
}

function walk(dir, out) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach(function (d) {
    if (d.name === '.git' || d.name === 'node_modules') return;
    const p = path.join(dir, d.name);
    if (d.isDirectory()) walk(p, out); else out.push(p);
  });
  return out;
}

const files = walk(base, []).filter(function (f) {
  const rel = path.relative(base, f);
  if (!/\.(html|css|js|mjs)$/i.test(f)) return false;
  return !/^(?:tools|dist)[\\/]/.test(rel);   /* 开发脚本与构建产物不参与源码检查 */
});

/* 基准目录规则：
   - HTML：该文件所在目录
   - CSS ：该文件所在目录（url(../assets/...) 相对 css/）
   - JS  ：站点根（脚本里的路径会被插入页面，页面在根目录） */
files.forEach(function (f) {
  const ext = path.extname(f).toLowerCase();
  const baseDir = (ext === '.js' || ext === '.mjs') ? base : path.dirname(f);
  scanFile(f, baseDir);
});

/* 汇总 */
const uniqChecked = Array.from(new Set(checked));
console.log('');
console.log('  检查目标：' + base);
console.log('  扫描文件：' + files.length + ' 个，引用 ' + uniqChecked.length + ' 条');

if (!problems.length) {
  console.log('  ✓ 全部引用均为相对路径，文件存在且大小写一致');
} else {
  console.log('  ✗ 发现 ' + problems.length + ' 个问题：');
  const groups = {};
  problems.forEach(function (p) {
    const k = p.kind;
    (groups[k] = groups[k] || []).push(p);
  });
  Object.keys(groups).forEach(function (k) {
    console.log('');
    console.log('  【' + k + '】 ' + groups[k].length + ' 处');
    groups[k].slice(0, 40).forEach(function (p) {
      console.log('    ' + p.file + ':' + p.line + '  ' + p.ref + (p.extra ? '  → ' + p.extra : ''));
    });
    if (groups[k].length > 40) console.log('    … 还有 ' + (groups[k].length - 40) + ' 处');
  });
}
console.log('');
process.exit(problems.length ? 1 : 0);
