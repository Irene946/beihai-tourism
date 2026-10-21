/* ============================================================
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
