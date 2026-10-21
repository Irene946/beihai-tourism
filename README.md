# 我的家乡 —— 广西北海 · 文旅主题网站

一个零依赖、零构建的静态文旅网站：海洋蓝 + 沙滩米白 + 珊瑚橙三色体系，包含 8 个页面与全部常用交互组件。

## 一、项目结构

```
beihai-tourism/
├─ index.html                 # 首页：轮播图 / 城市简介 / 数据 / 景点精选 / 文化 / 视频 / CTA
├─ scenery.html               # 滨海风光：7 景点卡片 + 筛选 + 灯箱
├─ culture.html               # 历史人文：5 条目 + 历史时间轴
├─ folk.html                  # 民俗非遗：6 条目 + 体验建议
├─ food.html                  # 美食特产：6 条目 + 觅食地图
├─ routes.html                # 精品路线：路线切换 + 行程时间轴
├─ video.html                 # 视频展示：视频网格 + 弹窗播放
├─ about.html                 # 关于北海：城市档案 / 季节指数 / FAQ
├─ css/
│  ├─ base.css                # 设计令牌（配色变量）/ 重置 / 排版 / 按钮 / 工具类
│  ├─ layout.css              # 页头导航 / 英雄轮播 / 页脚 / 通用区块
│  ├─ components.css          # 筛选 / 卡片 / 灯箱 / 视频弹窗 / 时间轴 / 折叠面板
│  └─ responsive.css          # 1200 / 1000 / 900 / 640 断点与移动端抽屉
├─ js/
│  ├─ data.js                 # 数据层：景点/文化/非遗/美食/路线/视频/FAQ
│  ├─ art.js                  # SVG 插画生成器（不依赖任何外部图片）
│  ├─ components.js           # 页头/页脚渲染、导航抽屉、滚动入场、数字滚动
│  ├─ carousel.js             # 轮播图
│  ├─ gallery.js              # 卡片网格 + 分类筛选 + 搜索 + 灯箱联动
│  ├─ lightbox.js             # 图片灯箱
│  ├─ video.js                # 视频网格 + 视频弹窗
│  ├─ routes.js               # 路线切换 + 时间轴
│  └─ main.js                 # 入口：按 data-* 钩子装配各页面
├─ assets/
│  ├─ favicon.svg
│  ├─ img/                    # 24 张实拍图（银滩 / 涠洲岛 / 老街 / 红树林 / 美食 / 人文）
│  └─ video/                  # 6 段真实视频，共约 96 MB（均 < 25 MB）
├─ tools/                     # 仅开发用，不参与部署
│  ├─ serve.mjs               # 零依赖静态服务器（支持 Range / 可指定根目录）
│  ├─ build.mjs               # 生成部署包 dist/（合并 CSS+JS）
│  ├─ selftest.mjs            # 数据与插画自检
│  └─ checkhtml.mjs           # 页面资源引用自检
├─ dist/                      # 构建产物：直接上传这个目录（可由 build.mjs 重建）
└─ README.md
```

## 二、本地运行

方式一：直接双击 `index.html`（纯静态、无构建，`file://` 协议下同样可用）。

方式二：起一个本地服务（推荐：视频可拖动进度条、素材加载更完整）。
项目自带零依赖的 Node 静态服务器（支持 Range 请求）：

```bash
cd beihai-tourism
node tools/serve.mjs 8080
# 然后访问 http://localhost:8080/
```

若有 Python 也可用：`python -m http.server 8080`。

## 二·补、在手机端查看（同一 WiFi）

1. 电脑与手机连到**同一个 WiFi**（或用手机开热点给电脑连）。
2. 在项目目录启动服务，它会**监听 0.0.0.0** 并在终端打印局域网地址：

   ```bash
   node tools/serve.mjs 8080
   #   手机访问：http://192.168.x.x:8080/
   ```

3. 手机浏览器输入终端里打印的那个地址即可（**不要加 `localhost`**，那是电脑自己）。

查不到地址时手动取 IP：

- Windows：`ipconfig` → 找「无线局域网适配器 WLAN」的 **IPv4 地址**
- macOS：`ipconfig getifaddr en0`
- Linux：`hostname -I`

连不上时的排查清单：

| 现象 | 处理 |
| --- | --- |
| 打不开 / 超时 | Windows 防火墙放行 Node（首次运行会弹窗，选「允许访问」）；或临时换端口 `node tools/serve.mjs 8000` |
| 地址打不开但电脑能开 | 两者不在同一网络（检查是否一个走 WiFi、一个走网线/虚拟机网卡） |
| 页面能开、视频卡 | 6 个视频共约 96 MB，走局域网需一点时间；手机上先看其他页面 |
| 想给外地同学看 | 用内网穿透（`cpolar http 8080` / `ngrok http 8080`）或部署到 GitHub Pages、Vercel、Netlify（纯静态，直接上传整个目录） |

电脑端想模拟手机效果：Chrome 打开页面后按 `F12` → `Ctrl+Shift+M` 切换设备工具栏。

> 注：视频卡片封面已直接使用 `data.js` 中配置的真实照片（`poster` 字段），
> 不再依赖 `file://` 下可能失效的 canvas 抽帧，因此也不会在后台整段下载视频。

## 三、配色规范（CSS 变量，见 css/base.css）

| 角色 | 变量 | 色值 |
| --- | --- | --- |
| 海洋蓝（主色） | `--ocean-700` | `#0A5C7E` |
| 海洋蓝（浅） | `--ocean-400` | `#3FB6E0` |
| 沙滩米白（背景） | `--sand-100` | `#F7F1E5` |
| 珊瑚橙（强调） | `--coral-500` | `#F2703F` |
| 文字墨蓝 | `--ink-900` | `#0F2A38` |

## 四、交互组件清单

| 组件 | 实现文件 | 说明 |
| --- | --- | --- |
| 导航栏 | `components.js` | 桌面端固定顶部导航（8 项 + 规划行程，滚动变实、当前页高亮） |
| 移动端底部导航条 | `components.js` + `layout.css` | ≤900px 显示：8 个页面常驻页签（图标 + 文字），横向可滚、当前页自动居中高亮，`env(safe-area-inset-bottom)` 适配刘海屏；桌面端完全不受影响（`--tabbar-h: 0`） |
| 轮播图 | `carousel.js` | 自动播放、悬停暂停、箭头、指示点、键盘、触摸滑动 |
| 卡片筛选 | `gallery.js` | 分类 chip + 关键词搜索 + 空状态 + 结果计数 |
| 图片灯箱 | `lightbox.js` | 组图切换、条目间上/下一、缩略图、Esc/方向键、滑动切换 |
| 视频弹窗 | `video.js` | 点击卡片弹窗播放，加载失败给出友好提示 |
| 悬停预览封面 | `video.js` + `components.css` | 封面取自视频真实帧（canvas 抽帧 + sessionStorage 缓存），鼠标悬停静音循环预览 12s 片段并显示进度条，移动端自动降级为点击播放 |
| 路线时间轴 | `routes.js` | 路线切换 + 桌面端左右交错时间轴（移动端单列） |
| 路线内景点/美食 | `routes.js` + `data.js` | 每条路线底部就地展示「沿途景点 / 沿线美食」分段详情（数量角标 + 缩略图卡片），点卡片用灯箱看完整详情，**不跳转页面**；由 `routes[].spotIds / foodIds` 关联 |
| 折叠面板 | `main.js` | FAQ 手风琴 |
| 滚动入场 / 数字滚动 | `components.js` | IntersectionObserver 驱动 |

## 五、内容覆盖

- **景点（7）**：银滩、涠洲岛、北海老街、侨港风情街、金海湾红树林、冠头岭、合浦汉代文化博物馆
- **美食特产（6）**：海鲜、虾饼、糖水、沙虫、南珠、沙蟹汁
- **文化（3 条主线）**：疍家文化、南珠文化、海上丝绸之路（另含汉墓博物馆、开埠史、涠洲教堂等）
- **路线（4）**：经典三日 · 亲子赶海 · 文化寻踪 · 一日夜游

## 六、已接入的本地素材

位于 `assets/video/` 与 `assets/img/`，由 `js/data.js` 引用：

| 真实文件 | 引用位置 |
| --- | --- |
| `assets/video/yintan.mp4` | 视频页 v1《银滩十二时辰》 |
| `assets/video/weizhou.mp4` | 视频页 v2《涠洲岛环岛记》 |
| `assets/video/laojie.mp4` | 视频页 v3《老街骑楼里的百年》 |
| `assets/video/danjia.mp4` | 视频页 v4《疍家人的一天》 |
| `assets/video/nanzhu.mp4` | 视频页 v5《南珠：蚌病成珠》 |
| `assets/video/mangrove.mp4` | 视频页 v6《红树林赶海指南》 |
| `assets/img/yintan-sunrise.jpg` | v1 封面 + 关于北海首图 + 银滩卡片/灯箱 |
| `assets/img/yintan-sunset.jpg`  | 首页轮播第 1 屏 + 城市简介大图 + 银滩卡片/灯箱 |
| `assets/img/beach-shell.jpg` | 银滩（贝壳）卡片/灯箱 + 贝雕非遗 |
| `assets/img/weizhou-1~3.jpg` | 涠洲岛卡片/灯箱 + 首页轮播第 2 屏 + v2 封面 |
| `assets/img/laojie.jpg` | 老街卡片/灯箱 + 首页轮播第 3 屏 + v3 封面 |
| `assets/img/qiaogang-1~2.jpg` | 侨港风情街卡片/灯箱 + 首页轮播第 4 屏 + 归侨文化 |
| `assets/img/mangrove.jpg` | 红树林卡片/灯箱 + v6 封面 |
| `assets/img/guantouling.jpg` | 冠头岭卡片/灯箱 + 视频页大图 |
| `assets/img/hepu-museum-1.jpg` | 合浦汉墓卡片/灯箱 + 人文页大图 |
| `assets/img/hepu-museum-2.jpg` | 汉墓博物馆文化条目 |
| `assets/img/maritime-silkroad.jpg` | 海上丝绸之路文化条目 |
| `assets/img/bailong-pearl-city.jpg` | 南珠文化 + v5 封面 |
| `assets/img/beihai-poster-1/2.jpg` | 老街组图 + 开埠历史条目 |
| `assets/img/kaihai-festival.jpg` | 祭海开渔节 + v4 封面 + 民俗页大图 |
| `assets/img/seafood.jpg` | 海鲜卡片/灯箱 + 首页美食大图 |
| `assets/img/xiabing-1~2.jpg` | 虾饼卡片/灯箱 + 美食页大图 |
| `assets/img/tangshui.jpg` | 糖水卡片/灯箱 |
| `assets/img/shachong.jpg` | 沙虫卡片/灯箱 |
| `assets/img/shaxiezhi.jpg` | 沙蟹汁卡片/灯箱 |

真实图 / 视频在数据层走 `photo` / `photos` / `poster` 字段；`js/art.js` 的
`thumb()` 与 `shots()` 会优先返回真实文件，再回退到生成的 SVG 插画。

> **图片处理**：`assets/img/` 下的 22 张实拍图原图右下角带有「小红书」水印，
> 已统一**裁掉底部含水印的条带**（水印为固定像素尺寸的叠加层，裁切后不影响画面主体），
> 并压缩为长边 ≤ 1600px、JPEG 质量 0.84。处理后的图片以拼音/英文命名。

> 卡片缩略与首页轮播在有真实素材的位置会自动替换，没有的位置仍由
>  `js/art.js` 的 SVG 插画占位（保证项目零外部图片依赖即可运行）。

## 七、替换素材

1. **图片**：给某条景点增加实拍图，只需在 `data.js` 的条目中加：
   ```js
   photos: ['assets/img/xxx.jpg', 'assets/img/yyy.jpg'],
   photoCaptions: ['日出', '日落']
   ```
   卡片缩略、灯箱组图、轮播图都会自动使用。
2. **视频**：把文件放进 `assets/video/`，修改 `js/data.js` 中 `videos[].src`
   与（可选）`poster` 字段；卡片时长由 `<video>` 元数据自动读取。

## 八、自检脚本

```bash
node tools/selftest.mjs    # 数据完整性 + 插画生成 + 路线关联
node tools/checkhtml.mjs   # 页面资源引用与挂载点
node tools/checkassets.mjs # 资源引用体检：绝对路径 / 文件缺失 / 大小写
```

## 九、部署到公网

源码保持「多文件、可维护」，部署时用构建脚本产出一个精简目录：

```bash
node tools/build.mjs          # 生成 dist/
node tools/serve.mjs 8090 dist   # 本地预览构建产物
```

`dist/` 里只有跑站点真正需要的东西：

| 内容 | 说明 |
| --- | --- |
| 8 个 `.html` | 引用已改写为单条 `css/app.css` + `js/app.js` |
| `css/app.css` | 4 个样式表合并（去注释/空行），47 KB → 42 KB |
| `js/app.js` | 9 个脚本按原顺序合并，102 KB |
| `assets/` | favicon、img、6 段视频（不含 `README.txt`） |
| `.nojekyll` | 供 GitHub Pages 跳过 Jekyll 处理 |

**不进部署包**（源码里保留，便于维护）：`tools/`、`README.md`、`assets/video/README.txt`、`视频图文素材/`。

直接拖拽上传 `dist/` 即可：

- **Netlify**：app.netlify.com/drop → 拖 `dist`
- **Cloudflare Pages**：Create project → Direct upload → 选 `dist`
- **Vercel**：`vercel dist --prod`（或网页端导入后设置 Output Directory = `dist`）
- **GitHub Pages**：把 `dist/` 内容推到 `gh-pages` 分支，Settings → Pages 选择该分支根目录

✅ **视频体积已处理**：6 段视频原共 144.6 MB，已统一重编码为
720p / H.264 High@4.0 / CRF 25~30 + `+faststart`，现共 **95.7 MB**（约 −34%），
且**单文件均 < 25 MB**（最大 `mangrove.mp4` 21.4 MB），可正常部署到 Cloudflare Pages。

如需进一步压缩，可自行用 ffmpeg（示例仍在下方）：

```bash
ffmpeg -i in.mp4 -vf scale=-2:720 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k out.mp4
```

压缩后替换同名文件，重新执行 `node tools/build.mjs` 即可。

> **视频无法播放怎么办？**
> 1. 优先用 **Chrome / Edge / Firefox** 打开本页。IDE 内置预览、Electron 套壳浏览器
>    可能未内置 **H.264 解码器**，会表现为黑屏/无法播放，这与文件本身无关。
> 2. 播放失败时弹窗会给出针对性提示（区分「环境不支持 H.264」与「文件路径错误/缺失」）。
> 3. 若在 `data.js` 的 `videos[]` 中额外提供 `webm` 字段，`video.js` 会在不支持 H.264 的
>    环境下自动改用该 WebM 备源。

### 部署前：资源引用体检

```bash
node tools/checkassets.mjs          # 检查源码
node tools/checkassets.mjs dist     # 检查构建产物
```

会检查三件事：① 是否有以 `/` 开头的绝对路径（部署到 `user.github.io/repo/` 子目录必然 404）；
② 引用的文件是否真实存在；③ 文件名大小写是否与磁盘一致（Linux 服务器大小写敏感，Windows 不敏感）。
有问题时按 `文件:行号` 列出，全部通过则退出码 0。

### 图片 / 视频部署后 404 的排查顺序

本项目引用**全部为相对路径**、文件名**全部小写**，路径本身不会出错。线上仍 404 时按序排查：

| # | 检查项 | 方法 |
| --- | --- | --- |
| 1 | 仓库里有没有这些文件 | `git ls-files assets` |
| 2 | **是否用了 Git LFS**（Pages 不支持 LFS，线上拿到的是指针文件 → 图片视频全坏） | `git lfs ls-files` 有输出即中招：`git lfs untrack "assets/**"` → `git rm --cached -r assets` → 重新 `git add assets` |
| 3 | `.gitignore` 是否忽略素材 | 检查是否含 `*.mp4`、`assets/`、`*.jpg` |
| 4 | Pages 部署目录 | Settings → Pages → 目录必须是 `/ (root)`，不是 `/docs` |
| 5 | 单文件 > 100 MB（GitHub 硬限制） | 当前最大 21.4 MB，安全 |
| 6 | 带宽软限制 | Pages 每月约 100 GB，视频被反复整段播放易触发 429 |
| 7 | 看错误码 | F12 → Network：404 = 没传上去；403/429 = LFS 指针或带宽超限 |

### 不想把大视频放进仓库：三种替代方案

**方案 A：外链播放器（推荐，站点里零视频文件）**

`data.js` 的 `videos[]` 支持 `embed` 字段，填了弹窗就用 iframe 播放：

```js
{
  id: 'v1', title: '银滩十二时辰',
  poster: 'assets/img/yintan-sunrise.jpg',   // 封面仍用本地小图
  embed: 'https://player.bilibili.com/player.html?bvid=BVxxxx&autoplay=0'
  // src: 'assets/video/yintan.mp4'          ← 删掉 src，卡片不再发起任何视频请求
}
```

B 站取 `分享 → 嵌入代码` 里的 `player.bilibili.com/player.html?bvid=...`；腾讯视频 / YouTube 同理。

**方案 B：视频放对象存储，页面继续用 `<video>`**

传到 Cloudflare R2（10 GB 免费、无出网流量费）/ 又拍云 / 七牛云，或直接用 **GitHub Releases**（单文件上限 2 GB，不占 Pages 带宽）。

`js/data.js` 顶部有 `VIDEO_BASE`，**改这一行即可整体切换 6 个视频**：

```js
/* ''  → 本地 assets/video/ ；填前缀 → 全部走外链 */
const VIDEO_BASE = 'https://github.com/Irene946/beihai-tourism/releases/download/videos/';
// 之后视频地址自动变成 …/releases/download/videos/yintan.mp4
```

Releases 步骤：仓库首页 → Releases → Draft a new release → Tag 填 `videos` → 把 6 个 mp4 拖进附件区 → Publish。

封面、悬停预览、时长读取照常工作（对象存储需返回 `Access-Control-Allow-Origin`；Releases 会自动 302 到 `objects.githubusercontent.com`，`<video>` 可直接播放）。

**方案 C：继续自托管，只做减负**

保留本地 mp4，`preload` 保持 `metadata`（当前实现，弹窗才真正下载）；图片同理，
`yintan-sunset.jpg` 1.2 MB 可压到 300 KB 左右。

> 不要用 jsDelivr 分发视频：它对 GitHub 仓库文件有体积限制，也不适合大文件流式播放。
