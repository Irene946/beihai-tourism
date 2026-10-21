
/* ===== data.js ===== */
;/* ============================================================
 *  data.js  ——  站点数据层
 *  所有文案/景点/美食/文化/路线/视频数据集中于此，便于维护与替换。
 *  motif / colors 用于 js/art.js 生成矢量插画（无外部图片依赖）。
 * ============================================================ */
window.BH_DATA = (function () {
  /* ---------- 站点导航 ---------- */
  const nav = [
    { text: '首页', href: 'index.html' },
    { text: '滨海风光', href: 'scenery.html' },
    { text: '历史人文', href: 'culture.html' },
    { text: '民俗非遗', href: 'folk.html' },
    { text: '美食特产', href: 'food.html' },
    { text: '精品路线', href: 'routes.html' },
    { text: '视频展示', href: 'video.html' },
    { text: '关于北海', href: 'about.html' }
  ];

  /* ---------- 首页轮播 ---------- */
  const hero = [
    {
      title: '银滩逐浪，潮起北部湾',
      sub: '我的家乡 · 广西北海',
      desc: '24 公里银白沙滩、四季常青的滨海小城，一盏糖水、一顿海鲜，就是北海人的日常。',
      motif: 'beach', colors: ['#3FB6E0', '#0A5C7E'],
      photo: 'assets/img/yintan-sunset.jpg',
      btn: { text: '开启滨海之旅', href: 'scenery.html' }
    },
    {
      title: '涠洲岛，火山与海的私语',
      sub: '中国地质年龄最年轻的火山岛',
      desc: '滴水丹屏看落日，五彩滩迎晨光，教堂钟声与渔火同眠。',
      motif: 'island', colors: ['#2AA0C8', '#084C68'],
      photo: 'assets/img/weizhou-1.jpg',
      btn: { text: '看海岛风光', href: 'scenery.html' }
    },
    {
      title: '百年老街，海丝起点',
      sub: '合浦 · 汉代海上丝绸之路始发港',
      desc: '骑楼连廊下藏着开埠往事，珠还合浦的传说流传两千年。',
      motif: 'street', colors: ['#F2703F', '#0B4A63'],
      photo: 'assets/img/laojie.jpg',
      btn: { text: '走进历史人文', href: 'culture.html' }
    },
    {
      title: '疍家渔火，人间烟火',
      sub: '侨港风情街的夜',
      desc: '虾饼酥香、糖水温热，归侨文化与疍家风情在一条街里相遇。',
      motif: 'lantern', colors: ['#FF8A5B', '#0A5C7E'],
      photo: 'assets/img/qiaogang-1.jpg',
      btn: { text: '品尝北海味道', href: 'food.html' }
    }
  ];

  /* ---------- 首页数据统计 ---------- */
  const stats = [
    { num: 24, suffix: 'km', label: '银滩海岸线' },
    { num: 2000, suffix: '+年', label: '海上丝路史' },
    { num: 22.9, suffix: '℃', label: '年平均气温', decimal: 1 },
    { num: 5, suffix: 'A', label: '银滩景区等级' }
  ];

  /* ---------- 滨海风光（7 个景点） ---------- */
  const spots = [
    {
      id: 'yintan', name: '北海银滩', en: 'Silver Beach', cat: '海滩海岛',
      motif: 'beach', colors: ['#3FB6E0', '#0A5C7E'],
      photos: ['assets/img/beach-shell.jpg', 'assets/img/yintan-sunrise.jpg', 'assets/img/yintan-sunset.jpg'],
      photoCaptions: ['银滩贝壳与日落', '银滩日出', '银滩日落'],
      badge: '天下第一滩',
      summary: '滩长平、沙细白、水温净、浪柔软，石英砂在阳光下泛出银光。',
      desc: '银滩西起冠头岭，东至大冠沙，绵延约 24 公里，由高纯度石英砂堆积而成。退潮时滩面宽阔平缓，赤脚走上去细软无石；涨潮时浪柔水清，是天然的滨海浴场。傍晚坐在沙滩上看落日沉入北部湾，是北海人最骄傲的日常风景。',
      highlights: ['石英细沙', '平缓安全', '绝美落日', '免费开放'],
      meta: { 门票: '免费', 建议游玩: '3-4 小时', 最佳季节: '4-11 月' },
      tips: '正午紫外线强，建议上午 9 点前或下午 4 点后下滩；海边冲淋与寄存均在景区沿线。'
    },
    {
      id: 'weizhou', name: '涠洲岛', en: 'Weizhou Island', cat: '海滩海岛',
      motif: 'island', colors: ['#2AA0C8', '#084C68'],
      photos: ['assets/img/weizhou-1.jpg', 'assets/img/weizhou-2.jpg', 'assets/img/weizhou-3.jpg'],
      photoCaptions: ['滴水丹屏落日', '五彩滩火山岩', '环岛海岸栈道'],
      badge: '火山岛',
      summary: '中国地质年龄最年轻的火山岛，海蚀崖、珊瑚礁与教堂共存。',
      desc: '涠洲岛由火山喷发堆积而成，面积约 24.7 平方公里。滴水丹屏的海蚀崖层层叠叠，五彩滩在晨光里呈现斑斓纹路，鳄鱼山火山口遗迹完整保留。岛上盛天主教堂、三婆庙与渔村并存，环岛骑行是最受欢迎的打开方式。',
      highlights: ['火山地貌', '环岛骑行', '珊瑚潜水', '教堂渔村'],
      meta: { 门票: '上岛费 + 船票', 建议游玩: '1-2 天', 最佳季节: '4-11 月' },
      tips: '船票受天气影响大，务必提前预订并预留弹性时间；台风季（7-9 月）关注航班信息。'
    },
    {
      id: 'laojie', name: '北海老街', en: 'Beihai Old Street', cat: '城市人文',
      motif: 'street', colors: ['#3FA9C9', '#0B4A63'],
      photos: ['assets/img/laojie.jpg', 'assets/img/beihai-poster-1.jpg'],
      photoCaptions: ['珠海路骑楼老街', '老城「北海」字号'],
      badge: '百年骑楼',
      summary: '1.44 公里骑楼老街，中西合璧的近代建筑博物馆。',
      desc: '珠海路老街始建于 1883 年，现存骑楼多为 19 世纪末至 20 世纪初建筑，券柱式窗楣、女儿墙浮雕与斑驳的女儿墙铭牌记录着开埠历史。街上有老字号虾饼店、咖啡馆与文创小店，白天看建筑，夜里看灯火。',
      highlights: ['骑楼建筑群', '开埠历史', '老字号小吃', '夜景灯光'],
      meta: { 门票: '免费', 建议游玩: '2-3 小时', 最佳季节: '全年' },
      tips: '清晨与傍晚光线最适合拍照；老街与外沙岛海鲜市场步行可达，可安排在同一动线。'
    },
    {
      id: 'qiaogang', name: '侨港风情街', en: 'Qiaogang Street', cat: '城市人文',
      motif: 'lantern', colors: ['#FF8A5B', '#0A5C7E'],
      photos: ['assets/img/qiaogang-1.jpg', 'assets/img/qiaogang-2.jpg'],
      photoCaptions: ['侨港风情街入口', '风情街夜色'],
      badge: '夜市烟火',
      summary: '归侨聚居地，越南风味与疍家海鲜交织的网红夜市。',
      desc: '侨港镇是 1978 年安置越南归侨所建，如今的风情街汇集糖水、虾饼、越式卷粉、烤生蚝等百余家小吃摊。夜里灯笼亮起，人声鼎沸，是北海最有烟火气的地方。步行可达侨港海滩，吃完直接踏浪。',
      highlights: ['糖水一条街', '越式风味', '海鲜烧烤', '近海滩'],
      meta: { 门票: '免费', 建议游玩: '2-3 小时', 最佳季节: '全年 · 夜间' },
      tips: '18:00-22:00 最热闹；吃海鲜建议先问价再下单，摊位多为明码标价。'
    },
    {
      id: 'hongshulin', name: '金海湾红树林', en: 'Jinhaiwan Mangrove', cat: '生态山海',
      motif: 'mangrove', colors: ['#2FA38B', '#0A5C7E'],
      photos: ['assets/img/mangrove.jpg'],
      photoCaptions: ['金海湾红树林栈道'],
      badge: '海上森林',
      summary: '退潮时“海上森林”浮出水面，招潮蟹与白鹭同框。',
      desc: '金海湾红树林生态旅游区拥有完整的红树群落与辽阔的潮间带滩涂。退潮时可以在栈道外的滩涂上赶海，挖沙虫、拾贝、看招潮蟹；涨潮时红树只剩树冠浮在水面，乘船穿行其间如同进入绿色迷宫。',
      highlights: ['赶海拾贝', '观鸟胜地', '潮汐课堂', '亲子首选'],
      meta: { 门票: '收费', 建议游玩: '2-3 小时', 最佳季节: '全年（按潮汐）' },
      tips: '一定提前查好潮汐表，退潮前后 2 小时体验最佳；穿防滑鞋、带换洗衣物。'
    },
    {
      id: 'guantouling', name: '冠头岭', en: 'Guantouling', cat: '生态山海',
      motif: 'peak', colors: ['#1E96C6', '#063B54'],
      photos: ['assets/img/guantouling.jpg'],
      photoCaptions: ['冠头岭灯塔'],
      badge: '海角灯塔',
      summary: '北海西南岬角，登高可俯瞰港湾、灯塔与落日同框。',
      desc: '冠头岭因山形如冠而得名，是北海市区唯一的山地森林公园。沿海栈道穿行于相思林与礁石之间，登顶可远眺北部湾、深水港与灯塔。山下冠岭山庄一带的礁石海岸，是本地人私藏的日落机位。',
      highlights: ['登高望海', '礁石海岸', '灯塔日落', '森林栈道'],
      meta: { 门票: '免费', 建议游玩: '2 小时', 最佳季节: '10-次年 4 月' },
      tips: '栈道湿滑注意脚下；日落前 1 小时抵达观景台占位。'
    },
    {
      id: 'hepu', name: '合浦汉代文化博物馆', en: 'Hepu Han Museum', cat: '馆藏人文',
      motif: 'museum', colors: ['#0E79A6', '#063B54'],
      photos: ['assets/img/hepu-museum-1.jpg', 'assets/img/hepu-museum-2.jpg'],
      photoCaptions: ['合浦汉代文化博物馆', '馆藏汉墓遗址'],
      badge: '国家一级馆',
      summary: '5200 余件藏品，以汉代海上丝绸之路文物为核心。',
      desc: '馆内基本陈列《珠光帆影——合浦海上丝绸之路文物精品展》，集中展示合浦汉墓出土的琉璃、水晶、玛瑙、香料与波斯陶壶等舶来品，实证汉代合浦作为海上丝绸之路始发港的繁盛。馆外的汉代文化广场与四方岭汉墓保护棚可一并参观。',
      highlights: ['波斯陶壶', '琉璃玛瑙', '汉墓复原', '丝路实证'],
      meta: { 门票: '免费（需预约）', 建议游玩: '1.5-2 小时', 最佳季节: '全年' },
      tips: '建议请讲解或租语音导览；与合浦汉代文化广场、文昌塔安排半天联游。'
    }
  ];

  /* ---------- 历史人文 ---------- */
  const cultures = [
    {
      id: 'silkroad', name: '海上丝绸之路 · 合浦始发港', en: 'Maritime Silk Road', cat: '丝路史',
      motif: 'junk', colors: ['#1E96C6', '#063B54'],
      photos: ['assets/img/maritime-silkroad.jpg'],
      photoCaptions: ['北海 · 海上丝绸之路始发港'],
      badge: '两千年港埠',
      summary: '《汉书·地理志》明确记载的最早海上丝路始发港之一。',
      desc: '汉代合浦郡凭借南流江水系与北部湾港口，成为中原通往东南亚、南亚的出海门户。商船自合浦出发，携带丝绸、黄金与陶器，换回琉璃、玛瑙、水晶与香料。合浦汉墓群出土的大量舶来品，是这条航线最硬的物证。',
      highlights: ['汉书有载', '汉墓群', '舶来品文物', '南流江水系'],
      meta: { 年代: '西汉—明清', 关键词: '始发港 · 珠还合浦' },
      story: '“珠还合浦”的典故正出自这里——官吏贪暴则珠徙他乡，太守清廉则珠复还，成为千古廉政寓言。'
    },
    {
      id: 'hanmu', name: '合浦汉代文化博物馆', en: 'Hepu Han Culture Museum', cat: '馆藏人文',
      motif: 'museum', colors: ['#0E79A6', '#084C68'],
      photos: ['assets/img/hepu-museum-2.jpg'],
      photoCaptions: ['合浦汉代文化博物馆'],
      badge: '国家一级博物馆',
      summary: '以汉代海上丝绸之路为主题的专题性博物馆。',
      desc: '依托全国重点文物保护单位合浦汉墓群而建，藏品 5200 余件（套），其中一级文物 21 件。馆内以文物组合讲述港口、船舶、贸易与人群往来，是理解北海“海丝”身份的第一站。',
      highlights: ['波斯陶壶', '琉璃碗', '金饼', '铜凤灯'],
      meta: { 年代: '西汉—东汉', 关键词: '汉墓 · 舶来品' },
      story: '铜凤灯将烟气导入腹腔水中过滤，是两千年前的“环保灯”，堪称汉代设计典范。'
    },
    {
      id: 'pearl', name: '南珠文化 · 白龙珍珠城', en: 'South Pearl Culture', cat: '南珠史',
      motif: 'pearl', colors: ['#3FA9D9', '#0A4C6E'],
      photos: ['assets/img/bailong-pearl-city.jpg'],
      photoCaptions: ['白龙珍珠城遗址'],
      badge: '西珠不如东珠，东珠不如南珠',
      summary: '合浦南珠历朝皆为贡品，白龙城是古代采珠管理机构所在地。',
      desc: '合浦采珠史可上溯至秦代，明清形成规模化珠池管理，白龙珍珠城即为明代采珠太监驻地与珠市所在。南珠以“光、重、圆、润”闻名，历代列为贡品，也造就了北海“珠城”的别称。',
      highlights: ['历代贡珠', '白龙城遗址', '珠池制度', '珠还合浦'],
      meta: { 年代: '秦—明清', 关键词: '贡珠 · 珠市' },
      story: '明代采珠最盛时，一次征调民夫数千、船只数百，珍珠的光泽背后是珠民的血泪史。'
    },
    {
      id: 'port', name: '北海开埠 · 近代老城', en: 'Modern Port History', cat: '近代史',
      motif: 'street', colors: ['#F2703F', '#0B4A63'],
      photos: ['assets/img/beihai-poster-2.jpg'],
      photoCaptions: ['近代老城「北海」字号'],
      badge: '1876 年开埠',
      summary: '《烟台条约》辟北海为通商口岸，骑楼记录了中西交融的百年。',
      desc: '1876 年北海被辟为对外通商口岸，英、法、德等国在此设立领事馆与洋行，珠海路、中山路骑楼街区随之兴起。券柱式拱廊、西式山花与中式砖木结构混搭，形成独特的“北海巴洛克”风格。',
      highlights: ['领事馆旧址', '骑楼券廊', '洋行商号', '开埠风貌'],
      meta: { 年代: '1876—1949', 关键词: '通商口岸 · 骑楼' },
      story: '老街女儿墙上仍能辨认出当年的商号铭牌，一块砖就是一段家族史。'
    },
    {
      id: 'church', name: '涠洲岛天主教堂', en: 'Weizhou Catholic Church', cat: '近代史',
      motif: 'museum', colors: ['#2AA0C8', '#084C68'],
      badge: '全国重点文保',
      summary: '用珊瑚石与火山岩砌成的百年教堂，深藏海岛腹地。',
      desc: '教堂始建于 1853 年，由法国传教士主持修建，就地取材用岛上珊瑚石与火山岩垒砌，历时十年落成。哥特式尖拱与本土材料结合，是涠洲岛上最独特的文化地标。',
      highlights: ['珊瑚石砌筑', '哥特尖拱', '百年钟楼', '海岛地标'],
      meta: { 年代: '1853—1863', 关键词: '珊瑚石 · 西教东传' },
      story: '墙体以珊瑚石拌糯米灰浆砌成，百年海风侵蚀仍坚固如初。'
    }
  ];

  /* ---------- 民俗非遗 ---------- */
  const folkes = [
    {
      id: 'danjia', name: '疍家文化', en: 'Tanka Boat Dwellers', cat: '疍家',
      motif: 'stilt', colors: ['#1E96C6', '#0A4C6E'],
      badge: '水上人家',
      summary: '“以舟为室，视水如陆，浮生江海”的水上族群。',
      desc: '疍家人世代居于舟楫之上，以捕鱼、采珠、摆渡为生，形成了独特的婚俗、服饰、饮食与信仰。北海外沙、侨港一带至今保留疍家棚屋与渔港生活方式，是北部湾最具辨识度的人文风景。',
      highlights: ['疍家棚屋', '船上婚礼', '咸水歌', '妈祖信仰'],
      meta: { 分布: '外沙 · 侨港 · 涠洲', 关键词: '浮家泛宅' },
      story: '疍家婚礼在船上进行，以歌代哭、以歌贺喜，整条渔港都是喜宴现场。'
    },
    {
      id: 'xianshui', name: '疍家咸水歌', en: 'Tanka Folk Songs', cat: '疍家',
      motif: 'junk', colors: ['#3FB6E0', '#084C68'],
      badge: '民歌活化石',
      summary: '无伴奏即兴对唱，被称为“水上诗经”。',
      desc: '咸水歌是疍家人日常劳作、婚嫁、节庆时的即兴歌唱，曲调随水起伏，歌词多用比兴。内容涵盖出海、织网、婚俗与家常，因其口头性与即兴性，被称为研究疍家生活的“活态文献”。',
      highlights: ['即兴对唱', '以歌代言', '婚俗歌堂', '口传心授'],
      meta: { 类型: '民间音乐', 关键词: '即兴 · 对歌' },
      story: '老一辈疍家人“见面即歌”，一天不下网也能唱上一整夜。'
    },
    {
      id: 'caizhu', name: '南珠采珠技艺', en: 'Pearl Diving Craft', cat: '南珠',
      motif: 'pearl', colors: ['#57B8DE', '#0A4C6E'],
      badge: '世代相传',
      summary: '从徒手潜采到人工育珠，一部写在贝壳里的发展史。',
      desc: '传统采珠以“珠船—珠户”组织，珠民徒手潜入数丈深的海底取蚌取珠，风险极高；近代以来合浦发展人工插核育珠技术，使南珠产业复兴。相关技艺与习俗被列入地方非物质文化遗产名录。',
      highlights: ['徒手潜采', '插核育珠', '珠民习俗', '祭海仪式'],
      meta: { 类型: '传统技艺', 关键词: '潜采 · 育珠' },
      story: '“蚌病成珠”——沙粒进入蚌体，历经疼痛才凝成一颗南珠，被疍家人比作人生。'
    },
    {
      id: 'beidiao', name: '北海贝雕', en: 'Beihai Shell Carving', cat: '技艺',
      motif: 'shell', colors: ['#2FA38B', '#084C68'],
      photos: ['assets/img/beach-shell.jpg'],
      photoCaptions: ['北部湾贝类原料'],
      badge: '广西非遗',
      summary: '以贝壳天然色泽与纹理入画，被誉为“立体的国画”。',
      desc: '北海贝雕选取北部湾出产的珍珠贝、夜光螺、砗磲等为原料，经选料、切割、打磨、拼贴、上光等十几道工序，利用贝壳天然的色泽、纹路与光泽构图，题材多为花鸟、山水与疍家风情。',
      highlights: ['天然材质', '手工拼贴', '立体浮雕', '文创衍生'],
      meta: { 类型: '传统美术', 关键词: '贝壳 · 拼贴画' },
      story: '匠人常说“看贝如看石”，一块贝壳的纹路决定了它该成为花瓣还是浪花。'
    },
    {
      id: 'guiqiao', name: '侨港归侨文化', en: 'Returned Overseas Chinese', cat: '侨乡',
      motif: 'lantern', colors: ['#FF8A5B', '#0A5C7E'],
      photos: ['assets/img/qiaogang-2.jpg'],
      photoCaptions: ['侨港风情街夜色'],
      badge: '多元融合',
      summary: '1978 年安置归侨形成的渔港小镇，中越风味共生。',
      desc: '侨港镇聚居着大批越南归侨，带来了越式卷粉、滴漏咖啡、椰汁糕等饮食习惯，也带来了渔港作业方式与节庆习俗。如今风情街的灯笼、摊档口音与双语招牌，都是这段历史的活态呈现。',
      highlights: ['越式小吃', '归侨渔港', '双语招牌', '节庆巡游'],
      meta: { 类型: '民俗 · 饮食', 关键词: '归侨 · 融合' },
      story: '一家糖水铺常常同时卖着越南绿豆糖与广式芝麻糊，一勺就是半部移民史。'
    },
    {
      id: 'jihai', name: '祭海与开渔节', en: 'Sea Worship Festival', cat: '节庆',
      motif: 'boat', colors: ['#0E79A6', '#063B54'],
      photos: ['assets/img/kaihai-festival.jpg'],
      photoCaptions: ['开海节 · 千帆出海'],
      badge: '渔家盛典',
      summary: '休渔期结束，千帆竞发，渔家以礼敬海。',
      desc: '每年伏季休渔期结束后，北海渔港举行开渔仪式，祭海、巡游、放生与千船出海同时进行。平日里渔民出海前也有祭妈祖、拜龙王的习俗，表达对大海的敬畏与感恩。',
      highlights: ['千帆出海', '祭海祈福', '妈祖巡安', '海鲜开市'],
      meta: { 类型: '岁时节令', 关键词: '开渔 · 妈祖' },
      story: '开渔第一网常被竞拍，价高者得，图的是一年顺风顺水的彩头。'
    }
  ];

  /* ---------- 美食特产 ---------- */
  const foods = [
    {
      id: 'haixian', name: '海鲜', en: 'Seafood', cat: '海鲜珍味',
      motif: 'food', colors: ['#0E79A6', '#F2703F'],
      photos: ['assets/img/seafood.jpg'],
      photoCaptions: ['北部湾海鲜宴'],
      badge: '到北海必吃',
      summary: '生蚝、对虾、花蟹、石斑、车螺……北部湾的鲜。',
      desc: '北海海域水质洁净，盛产牡蛎（生蚝）、对虾、花蟹、石斑鱼、沙尖鱼与车螺。外沙岛、侨港与海鲜市场可现买现加工，白灼、清蒸最能体现原味，炭烤生蚝则是夜市灵魂。',
      highlights: ['炭烤生蚝', '白灼虾', '清蒸石斑', '椒盐皮皮虾'],
      meta: { 推荐地: '外沙岛 · 侨港', 人均: '80-150 元', 最佳季节: '9-次年 4 月' },
      tips: '先问价、看清加工费与市场公秤；生蚝 9 月后最肥美。'
    },
    {
      id: 'xiabing', name: '虾饼', en: 'Shrimp Pancake', cat: '街头小吃',
      motif: 'food', colors: ['#F2703F', '#0A5C7E'],
      photos: ['assets/img/xiabing-1.jpg', 'assets/img/xiabing-2.jpg'],
      photoCaptions: ['老街虾饼', '刚出锅的虾饼'],
      badge: '老街招牌',
      summary: '米浆裹整只小虾，油炸至金黄，一口酥香。',
      desc: '北海虾饼以本地小海虾为主料，调米浆后连虾带浆下锅油炸，出锅时虾尾翘起、外壳酥脆。老街与侨港的摊位前常年排队，趁热吃最能感受“咔嚓”一声的满足。',
      highlights: ['整虾入饼', '现炸现吃', '街头排队王', '5 元一个'],
      meta: { 推荐地: '珠海路老街 · 侨港', 人均: '5-10 元', 最佳季节: '全年' },
      tips: '刚出锅最酥，晾凉会回软；搭配一碗糖水刚刚好。'
    },
    {
      id: 'tangshui', name: '糖水', en: 'Sweet Soup', cat: '甜品糖水',
      motif: 'food', colors: ['#3FB6E0', '#0A4C6E'],
      photos: ['assets/img/tangshui.jpg'],
      photoCaptions: ['侨港糖水'],
      badge: '夜市标配',
      summary: '绿豆、薏米、芋头、椰汁……一碗甜，解一夏暑。',
      desc: '北海糖水铺遍布街头，绿豆沙、薏米淮山、芋头西米、椰汁糕、清补凉应有尽有，价格亲民、营业到深夜。炎热的滨海夜晚，一碗冰镇糖水是本地人的“续命水”。',
      highlights: ['清补凉', '芋头西米', '椰汁糕', '通宵营业'],
      meta: { 推荐地: '侨港风情街', 人均: '6-15 元', 最佳季节: '4-10 月' },
      tips: '侨港“糖水一条街”选择最多；冰镇与热食皆可点，可要求少糖。'
    },
    {
      id: 'shachong', name: '沙虫', en: 'Sandworm', cat: '海鲜珍味',
      motif: 'food', colors: ['#2FA38B', '#084C68'],
      photos: ['assets/img/shachong.jpg'],
      photoCaptions: ['蒜蓉蒸沙虫'],
      badge: '海滩珍味',
      summary: '生长于洁净滩涂，脆嫩鲜甜，被誉为“海滩人参”。',
      desc: '沙虫学名方格星虫，只在洁净的沙质滩涂生长，北海金海湾、竹林一带产量优良。常见的做法有蒜蓉蒸、沙虫刺身、沙虫粥与沙虫干煲汤，口感脆爽、鲜味浓郁，是招待贵客的招牌。',
      highlights: ['蒜蓉蒸沙虫', '沙虫粥', '沙虫刺身', '沙虫干'],
      meta: { 推荐地: '侨港 · 竹林盐场', 人均: '60-120 元', 最佳季节: '全年' },
      tips: '沙虫对生长环境要求极高，认准正规餐饮店；初次尝试建议从沙虫粥开始。'
    },
    {
      id: 'nanzhu', name: '南珠', en: 'South Sea Pearl', cat: '地方特产',
      motif: 'pearl', colors: ['#57B8DE', '#0A4C6E'],
      badge: '珠城之宝',
      summary: '合浦南珠，光重圆润，历代贡品级别的伴手礼。',
      desc: '南珠是合浦的地理标志产品，以颗粒圆润、光泽强、珠层厚著称。如今已形成养殖、加工、设计全产业链，珍珠项链、耳饰、胸针与贝雕工艺品都是体面的北海伴手礼。',
      highlights: ['地理标志', '海水珍珠', '珠宝定制', '贝雕文创'],
      meta: { 推荐地: '南珠市场 · 老街珠宝店', 人均: '视成色而定', 最佳季节: '全年' },
      tips: '选购认准正规店铺与鉴定证书；按光泽、圆度、瑕疵与珠层厚度四项判断。'
    },
    {
      id: 'shaxiezhi', name: '沙蟹汁', en: 'Sand Crab Sauce', cat: '地方特产',
      motif: 'food', colors: ['#1E96C6', '#0A5C7E'],
      photos: ['assets/img/shaxiezhi.jpg'],
      photoCaptions: ['沙蟹汁'],
      badge: '蘸料灵魂',
      summary: '沙滩小蟹捣碎发酵，鲜到“上头”的北海味噌。',
      desc: '取退潮后沙滩上的小沙蟹，洗净捣碎加盐密封发酵数日即成。沙蟹汁是北海人吃白切鸡、白灼虾、蘸芋头的灵魂蘸料，氨基酸带来的浓鲜极具辨识度，被戏称为“北海的鱼露”。',
      highlights: ['传统发酵', '蘸白切鸡', '炒空心菜', '瓶装伴手礼'],
      meta: { 推荐地: '老街 · 农贸市场', 人均: '15-40 元', 最佳季节: '全年' },
      tips: '气味浓烈，初次尝试可少量蘸食；瓶装便于携带，注意密封避光。'
    }
  ];

  /* ---------- 精品路线 ---------- */
  const routes = [
    {
      id: 'classic', name: '经典三日 · 海城双绝', en: 'Classic 3 Days', days: 3, level: '轻松',
      badge: '最受欢迎', motif: 'beach', colors: ['#3FB6E0', '#0A5C7E'],
      desc: '第一次来北海的最优解：半天银滩、半天老街，两天留给涠洲岛，把海与城一次看够。',
      suitable: '首次到访 · 情侣 · 家庭',
      spotIds: ['yintan', 'laojie', 'weizhou'],
      foodIds: ['haixian', 'xiabing', 'tangshui'],
      stops: [
        { time: 'Day1 09:00', tag: '海滩', title: '银滩踏浪', desc: '沿沙滩步行至银滩公园，上午光线柔和，适合拍照与下海。' },
        { time: 'Day1 15:00', tag: '人文', title: '北海老街', desc: '骑楼下喝杯咖啡，尝老字号虾饼，看开埠建筑细节。' },
        { time: 'Day1 19:30', tag: '美食', title: '外沙岛海鲜', desc: '现挑现加工，炭烤生蚝配白灼虾，收尾一碗糖水。' },
        { time: 'Day2 08:30', tag: '海岛', title: '乘船登涠洲岛', desc: '国际客运港出发，约 70-110 分钟抵达，入住岛上民宿。' },
        { time: 'Day2 14:00', tag: '地貌', title: '鳄鱼山 · 滴水丹屏', desc: '看火山口遗迹与海蚀崖，傍晚在滴水丹屏等一场落日。' },
        { time: 'Day3 05:40', tag: '日出', title: '五彩滩晨光', desc: '退潮后的五彩滩纹路分明，是岛上最美的清晨。' },
        { time: 'Day3 10:00', tag: '人文', title: '天主教堂 · 环岛', desc: '珊瑚石教堂与渔村慢行，午后返程北海。' }
      ]
    },
    {
      id: 'family', name: '亲子两日 · 生态赶海', en: 'Family Eco 2 Days', days: 2, level: '轻松',
      badge: '亲子首选', motif: 'mangrove', colors: ['#2FA38B', '#0A5C7E'],
      desc: '按潮汐表安排的红树林赶海之旅，孩子在滩涂上认识招潮蟹、弹涂鱼与白鹭。',
      suitable: '亲子家庭 · 自然爱好者',
      spotIds: ['hongshulin', 'guantouling', 'qiaogang'],
      foodIds: ['tangshui', 'haixian', 'shachong'],
      stops: [
        { time: 'Day1 09:30', tag: '湿地', title: '金海湾红树林', desc: '走栈道认识红树胎生现象，观鸟塔上看白鹭归巢。' },
        { time: 'Day1 15:00', tag: '赶海', title: '滩涂赶海', desc: '按退潮时间下滩，挖沙虫、拾贝壳，注意防晒与防滑。' },
        { time: 'Day1 19:00', tag: '美食', title: '侨港风情街', desc: '糖水、卷粉、烤生蚝，孩子也能吃得开心。' },
        { time: 'Day2 09:00', tag: '山海', title: '冠头岭森林栈道', desc: '林间栈道凉爽好走，登顶俯瞰港湾与灯塔。' },
        { time: 'Day2 15:00', tag: '海滩', title: '侨港海滩玩沙', desc: '坡度平缓、配套齐全，适合放风筝与戏水。' }
      ]
    },
    {
      id: 'history', name: '文化寻踪 · 海丝与南珠', en: 'Heritage Trail', days: 2, level: '适中',
      badge: '人文深度', motif: 'junk', colors: ['#1E96C6', '#063B54'],
      desc: '从汉代始发港到明清珠市，用两天读完北海两千年：丝路、汉墓、南珠、骑楼。',
      suitable: '文博爱好者 · 研学 · 摄影',
      spotIds: ['hepu', 'laojie', 'guantouling'],
      foodIds: ['nanzhu', 'xiabing'],
      stops: [
        { time: 'Day1 09:00', tag: '博物馆', title: '合浦汉代文化博物馆', desc: '重点看波斯陶壶、琉璃与铜凤灯，建议配讲解。' },
        { time: 'Day1 13:30', tag: '遗址', title: '汉代文化广场 · 文昌塔', desc: '汉墓保护棚与明代文昌塔，了解墓葬形制。' },
        { time: 'Day1 16:00', tag: '遗址', title: '白龙珍珠城', desc: '古城墙与珠池遗址，读“珠还合浦”的地方版。' },
        { time: 'Day2 09:30', tag: '老城', title: '北海老街', desc: '从中山东路走到珠海路，辨认女儿墙上的商号铭牌。' },
        { time: 'Day2 14:00', tag: '非遗', title: '贝雕与南珠工坊', desc: '看贝雕拼贴与珍珠开蚌，带走一件手作纪念。' },
        { time: 'Day2 17:30', tag: '日落', title: '冠头岭收尾', desc: '在礁石海岸看落日，为人文之旅收一个温柔的尾。' }
      ]
    },
    {
      id: 'foodie', name: '一日夜游 · 舌尖北海', en: 'Foodie Night Tour', days: 1, level: '轻松',
      badge: '吃货路线', motif: 'lantern', colors: ['#FF8A5B', '#0A5C7E'],
      desc: '从清晨的早茶到深夜的糖水，一天吃完北海最值得排队的那几家。',
      suitable: '美食爱好者 · 年轻人',
      spotIds: ['laojie', 'qiaogang'],
      foodIds: ['xiabing', 'shachong', 'tangshui', 'haixian'],
      stops: [
        { time: '08:00', tag: '早餐', title: '早茶 · 海鲜粥', desc: '本地茶楼一盅两件，或来一碗海鲜砂锅粥。' },
        { time: '10:30', tag: '小吃', title: '老街虾饼', desc: '现炸虾饼配一杯冰镇甘蔗汁，边走边吃。' },
        { time: '12:00', tag: '正餐', title: '沙虫宴', desc: '蒜蓉蒸沙虫、沙虫粥，尝一口海滩珍味。' },
        { time: '15:00', tag: '甜品', title: '糖水铺巡礼', desc: '清补凉、芋头西米、椰汁糕，一家一勺。' },
        { time: '18:30', tag: '夜市', title: '侨港风情街', desc: '越式卷粉、烤生蚝、炒冰，从街头吃到街尾。' },
        { time: '21:00', tag: '夜色', title: '侨港海滩散步', desc: '提着沙滩鞋踩浪，听疍家人的渔歌录音。' }
      ]
    }
  ];

  /* ---------- 视频展示 ----------
   * 播放方式三选一（优先级：embed > src）：
   *   1. src   : 视频地址，由下面的 VIDEO_BASE 拼出，默认指向本地 assets/video/*.mp4
   *   2. embed : 第三方播放器 iframe（B 站 / 腾讯视频 / YouTube），填了它弹窗直接内嵌播放，
   *              站点里不必存任何视频文件，例如：
   *              'https://player.bilibili.com/player.html?bvid=BVxxx&autoplay=0'
   *   3. 两者都不填：卡片只显示封面图，不再发起任何视频请求
   */
  /* 视频源前缀：**只改这一行**就能整体切换视频存放位置
   *   ''                                    → 本地 assets/video/（视频需随仓库一起部署）
   *   'https://github.com/Irene946/beihai-tourism/releases/download/videos/'
   *                                         → GitHub Releases 托管（不吃 Pages 带宽，推荐）
   *   'https://cdn.example.com/videos/'     → 对象存储 / CDN
   */
  const VIDEO_BASE = '';
  const videoSrc = function (name) {
    return VIDEO_BASE ? VIDEO_BASE + name : 'assets/video/' + name;
  };

  const videos = [
    {
      id: 'v1', title: '银滩十二时辰', dur: '—', year: '2024',
      motif: 'beach', colors: ['#3FB6E0', '#0A5C7E'],
      poster: 'assets/img/yintan-sunrise.jpg',
      desc: '从清晨第一缕阳光到深夜最后一盏灯，记录银滩一天的光影变化。',
      src: videoSrc('yintan.mp4')
    },
    {
      id: 'v2', title: '涠洲岛环岛记', dur: '—', year: '2024',
      motif: 'island', colors: ['#2AA0C8', '#084C68'],
      poster: 'assets/img/weizhou-1.jpg',
      desc: '骑着小电驴环岛一圈，火山崖、教堂与渔村依次展开。',
      src: videoSrc('weizhou.mp4')
    },
    {
      id: 'v3', title: '老街骑楼里的百年', dur: '—', year: '2023',
      motif: 'street', colors: ['#F2703F', '#0B4A63'],
      poster: 'assets/img/laojie.jpg',
      desc: '券廊、山花与斑驳铭牌，一座老城的近代记忆。',
      src: videoSrc('laojie.mp4')
    },
    {
      id: 'v4', title: '疍家人的一天', dur: '—', year: '2023',
      motif: 'stilt', colors: ['#1E96C6', '#0A4C6E'],
      poster: 'assets/img/kaihai-festival.jpg',
      desc: '跟拍疍家渔民出海、织网、唱咸水歌的日常。',
      src: videoSrc('danjia.mp4')
    },
    {
      id: 'v5', title: '南珠：蚌病成珠', dur: '—', year: '2024',
      motif: 'pearl', colors: ['#57B8DE', '#0A4C6E'],
      poster: 'assets/img/bailong-pearl-city.jpg',
      desc: '从采珠到插核育珠，一颗南珠的两千年与三十天。',
      src: videoSrc('nanzhu.mp4')
    },
    {
      id: 'v6', title: '红树林赶海指南', dur: '—', year: '2025',
      motif: 'mangrove', colors: ['#2FA38B', '#0A5C7E'],
      poster: 'assets/img/mangrove.jpg',
      desc: '退潮两小时能遇见什么？招潮蟹、弹涂鱼与白鹭同框。',
      src: videoSrc('mangrove.mp4')
    }
  ];

  /* ---------- 关于北海 ---------- */
  const facts = [
    { k: '地理位置', v: '广西壮族自治区南端，北部湾东北岸，东邻广东、南望海南。' },
    { k: '行政区划', v: '辖海城区、银海区、铁山港区与合浦县，陆地面积约 3337 平方公里。' },
    { k: '气候特征', v: '亚热带海洋性季风气候，年平均气温 22.9℃，冬无严寒、夏无酷暑。' },
    { k: '交通方式', v: '北海福成机场、北海站（动车直达南宁/桂林/广州）、国际客运港（赴涠洲岛/越南）。' },
    { k: '城市名片', v: '国家历史文化名城、中国优秀旅游城市、中国避寒宜居地、南珠之乡。' }
  ];

  const bestTime = [
    { season: '春季 3-5 月', desc: '气温 18-26℃，湿润少雨，红树林与老街最舒适。', score: 5 },
    { season: '夏季 6-8 月', desc: '玩水旺季，银滩人气最高，注意台风与防晒。', score: 4 },
    { season: '秋季 9-11 月', desc: '天高气爽、海鲜最肥，全年最佳旅行窗口。', score: 5 },
    { season: '冬季 12-2 月', desc: '15-20℃ 宜人，是北方游客的避寒首选。', score: 4 }
  ];

  const faq = [
    { q: '北海玩几天比较合适？', a: '市区 + 涠洲岛建议 3-4 天；只玩市区 1-2 天即可。想看红树林、合浦博物馆则再加 1 天。' },
    { q: '去涠洲岛需要提前订船票吗？', a: '旺季（5-10 月、节假日）务必提前 3-7 天在官方渠道预订，台风季航班可能停运，行程要留弹性。' },
    { q: '什么季节的海鲜最好？', a: '9 月到次年 4 月，生蚝、花蟹、对虾最为肥美；伏季休渔期（5-8 月）海鲜价格偏高、品种略少。' },
    { q: '红树林赶海怎么安排时间？', a: '以当日潮汐表为准，退潮前后约 2 小时最佳。景区入口会公示当天潮汐时间，建议提前电话确认。' },
    { q: '北海的消费水平如何？', a: '整体亲民：虾饼 5 元、糖水 6-15 元、海鲜正餐人均 80-150 元，涠洲岛因运输成本略高一些。' }
  ];

  return { nav, hero, stats, spots, cultures, folkes, foods, routes, videos, facts, bestTime, faq };
})();


/* ===== art.js ===== */
;/* ============================================================
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


/* ===== components.js ===== */
;/* ============================================================
 *  components.js —— 公共结构（页头 / 导航 / 页脚 / 回到顶部）
 *                    + 滚动高亮、滚动入场、数字滚动
 * ============================================================ */
window.BH_UI = (function () {
  const ICON = {
    wave: '<svg viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M3 20c3-4 6-4 9 0s6 4 9 0 6-4 8 0"/><path d="M3 26c3-4 6-4 9 0s6 4 9 0 6-4 8 0"/><circle cx="23" cy="8" r="4.2" fill="currentColor" stroke="none"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5l12 7-12 7z"/></svg>',
    zoom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21M11 8v6M8 11h6"/></svg>',
    up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    wechat: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 4C5 4 2 6.7 2 10c0 1.9 1 3.6 2.6 4.7L4 17l2.7-1.4c.7.2 1.5.3 2.3.3h.5A5.6 5.6 0 018 12c0-3.3 3-6 6.7-6H9zm-2.5 3.5a1 1 0 110 2 1 1 0 010-2zm5 0a1 1 0 110 2 1 1 0 010-2z"/><path d="M22 12.5c0-2.9-2.7-5.2-6-5.2s-6 2.3-6 5.2c0 2.9 2.7 5.2 6 5.2c.7 0 1.4-.1 2-.3L21 19l-.6-2c1.1-.9 1.6-2.3 1.6-3.5zm-8.3-1a.9.9 0 110-1.8.9.9 0 010 1.8zm4.6 0a.9.9 0 110-1.8.9.9 0 010 1.8z"/></svg>',
    weibo: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.5 19c-3.6 0-6.5-1.8-6.5-4 0-.9.4-1.9 1.3-2.8C5.4 11 7.1 10 9.2 10c.4 0 .8 0 1.2.1.1-.7.4-1.3.8-1.8-.2 0-.5-.1-.8-.1-3.6 0-6.4 2.3-6.4 5.1 0 2.2 1.7 4.1 4.2 4.9A9 9 0 015 20.3c.2 0 .4.1.6.1 2.6 0 4.5-1.3 4.5-3 0-.8-.3-1.5-.8-2.1-.4.5-1 1-1.9 1-1.2 0-2.1-.9-2.1-2s.9-2 2.1-2c1.4 0 2.3 1.1 2.3 2.5 0 .4-.1.8-.2 1.2.7-.3 1.4-.4 2.2-.4 1.3 0 2.4.4 3.2 1.1-.1-2.6-2.3-4.6-5-4.6-.5 0-1 .1-1.4.2.5-.6.9-1.3 1.1-2.1.2-.8.2-1.6 0-2.3.9.5 1.6 1.2 2.1 2.1 1-.6 2.2-.9 3.4-.9.3 0 .6 0 .9.1-.3.4-.6.8-.8 1.3-.2.6-.3 1.2-.1 1.8.2.7.7 1.3 1.3 1.7 2.4.9 4 2.9 4 5.1 0 3.3-3.4 6-7.5 6z"/></svg>',
    douyin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 2h-3v13.2a2.6 2.6 0 11-2.6-2.6c.3 0 .5 0 .8.1V9.5a6.4 6.4 0 105.6 6.3V8.4c1 .8 2.3 1.3 3.7 1.3V6.6c-1.4 0-2.6-.5-3.6-1.3V2z"/></svg>',
    /* 移动端底部导航条图标 */
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.2 12 4.5l8 6.7"/><path d="M6.3 10.2V20h11.4v-9.8"/><path d="M10 20v-5.2h4V20"/></svg>',
    sunsea: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="7.5" r="3.1"/><path d="M3 15.2c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/><path d="M3 19.4c2-2.4 4-2.4 6 0s4 2.4 6 0 4-2.4 6 0"/></svg>',
    museum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20.5h18"/><path d="M12 4 3.5 9.5h17L12 4z"/><path d="M5.6 9.8V20M18.4 9.8V20M9.2 20v-6h5.6v6"/></svg>',
    lantern: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v2.6"/><path d="M9.2 5.6h5.6"/><ellipse cx="12" cy="12.2" rx="5.2" ry="5.6"/><path d="M12 17.8V21"/><path d="M9.6 21h4.8"/></svg>',
    bowl: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.4 11.2h17.2c0 4.6-3.9 8.3-8.6 8.3s-8.6-3.7-8.6-8.3z"/><path d="M2.6 21h18.8"/><path d="M8 8.2c0-1.5 1-2 1-3M12 7.6c0-1.5 1-2 1-3M16 8.2c0-1.5 1-2 1-3"/></svg>',
    route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="5" r="2.2"/><path d="M6 16.6V12a4 4 0 0 1 4-4h5.6"/></svg>',
    cam: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="12.6" height="13" rx="2.6"/><path d="M15.6 10.6 21 7.2v9.6l-5.4-3.4z"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 11.2v6"/><circle cx="12" cy="7.9" r="1" fill="currentColor" stroke="none"/></svg>'
  };

  /* 底部导航条：页面 -> 图标 / 短标签 */
  const TAB_META = {
    'index.html': { icon: 'home', short: '首页' },
    'scenery.html': { icon: 'sunsea', short: '风光' },
    'culture.html': { icon: 'museum', short: '人文' },
    'folk.html': { icon: 'lantern', short: '民俗' },
    'food.html': { icon: 'bowl', short: '美食' },
    'routes.html': { icon: 'route', short: '路线' },
    'video.html': { icon: 'cam', short: '视频' },
    'about.html': { icon: 'info', short: '关于' }
  };

  /* ---------- 页头 ---------- */
  function renderHeader() {
    const host = document.getElementById('site-header');
    if (!host) return;
    const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    const links = BH_DATA.nav.map(function (n) {
      const active = n.href.toLowerCase() === here ? ' is-active' : '';
      return '<li><a class="nav-link' + active + '" href="' + n.href + '">' + n.text + '</a></li>';
    }).join('');

    host.innerHTML =
      '<header class="site-header" id="siteHeader">' +
        '<div class="container header-inner">' +
          '<a class="brand" href="index.html" aria-label="返回首页">' +
            '<span class="brand-logo">' + ICON.wave + '</span>' +
            '<span class="brand-text"><strong>北海</strong><em>BEIHAI · 我的家乡</em></span>' +
          '</a>' +
          '<nav class="nav" id="primaryNav" aria-label="主导航">' +
            '<ul class="nav-list">' + links + '</ul>' +
            '<a class="btn btn--ocean btn--sm" href="routes.html">规划行程</a>' +
          '</nav>' +
          '<div class="header-actions">' +
            '<a class="btn btn--coral btn--sm" href="routes.html">规划行程</a>' +
            '<button class="nav-toggle" id="navToggle" type="button" aria-label="打开导航菜单" aria-expanded="false" aria-controls="primaryNav">' +
              '<span></span><span></span><span></span>' +
            '</button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="nav-mask" id="navMask"></div>' +
      tabBarHtml(here);
  }

  /* 移动端底部导航条：8 个页面一键直达，当前页高亮 */
  function tabBarHtml(here) {
    const tabs = BH_DATA.nav.map(function (n) {
      const key = n.href.toLowerCase();
      const meta = TAB_META[key] || { icon: 'sunsea', short: n.text };
      const active = key === here ? ' is-active' : '';
      return '<a class="tab' + active + '" href="' + n.href + '"' +
        (active ? ' aria-current="page"' : '') + '>' +
        ICON[meta.icon] + '<span>' + meta.short + '</span></a>';
    }).join('');
    return '<nav class="tabbar" id="tabBar" aria-label="页面导航"><div class="tabbar-inner">' + tabs + '</div></nav>';
  }

  /* ---------- 页脚 ---------- */
  function renderFooter() {
    const host = document.getElementById('site-footer');
    if (!host) return;
    const quick = BH_DATA.nav.slice(1, 5).map(function (n) {
      return '<li><a href="' + n.href + '">' + n.text + '</a></li>';
    }).join('');
    const routeLinks = BH_DATA.routes.map(function (r) {
      return '<li><a href="routes.html#' + r.id + '">' + r.name + '</a></li>';
    }).join('');

    host.innerHTML =
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-col">' +
              '<div class="footer-brand">' +
                '<span class="brand-logo">' + ICON.wave + '</span>' +
                '<span class="brand-text"><strong>北海</strong><em>BEIHAI · 我的家乡</em></span>' +
              '</div>' +
              '<p style="font-size:14px;line-height:1.9">一座被北部湾环抱的小城：银滩的沙、涠洲的浪、老街的骑楼、侨港的烟火，还有两千年海上丝路留下的珠光帆影。</p>' +
              '<div class="footer-social" style="margin-top:18px">' +
                '<a href="#" aria-label="微信">' + ICON.wechat + '</a>' +
                '<a href="#" aria-label="微博">' + ICON.weibo + '</a>' +
                '<a href="#" aria-label="抖音">' + ICON.douyin + '</a>' +
              '</div>' +
            '</div>' +
            '<div class="footer-col"><h4>走进北海</h4><ul>' + quick + '</ul></div>' +
            '<div class="footer-col"><h4>精品路线</h4><ul>' + routeLinks + '</ul></div>' +
            '<div class="footer-col"><h4>旅行信息</h4><ul>' +
              '<li>最佳旅行季：9 月 - 次年 4 月</li>' +
              '<li>市花：三角梅</li>' +
              '<li>城市名片：南珠之乡</li>' +
              '<li>旅游热线：0779-12345</li>' +
            '</ul></div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© ' + new Date().getFullYear() + ' 我的家乡 —— 广西北海 | 文旅主题网站</span>' +
            '<span>海洋蓝 · 沙滩米白 · 珊瑚橙</span>' +
          '</div>' +
        '</div>' +
      '</footer>' +
      '<button class="to-top" id="toTop" type="button" aria-label="回到顶部">' + ICON.up + '</button>';
  }

  /* ---------- 交互：滚动 / 抽屉 / 入场 / 计数 ---------- */
  function bindHeader() {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('primaryNav');
    const mask = document.getElementById('navMask');
    const toTop = document.getElementById('toTop');
    const dark = document.body.getAttribute('data-header') === 'dark';

    function setNav(open) {
      nav.classList.toggle('is-open', open);
      mask.classList.toggle('is-open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('is-locked', open);
    }
    /* 底部导航条：把当前页签滚到可见区域（横向可滚动时） */
    const bar = document.getElementById('tabBar');
    if (bar) {
      const inner = bar.querySelector('.tabbar-inner');
      const cur = bar.querySelector('.tab.is-active');
      if (inner && cur) {
        requestAnimationFrame(function () {
          inner.scrollLeft = Math.max(0, cur.offsetLeft - inner.clientWidth / 2 + cur.offsetWidth / 2);
        });
      }
    }

    toggle.addEventListener('click', function () { setNav(!nav.classList.contains('is-open')); });
    mask.addEventListener('click', function () { setNav(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setNav(false); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) setNav(false); });

    function onScroll() {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (header) header.classList.toggle('is-stuck', y > 12);
      if (dark && header) header.classList.toggle('is-dark', y < 60);
      if (toTop) toTop.classList.toggle('is-show', y > 500);
    }
    header && header.classList.toggle('is-dark', !!dark);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    toTop && toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function bindReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    if (!('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          const d = parseInt(en.target.getAttribute('data-reveal'), 10) || 0;
          setTimeout(function () { en.target.classList.add('is-in'); }, d);
          io.unobserve(en.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  function bindCounters() {
    const nodes = document.querySelectorAll('[data-count]');
    if (!nodes.length) return;
    const run = function (el) {
      const target = parseFloat(el.getAttribute('data-count'));
      const dec = parseInt(el.getAttribute('data-decimal') || '0', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const dur = 1400, start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(dec) + suffix;
        if (p < 1) requestAnimationFrame(step);
      })(start);
    };
    if (!('IntersectionObserver' in window)) { nodes.forEach(run); return; }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
    }, { threshold: .4 });
    nodes.forEach(function (el) { io.observe(el); });
  }

  /* 图片加载失败兜底：换成同色系 SVG 占位，避免线上出现破图/空白
     （资源未上传、被限流 429、CDN 跨域失败等情况下仍能保持页面观感） */
  function placeholder(text) {
    const label = (text || '图片').slice(0, 10)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
      '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#0A5C7E"/><stop offset="1" stop-color="#3FB6E0"/>' +
      '</linearGradient></defs>' +
      '<rect width="400" height="300" fill="url(#g)"/>' +
      '<text x="200" y="156" text-anchor="middle" font-family="sans-serif" font-size="18" ' +
      'fill="rgba(255,255,255,.9)">' + label + '</text></svg>';
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  function applyFallback(el) {
    if (!el || el.tagName !== 'IMG' || el.getAttribute('data-fallback')) return;

    /* 第一层：assets/img/xxx.jpg 取不到时，尝试仓库根目录的同名文件
       （兼容素材被上传到根目录而不是 assets/img/ 的情况，站点仍能正常显示） */
    const src = el.getAttribute('src') || '';
    const m = src.match(/(?:^|\/)assets\/img\/([^/?#]+)$/);
    if (m && !el.getAttribute('data-retry-root')) {
      el.setAttribute('data-retry-root', '1');
      el.src = m[1];
      return;
    }

    /* 第二层：实在取不到，换成 SVG 占位，避免破图 */
    el.setAttribute('data-fallback', '1');
    el.src = placeholder(el.getAttribute('alt'));
  }

  /* 脚本一加载就注册（error 事件不冒泡，必须捕获阶段），
     否则会错过早于 mount 触发的 404 */
  document.addEventListener('error', function (e) { applyFallback(e.target); }, true);

  function bindImageFallback() {
    /* 兜住注册监听之前就已加载失败的图片 */
    Array.prototype.forEach.call(document.images, function (img) {
      if (img.complete && img.naturalWidth === 0) applyFallback(img);
    });
  }

  function mount() {
    renderHeader();
    renderFooter();
    bindHeader();
    bindReveal();
    bindCounters();
    bindImageFallback();
  }

  return { mount: mount, ICON: ICON, bindReveal: bindReveal, bindCounters: bindCounters, placeholder: placeholder };
})();


/* ===== carousel.js ===== */
;/* ============================================================
 *  carousel.js —— 轮播图（首页英雄区）
 *  支持：自动播放、悬停暂停、左右箭头、指示点、键盘、触摸滑动
 * ============================================================ */
window.BH_Carousel = (function () {
  const AUTO = 5600;

  /* 依据数据构建首页英雄轮播 */
  function buildHero(host, slides) {
    if (!host) return null;
    host.classList.add('carousel');
    host.innerHTML =
      slides.map(function (s, i) {
        const bg = s.photo || BH_ART.uri({ motif: s.motif, colors: s.colors });
        return '<div class="hero-slide' + (i === 0 ? ' is-active' : '') + '" data-slide="' + i + '" role="group" aria-label="' + (i + 1) + ' / ' + slides.length + '">' +
          '<div class="hero-media"><img src="' + bg + '" alt="' + s.title + '"' + (s.photo ? '' : ' loading="eager"') + '></div>' +
          '<div class="hero-body container">' +
            '<span class="badge badge--glass">' + s.sub + '</span>' +
            '<h1 class="hero-title">' + s.title + '</h1>' +
            '<p class="hero-desc">' + s.desc + '</p>' +
            '<div class="hero-actions">' +
              '<a class="btn btn--coral" href="' + s.btn.href + '">' + s.btn.text + '</a>' +
              '<a class="btn btn--ghost-light" href="routes.html">看看路线</a>' +
            '</div>' +
          '</div>' +
        '</div>';
      }).join('') +
      '<button class="carousel-arrow carousel-arrow--prev" type="button" aria-label="上一张">' + BH_UI.ICON.arrow.replace('<svg', '<svg style="transform:rotate(180deg)"') + '</button>' +
      '<button class="carousel-arrow carousel-arrow--next" type="button" aria-label="下一张">' + BH_UI.ICON.arrow + '</button>' +
      '<div class="carousel-dots">' +
        slides.map(function (s, i) {
          return '<button class="carousel-dot' + (i === 0 ? ' is-active' : '') + '" type="button" data-dot="' + i + '" aria-label="第 ' + (i + 1) + ' 张：' + s.title + '"></button>';
        }).join('') +
      '</div>';
    return init(host);
  }

  /* 为已存在的 .hero-slide 结构绑定交互 */
  function init(root) {
    const slides = Array.prototype.slice.call(root.querySelectorAll('.hero-slide'));
    if (slides.length < 1) return null;
    const dots = Array.prototype.slice.call(root.querySelectorAll('.carousel-dot'));
    const prev = root.querySelector('.carousel-arrow--prev');
    const next = root.querySelector('.carousel-arrow--next');
    let index = 0, timer = null, paused = false;

    function go(n) {
      index = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === index); });
    }
    function start() {
      stop();
      if (slides.length > 1) timer = setInterval(function () { if (!paused) go(index + 1); }, AUTO);
    }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    next && next.addEventListener('click', function () { go(index + 1); start(); });
    prev && prev.addEventListener('click', function () { go(index - 1); start(); });
    dots.forEach(function (d) {
      d.addEventListener('click', function () { go(parseInt(d.getAttribute('data-dot'), 10)); start(); });
    });

    root.addEventListener('mouseenter', function () { paused = true; });
    root.addEventListener('mouseleave', function () { paused = false; });
    document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { go(index + 1); start(); }
      if (e.key === 'ArrowLeft') { go(index - 1); start(); }
    });

    /* 触摸滑动 */
    let x0 = null;
    root.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    root.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 45) { go(index + (dx < 0 ? 1 : -1)); start(); }
      x0 = null;
    });

    go(0);
    start();
    return { go: go, stop: stop, start: start };
  }

  return { buildHero: buildHero, init: init };
})();


/* ===== lightbox.js ===== */
;/* ============================================================
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


/* ===== gallery.js ===== */
;/* ============================================================
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


/* ===== video.js ===== */
;/* ============================================================
 *  video.js —— 视频卡片网格 + 悬停预览封面 + 视频弹窗播放
 *  用法：<div id="videoGrid" data-videos></div>
 *
 *  封面策略（优先级由高到低）：
 *    1. data.js 中手写的 poster（真实照片）
 *    2. 由视频文件截取的真实帧（canvas 抽帧，结果缓存到 sessionStorage）
 *    3. js/art.js 生成的 SVG 插画
 *  桌面端（支持 hover 的设备）悬停卡片即静音循环预览视频片段。
 * ============================================================ */
window.BH_Video = (function () {
  let modal = null, videoEl = null, errorEl = null, closing = false;

  const PEEK_MAX = 12;              // 悬停预览最大循环时长（秒）
  const PEEK_DELAY = 260;           // 悬停触发延迟（毫秒）
  const CAPTURE_AT = 1.2;           // 抽帧时间点（秒）
  const canHover = window.matchMedia ? window.matchMedia('(hover: hover) and (pointer: fine)').matches : false;

  /* ---------------- 弹窗播放 ---------------- */
  function buildModal() {
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', '视频播放');
    modal.innerHTML =
      '<div class="modal-dialog">' +
        '<button class="modal-close" type="button" aria-label="关闭">' + BH_UI.ICON.close + '</button>' +
        '<div class="modal-media">' +
          '<video controls playsinline preload="metadata" poster=""></video>' +
          '<div class="modal-embed"></div>' +
          '<div class="media-error"></div>' +
        '</div>' +
        '<div class="modal-body"><h3></h3><p></p></div>' +
      '</div>';
    document.body.appendChild(modal);

    videoEl = modal.querySelector('video');
    errorEl = modal.querySelector('.media-error');
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    videoEl.addEventListener('error', function () {
      if (closing) return;                       // 关闭弹窗清空 src 时的假错误
      errorEl.innerHTML = describeError();
      errorEl.classList.add('is-show');
    });
    videoEl.addEventListener('playing', function () { errorEl.classList.remove('is-show'); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
  }

  /* 错误诊断：区分「环境不支持 H.264」与「文件缺失/路径错误」 */
  function describeError() {
    const h264 = videoEl.canPlayType('video/mp4; codecs="avc1.640028, mp4a.40.2"');
    if (!h264) {
      return '当前浏览器或预览环境<b>不支持 H.264（MP4）视频解码</b>。<br>' +
        '请改用 <b>Chrome / Edge / Firefox</b> 直接打开本页；IDE 内置预览、' +
        '部分套壳浏览器未内置 H.264 解码器，会表现为视频黑屏或无法播放。';
    }
    return '视频资源加载失败（' + (location.protocol === 'file:' ? 'file:// 本地直开' : location.protocol) + '）。<br>' +
      '请确认 <b>assets/video/</b> 下存在对应 mp4 文件，且 js/data.js 中 src 路径一致；' +
      '若已部署到公网，依次检查：① 文件是否真的进了仓库（<b>git ls-files assets</b>）；' +
      '② 是否误用了 <b>Git LFS</b>（Pages 不支持，线上会拿到指针文件）；' +
      '③ 是否触发平台带宽限制（Network 里状态码为 <b>429</b>）；④ 单文件是否超过平台上限。';
  }

  /* 选源：优先 MP4/H.264；环境不支持且提供了 webm 备源时改用 WebM */
  function pickSource(item) {
    if (item.webm) {
      const h264 = videoEl.canPlayType('video/mp4; codecs="avc1.640028, mp4a.40.2"');
      if (!h264) return item.webm;
    }
    return item.src;
  }

  function open(item) {
    if (!modal) buildModal();
    modal.querySelector('h3').textContent = item.title;
    modal.querySelector('p').textContent = item.desc;
    errorEl.classList.remove('is-show');

    const embedBox = modal.querySelector('.modal-embed');
    if (item.embed) {
      /* 外链嵌入模式：播放第三方平台的视频，站点里不放本地大文件 */
      try { videoEl.pause(); } catch (e) { /* noop */ }
      videoEl.removeAttribute('src');
      videoEl.style.display = 'none';
      embedBox.innerHTML = '<iframe src="' + item.embed + '" title="' + item.title +
        '" allowfullscreen frameborder="0" scrolling="no" loading="lazy"></iframe>';
      embedBox.classList.add('is-show');
    } else {
      embedBox.classList.remove('is-show');
      embedBox.innerHTML = '';
      videoEl.style.display = '';
      videoEl.poster = item._poster || item.poster || BH_ART.uri({ motif: item.motif, colors: item.colors });
      videoEl.src = pickSource(item);
    }

    modal.classList.add('is-open');
    document.body.classList.add('is-locked');
    if (!item.embed) {
      const p = videoEl.play();
      if (p && p.catch) p.catch(function () { /* 浏览器自动播放限制，交由用户点击 */ });
    }
  }

  function close() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    const embedBox = modal.querySelector('.modal-embed');
    if (embedBox) { embedBox.classList.remove('is-show'); embedBox.innerHTML = ''; }
    closing = true;
    try {
      videoEl.pause();
      videoEl.removeAttribute('src');
      videoEl.load();
    } catch (e) { /* noop */ }
    setTimeout(function () { closing = false; }, 0);
  }

  /* ---------------- 抽帧：用视频真实画面做封面 ---------------- */
  function capture(item) {
    return new Promise(function (resolve) {
      const key = 'bh:poster:' + item.id;
      let cached = null;
      try { cached = sessionStorage.getItem(key); } catch (e) { cached = null; }
      /* 只接受合法的 data URL；坏缓存直接丢弃，避免整个会话都用一张失败封面 */
      if (cached && cached.indexOf('data:image/') === 0) { item._poster = cached; return resolve(cached); }
      if (cached) { try { sessionStorage.removeItem(key); } catch (e) { /* noop */ } }

      const v = document.createElement('video');
      v.muted = true;
      v.playsInline = true;
      v.preload = 'auto';
      v.src = item.src;

      let done = false;
      const finish = function (url) {
        if (done) return;
        done = true;
        clearTimeout(timer);
        v.removeAttribute('src');
        try { v.load(); } catch (e) { /* noop */ }
        if (url) {
          item._poster = url;
          try { sessionStorage.setItem(key, url); } catch (e) { /* 超配额则忽略缓存 */ }
        }
        resolve(url);
      };
      const timer = setTimeout(function () { finish(null); }, 8000);

      v.addEventListener('loadeddata', function () {
        try { v.currentTime = Math.min(CAPTURE_AT, (v.duration || 6) * 0.2); } catch (e) { /* noop */ }
        shoot();
      });
      v.addEventListener('seeked', shoot);
      v.addEventListener('error', function () { finish(null); });

      function shoot() {
        if (done || !v.videoWidth) return;
        try {
          const c = document.createElement('canvas');
          const w = 640;
          c.width = w;
          c.height = Math.round(w * v.videoHeight / v.videoWidth);
          c.getContext('2d').drawImage(v, 0, 0, c.width, c.height);
          finish(c.toDataURL('image/jpeg', 0.72));
        } catch (e) { finish(null); }
      }
    });
  }

  /* 串行抽帧，避免多路视频同时解码 */
  function captureAll(host, items) {
    let chain = Promise.resolve();
    items.forEach(function (v, i) {
      chain = chain.then(function () {
        if (v.poster || !v.src) return null;    // 已有真实封面 / 纯外链条目，跳过
        return capture(v).then(function (url) {
          if (!url) return;
          const img = host.querySelector('[data-cover="' + i + '"]');
          if (!img) return;
          const next = new Image();
          next.onload = function () {
            img.src = url;
            img.classList.add('is-real');
          };
          next.src = url;
        });
      });
    });
    return chain;
  }

  /* ---------------- 悬停预览 ---------------- */
  function startPeek(card) {
    stopPeek();
    const v = card.querySelector('.video-peek');
    if (!v) return;
    if (!v.src) v.src = v.getAttribute('data-src') || v.getAttribute('src');
    v.currentTime = 0;
    const p = v.play();
    if (p && p.catch) p.catch(function () { /* 静音播放被拒：保持静态封面 */ });
    card.classList.add('is-peeking');
  }

  function stopPeek() {
    Array.prototype.forEach.call(document.querySelectorAll('.video-card.is-peeking'), function (c) {
      const v = c.querySelector('.video-peek');
      if (v) { v.pause(); v.currentTime = 0; }
      const bar = c.querySelector('.peek-bar');
      if (bar) bar.style.width = '0%';
      c.classList.remove('is-peeking');
    });
  }

  /* ---------------- 渲染 ---------------- */
  function mount(selector, items) {
    const host = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!host) return;
    host.classList.add('video-grid');
    host.innerHTML = items.map(function (v, i) {
      const cover = v.poster || BH_ART.uri({ motif: v.motif, colors: v.colors });
      return '<article class="video-card" data-idx="' + i + '" tabindex="0" role="button" aria-label="播放 ' + v.title + '">' +
        '<div class="video-thumb">' +
          '<img class="video-cover" data-cover="' + i + '" src="' + cover + '" alt="' + v.title + '" loading="lazy">' +
          /* 只有本地 mp4 才生成预览层；纯外链条目（仅 embed）不产生任何资源请求 */
          (v.src ? '<video class="video-peek" data-src="' + v.src + '" muted playsinline preload="metadata"></video>' : '') +
          '<span class="peek-bar"></span>' +
          (v.src ? '<span class="video-hint">' + BH_UI.ICON.play + '悬停预览</span>' : '') +
        '</div>' +
        '<span class="video-dur" data-dur="' + i + '"' + (v.src ? '' : ' style="display:none"') + '>' + v.dur + '</span>' +
        '<div class="video-mask"><span class="play-btn">' + BH_UI.ICON.play + '</span></div>' +
        '<div class="video-caption">' +
          '<h3>' + v.title + '</h3>' +
          '<p>' + v.desc + '</p>' +
        '</div>' +
      '</article>';
    }).join('');

    function fire(card) {
      stopPeek();
      open(items[parseInt(card.getAttribute('data-idx'), 10)]);
    }
    host.addEventListener('click', function (e) {
      const card = e.target.closest('.video-card');
      if (card) fire(card);
    });
    host.addEventListener('keydown', function (e) {
      const card = e.target.closest && e.target.closest('.video-card');
      if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); fire(card); }
    });

    /* 悬停预览（仅鼠标设备）+ 真实时长读取 */
    Array.prototype.forEach.call(host.querySelectorAll('.video-card'), function (card, i) {
      const peek = card.querySelector('.video-peek');
      const bar = card.querySelector('.peek-bar');
      if (!peek) return;         // 纯外链条目：没有本地视频，不预览也不抽帧

      peek.src = items[i].src;   // 立即挂载以便读取时长（preload=metadata，仅取头部）
      peek.addEventListener('loadedmetadata', function () {
        if (isFinite(peek.duration) && peek.duration > 0) {
          const node = card.querySelector('.video-dur');
          if (node) node.textContent = format(peek.duration);
        }
      });
      peek.addEventListener('timeupdate', function () {
        const span = Math.min(peek.duration || PEEK_MAX, PEEK_MAX);
        bar.style.width = Math.min(100, (peek.currentTime / span) * 100) + '%';
        if (peek.currentTime >= PEEK_MAX) peek.currentTime = 0;   // 循环预览片段
      });

      if (canHover) {
        let timer = null;
        card.addEventListener('mouseenter', function () {
          timer = setTimeout(function () { startPeek(card); }, PEEK_DELAY);
        });
        card.addEventListener('mouseleave', function () {
          clearTimeout(timer);
          if (card.classList.contains('is-peeking')) stopPeek();
        });
        card.addEventListener('focus', function () { startPeek(card); });
        card.addEventListener('blur', function () { if (card.classList.contains('is-peeking')) stopPeek(); });
      } else {
        const hint = card.querySelector('.video-hint');
        if (hint) hint.remove();
        peek.addEventListener('loadedmetadata', function () { peek.pause(); });
      }
    });

    /* 页面隐藏时停止所有预览 */
    document.addEventListener('visibilitychange', function () { if (document.hidden) stopPeek(); });

    /* 后台串行抽帧，用真实画面替换封面（全部卡片已配置真实 poster 时跳过，避免整段下载视频） */
    if (items.some(function (v) { return !v.poster && v.src; })) captureAll(host, items);
  }

  function format(s) {
    s = Math.round(s);
    const m = Math.floor(s / 60), r = s % 60;
    return (m < 10 ? '0' : '') + m + ':' + (r < 10 ? '0' : '') + r;
  }

  return { mount: mount, open: open, close: close, stopPeek: stopPeek };
})();


/* ===== routes.js ===== */
;/* ============================================================
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


/* ===== main.js ===== */
;/* ============================================================
 *  main.js —— 页面装配入口
 *  约定：页面通过 data-* 钩子声明需要的模块，本文件统一初始化。
 * ============================================================ */
(function () {
  const D = window.BH_DATA;

  /* 公共结构 */
  BH_UI.mount();

  /* 首页轮播 */
  const heroHost = document.getElementById('heroCarousel');
  if (heroHost) BH_Carousel.buildHero(heroHost, D.hero);

  /* 卡片画廊（含筛选 + 灯箱） */
  const SETS = { spots: D.spots, foods: D.foods, cultures: D.cultures, folkes: D.folkes };
  Array.prototype.forEach.call(document.querySelectorAll('[data-gallery]'), function (host) {
    const key = host.getAttribute('data-gallery');
    const items = SETS[key];
    if (!items) return;
    BH_Gallery.mount(host, items, { search: host.hasAttribute('data-search') });
  });

  /* 精选预览（首页 / 内页底部） */
  Array.prototype.forEach.call(document.querySelectorAll('[data-preview]'), function (host) {
    const key = host.getAttribute('data-preview');
    const n = parseInt(host.getAttribute('data-limit') || '3', 10);
    const items = (SETS[key] || []).slice(0, n);
    host.className = host.className || 'grid grid-3';
    host.innerHTML = items.map(BH_Gallery.cardHtml).join('');
    host.addEventListener('click', function (e) {
      const card = e.target.closest('.card');
      if (!card) return;
      const id = card.getAttribute('data-id');
      const all = SETS[key] || [];
      BH_Lightbox.open(all, all.findIndex(function (v) { return v.id === id; }));
    });
  });

  /* 静态插画占位：[data-art='{"motif":"beach","colors":["#3FB6E0","#0A5C7E"]}'] */
  Array.prototype.forEach.call(document.querySelectorAll('[data-art]'), function (box) {
    const cfg = JSON.parse(box.getAttribute('data-art'));
    const img = new Image();
    img.src = BH_ART.uri(cfg);
    img.alt = cfg.alt || cfg.motif;
    img.loading = 'lazy';
    box.appendChild(img);
  });

  /* 真实照片占位：[data-photo='assets/img/xxx.jpg'] */
  Array.prototype.forEach.call(document.querySelectorAll('[data-photo]'), function (box) {
    const src = box.getAttribute('data-photo');
    const img = new Image();
    img.src = src;
    img.alt = box.getAttribute('data-photo-alt') || '';
    img.loading = 'lazy';
    box.appendChild(img);
  });

  /* 视频 */
  const videoHost = document.querySelector('[data-videos]');
  if (videoHost) {
    const limit = parseInt(videoHost.getAttribute('data-limit') || '0', 10);
    BH_Video.mount(videoHost, limit ? D.videos.slice(0, limit) : D.videos);
  }

  /* 路线 */
  const routeHost = document.querySelector('[data-routes]');
  if (routeHost) BH_Routes.mount(routeHost, D.routes);

  /* 统计数字 */
  const statHost = document.querySelector('[data-stats]');
  if (statHost) {
    statHost.classList.add('stat-strip');
    statHost.innerHTML = D.stats.map(function (s) {
      return '<div class="stat">' +
        '<b><span data-count="' + s.num + '" data-decimal="' + (s.decimal || 0) + '" data-suffix="' + (s.suffix || '') + '">0</span></b>' +
        '<span>' + s.label + '</span></div>';
    }).join('');
    BH_UI.bindCounters();
  }

  /* 城市概况 */
  const factHost = document.querySelector('[data-facts]');
  if (factHost) {
    factHost.classList.add('fact-list');
    factHost.innerHTML = D.facts.map(function (f) {
      return '<div class="fact-item"><b>' + f.k + '</b><span>' + f.v + '</span></div>';
    }).join('');
  }

  /* 最佳季节 */
  const seasonHost = document.querySelector('[data-seasons]');
  if (seasonHost) {
    seasonHost.classList.add('season-grid');
    seasonHost.innerHTML = D.bestTime.map(function (s) {
      return '<div class="season-card"><h4>' + s.season + '</h4>' +
        '<p>' + s.desc + '</p>' +
        '<div class="stars">' + '★'.repeat(s.score) + '<span style="color:var(--ink-300)">' + '★'.repeat(5 - s.score) + '</span></div>' +
        '</div>';
    }).join('');
  }

  /* FAQ 折叠面板 */
  const faqHost = document.querySelector('[data-faq]');
  if (faqHost) {
    faqHost.classList.add('accordion');
    faqHost.innerHTML = D.faq.map(function (f, i) {
      return '<div class="acc-item' + (i === 0 ? ' is-open' : '') + '">' +
        '<button class="acc-head" type="button" aria-expanded="' + (i === 0) + '">' +
          '<span>' + f.q + '</span><span class="acc-icon">' + BH_UI.ICON.plus + '</span>' +
        '</button>' +
        '<div class="acc-body"><div class="acc-body-inner">' + f.a + '</div></div>' +
      '</div>';
    }).join('');
  }

  /* 折叠面板交互（含页面手写的结构） */
  Array.prototype.forEach.call(document.querySelectorAll('.accordion'), function (root) {
    root.addEventListener('click', function (e) {
      const head = e.target.closest('.acc-head');
      if (!head) return;
      const item = head.parentElement;
      const body = item.querySelector('.acc-body');
      const open = item.classList.toggle('is-open');
      head.setAttribute('aria-expanded', String(open));
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    });
    /* 初始化已展开项 */
    Array.prototype.forEach.call(root.querySelectorAll('.acc-item.is-open'), function (item) {
      const body = item.querySelector('.acc-body');
      body.style.maxHeight = body.scrollHeight + 'px';
    });
  });

  /* 页面加载完成后刷新一次入场动画观察 */
  window.addEventListener('load', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-reveal]'), function (el) {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add('is-in');
    });
  });
})();

