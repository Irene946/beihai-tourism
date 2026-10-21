/* 校验 8 个页面：资源引用是否存在、是否包含挂载点 */
import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const pages = fs.readdirSync(root).filter((f) => f.endsWith('.html'));
let bad = 0;

for (const p of pages) {
  const html = fs.readFileSync(path.join(root, p), 'utf8');
  const refs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((u) => !/^(https?:|#|mailto:|data:)/.test(u));
  refs.forEach((u) => {
    const file = u.split('#')[0];
    if (!file) return;
    if (!fs.existsSync(path.join(root, file))) { bad++; console.error(`  缺失资源 ${p} -> ${u}`); }
  });
  ['site-header', 'site-footer'].forEach((id) => {
    if (!html.includes(`id="${id}"`)) { bad++; console.error(`  ${p} 缺少挂载点 #${id}`); }
  });
  console.log(`  ${p}: 引用 ${refs.length} 项，脚本 ${(html.match(/<script/g) || []).length} 个`);
}
console.log(bad ? `\n存在问题 ${bad} 项` : '\n页面引用全部正常 ✓');
process.exit(bad ? 1 : 0);
