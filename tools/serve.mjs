/* 极简静态服务器（无需依赖）：node tools/serve.mjs [port]
 * 默认监听 0.0.0.0，同一 WiFi 下的手机可直接用局域网 IP 访问。 */
import http from 'node:http';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import url from 'node:url';

/* 第二个参数可指定站点根目录：node tools/serve.mjs 8090 dist */
const port = Number(process.argv[2] || 8080);
const root = process.argv[3]
  ? path.resolve(process.cwd(), process.argv[3])
  : path.resolve(import.meta.dirname, '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.txt': 'text/plain; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8'
};

http.createServer((req, res) => {
  const pathname = decodeURIComponent(url.parse(req.url).pathname);
  let file = path.join(root, pathname === '/' ? 'index.html' : pathname);
  if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return; }

  fs.stat(file, (err, st) => {
    if (err) { res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 Not Found'); return; }
    if (st.isDirectory()) file = path.join(file, 'index.html');
    const type = TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream';
    const range = req.headers.range;
    /* 支持 Range：视频可拖动进度条 */
    if (range) {
      const m = /bytes=(\d*)-(\d*)/.exec(range);
      const start = m && m[1] ? Number(m[1]) : 0;
      const end = m && m[2] ? Number(m[2]) : st.size - 1;
      res.writeHead(206, {
        'Content-Type': type,
        'Accept-Ranges': 'bytes',
        'Content-Range': `bytes ${start}-${end}/${st.size}`,
        'Content-Length': end - start + 1
      });
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Content-Length': st.size });
    fs.createReadStream(file).pipe(res);
  });
}).listen(port, '0.0.0.0', function () {
  const lan = [];
  Object.values(os.networkInterfaces()).forEach(function (list) {
    (list || []).forEach(function (ni) {
      if (ni.family === 'IPv4' && !ni.internal) lan.push(ni.address);
    });
  });
  console.log('');
  console.log('  服务已启动：' + root);
  console.log('  本机预览：http://localhost:' + port + '/');
  lan.forEach(function (ip) { console.log('  手机访问：http://' + ip + ':' + port + '/  （需与电脑同一 WiFi）'); });
  if (!lan.length) console.log('  未检测到局域网地址，请检查网络连接');
  console.log('');
});
