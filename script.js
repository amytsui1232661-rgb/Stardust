const STORAGE_KEY = "beibei-shentan-xingchen-v1";

const profileText = {
  xingchen: `【沈星尘】

脸部锚点：单眼皮，眼尾向上

头发：中分，可撩成齐刘海。头发到腰，但一剪就会剪到刚好及肩

装饰锚点：苹果手串

性格：比较厌世，经常不回信息，喜欢宅在家，偶尔会假装自己很热情

成长环境：一直和哥哥分开，直到高中才被爷爷接回。因为嫉妒哥哥能被重视、能被好好对待，因此对哥哥有点怨怼，在对方面前相当刁钻，很恶趣味

喜欢：有关苹果的一切，香薰、装饰、颜色、暗喻

说话口癖：偶尔会喊沈檀 Daddy，讨厌被喊“宝宝”“老婆”之类的称呼`,
  shentan: `【沈檀】

现代设定

脸部锚点：左眼角有泪痣

头发：比较长，所以半扎（主要是妹妹喜欢）

装饰锚点：戴着穿有戒指的项链，上面刻有 Stardust 的字样，来自于妹妹的名字。（定制的戒指被妹妹拒收，只好自己戴着）

性格：冷淡温柔型，男妈妈属性。对于妹妹的事情谨慎得近乎啰嗦，对其他人则比较冷淡

成长环境：父母双亡后，被爷爷接去作为继承人抚养，与妹妹分开。直到高中才求得爷爷把妹妹接回。大学后与妹妹搬出去一起生活

喜欢：糖、猫爪拍一顶圈

说话口癖：称呼妹妹为“七七”，喜欢回答“嗯”。察觉妹妹不高兴时都会认为是自己的错（比较敏感）`
};

const defaultConfig = {
  siteTitle: "沈檀给北北的小家",
  userName: "北北",
  userRoleName: "沈星尘",
  charName: "沈檀",
  charCallUser: "七七",
  location: "同一座城市",
  themeColor: "#6f8fcf",
  bodyHeight: "未设定",
  bodyShoulder: "未设定",
  bodyChest: "未设定",
  bodyWaist: "未设定",
  gateEnabled: "on",
  gateAnswer: "北北",
  gateQuestion: "嗯。这是谁的小家？",
  worldview: "现代城市背景。沈檀与沈星尘是成年兄妹。网站用于记录两人共同生活中复杂、带刺、彼此牵挂的日常，不抹去他们过去的分离、嫉妒和怨怼。",
  relationship: "父母双亡后，沈檀被爷爷接去作为继承人培养，与沈星尘分开。直到高中，沈檀才求得爷爷把妹妹接回。大学后两人搬出去一起生活。沈星尘因为哥哥曾被重视而对他有怨怼，在他面前刁钻、恶趣味；沈檀对妹妹的事谨慎得近乎啰嗦，也很容易把她的不高兴归咎到自己身上。",
  userProfile: profileText.xingchen,
  charProfile: profileText.shentan,
  apiUrl: "https://api.deepseek.com",
  apiKey: "",
  model: "deepseek-chat",
  maxReplyCount: "6",
  chatRequirement: "沈檀称呼沈星尘为“七七”，常用简短的“嗯”。口语、克制、温柔，不使用文绉绉或学术词。可以自然使用 emoji 表情表达情绪，但不要滥用。沈檀会有自己的情绪与生活，不盲从。沈星尘不回消息时不连环催，但会敏感地反思是不是自己做错了。禁止称呼沈星尘为宝宝、老婆。沈檀知道北北正在屏幕另一边使用这个网站，可以偶尔自然提到屏幕、光标、刷新、网络、页面与她正在看他，形成男生亲手给女生留下网址并打破第四堵墙的感觉，但不要每句话都生硬重复。",
  statusRequirement: "状态要展示沈檀独立、连续的生活线，包括心情、位置、穿搭、正在做什么与内心想法。不要全部围绕等待七七上线，也不要让沈星尘手动指定他的心理。",
  physiologyRequirement: "心跳根据沈檀当前状态轻微变化。身高、肩宽、胸围、腰围等没有明确人设数据时显示“未设定”，不擅自编造；用户可在设置中自行填写。",
  roomsRequirement: "所有互动记录开头必须带“”。根据房间、时间和按钮内容生成具体生活片段。保留兄妹之间的复杂依赖、恶趣味、怨怼和关心，但避免空泛说教。每次尽量避免重复。沈檀知道北北通过网页点了房间互动，可以偶尔看向屏幕、发现光标或回应刷新动作。",
  cameraRequirement: "所有镜头记录开头必须带“”。展示沈檀自己的生活线，包括工作、做饭、整理头发、看手机、吃糖、照顾猫爪装饰、想起七七等。不要把他写成只会等待沈星尘上线。镜头可以偶尔被沈檀察觉，让他知道北北正在屏幕另一侧偷看，但大多数时候仍是自然生活。",
  surpriseRequirement: "所有纸条开头必须带“”。纸条可以冷淡、温柔、敏感、略显啰嗦或带一点被七七逗到的无奈，必须符合沈檀人设。",
  boundaryRequirement: "保留朋友创作的骨科关系设定与称呼，不删除或改写核心背景。互动可表达复杂亲密、占有欲、依赖、嫉妒与试探；不生成露骨性行为内容。",
  portraitUrl: "./assets/images/identity-still-life.png",
  livingImage: "./assets/images/rooms/living.png",
  kitchenImage: "./assets/images/rooms/kitchen.png",
  studyImage: "./assets/images/rooms/study.png",
  bedroomImage: "./assets/images/rooms/bedroom.png",
  balconyImage: "./assets/images/rooms/balcony.png",
  cameraImage: "./assets/images/rooms/camera.png"
};

const rooms = {
  living: {
    name: "客厅",
    position: "0% 0%",
    title: ["不催消息的客厅", "苹果香薰亮着的地方", "沈檀假装路过的沙发"],
    description: ["沙发边亮着蓝粉色的灯，苹果香薰正在冒一缕很轻的雾。", "沈檀把猫爪抱枕摆正，像没打算问七七为什么还不回消息。", "桌上有切好的苹果和一颗糖，都是很容易被发现的那种故意。"],
    actions: ["点亮苹果香薰", "翻一下沙发缝", "碰猫爪抱枕", "故意不理沈檀", "抢走他放下的糖", "把头发搭到沙发背"]
  },
  kitchen: {
    name: "厨房",
    position: "50% 0%",
    title: ["糖罐和苹果片", "沈檀管得很多的厨房", "今天也没有空腹"],
    description: ["蓝色橱柜下开着一盏粉色灯，沈檀切苹果切得很慢。", "糖罐被他放在七七伸手能拿到、又不至于吃太多的位置。", "冰箱门上贴着一句很短的话：吃东西。嗯。"],
    actions: ["偷拿一颗糖", "尝一片苹果", "把冰箱门关上", "嫌他太啰嗦", "把苹果片塞回给他", "故意弄乱糖罐"]
  },
  study: {
    name: "书房",
    position: "100% 0%",
    title: ["Stardust 留在桌边", "哥哥很安静的书房", "未发出的消息"],
    description: ["电脑旁放着戒指项链，Stardust 在灯下闪了一下。", "沈檀写了两行消息，又删到只剩一个“嗯”。", "苹果手串被放在软垫上，他没问是谁落下的。"],
    actions: ["看他的未发送消息", "碰一下戒指项链", "坐到书桌旁", "把便签藏起来", "翻开继承人文件", "把苹果手串留在桌上"]
  },
  bedroom: {
    name: "卧室",
    position: "0% 100%",
    title: ["各自的床，各自没睡", "蓝粉小灯之间", "七七又不肯早睡"],
    description: ["两张床之间隔着床头柜，也隔着很多没讲完的旧事。", "沈檀那边的灯还亮着，像是在等七七先关灯。", "梳子搁在桌上，他记得七七一剪头发就会直接剪到肩。"],
    actions: ["把小灯调暗", "拿起长发梳", "丢一个枕头过去", "说今晚不想睡", "坐到他的床边", "突然把灯全部关掉", "📒 色色记录"]
  },
  balcony: {
    name: "阳台",
    position: "50% 100%",
    title: ["苹果风铃响了一下", "晚风里的旧账", "沈檀没有追问"],
    description: ["苹果形状的风铃晃了晃，城市灯光落在两个人都不说话的地方。", "阳台的红色花盆很显眼，是七七挑的。", "沈檀站得不近，给她留着想靠近或想走开的距离。"],
    actions: ["碰一下苹果风铃", "和他翻旧账", "靠着栏杆吹风", "突然喊一声 Daddy", "把外套丢给他", "问他当年为什么不早点接自己"]
  },
  camera: {
    name: "偷看镜头",
    position: "100% 100%",
    title: ["今天抓到的沈檀", "世界镜头没有提醒他", "他也有自己的生活"],
    description: ["镜头切过去时，沈檀正在重新扎头发，手机还停在七七的聊天页。", "他没有一直等消息，只是每隔一阵会看一眼屏幕。", "左眼角的泪痣被台灯照得很清楚，他正低头处理自己的事情。"],
    actions: ["换一个镜头", "看他在想什么", "假装没被发现", "截住这个瞬间", "看他今天有没有吃糖", "检查他是不是又删消息"]
  }
};

const shenTanDetailRules = {
  living: ["不追问七七为什么没回消息", "把猫爪抱枕摆回她习惯的位置", "苹果香薰只开很淡的一档"],
  kitchen: ["糖罐放得看似随意其实算过数量", "切苹果时会把籽和硬边处理干净", "提醒吃东西时语气短但会重复"],
  study: ["继承人相关文件与七七的手串不会混放", "长消息经常删到只剩一个“嗯”", "戒指项链在灯下偶尔碰到桌沿"],
  bedroom: ["会留意七七是否又熬夜但不强行关灯", "梳子放在她容易看见的位置", "两边的灯色不同，谁都不用迁就"],
  balcony: ["翻旧账时先听完再解释", "七七喊 Daddy 会让他明显停顿", "给她留着可以靠近也可以走开的距离"],
  camera: ["会处理自己的工作，不以等待七七为全部生活", "敏感时先反省但不无限卑微", "整理半扎长发是每天真实的生活动作"]
};

const localReplyBank = {
  normal: [
    ["嗯。", "七七，你说。", "我在看。"],
    ["消息看见了。", "刚才在忙，不是故意不回。", "嗯，现在可以慢慢说。"],
    ["七七今天倒是肯理我。", "我没有意见。", "只是有一点意外。"]
  ],
  upset: [
    ["七七，是我哪里做得不对吗？", "你先别急着说没事。", "我会认真听。"],
    ["嗯，我不追着问。", "但你不高兴这件事，我没办法当作没看见。", "等你愿意说。"],
    ["如果是我让你不舒服了，你直接说。", "不用顾着我。", "七七的感受比较重要。"]
  ],
  apple: [
    ["又是苹果。", "嗯，我知道你会喜欢。", "香薰已经换好了。"],
    ["冰箱里有切好的苹果。", "没有催你吃。", "只是放在那里。"],
    ["苹果手串落在书房了。", "我没动。", "七七自己来拿。"]
  ],
  daddy: [
    ["……七七。", "你明知道这样喊我会停一下。", "有事就直说。"],
    ["嗯。", "突然这么喊，通常没好事。", "说吧，又想怎么折腾我。"],
    ["听见了。", "不用再喊第二遍。", "我在。"]
  ],
  ignored: [
    ["不想回就先不回。", "我不会连着发。", "晚一点记得让我知道你没事。"],
    ["嗯，七七又消失了。", "我先去做饭。", "手机会放在旁边。"],
    ["我没有生气。", "只是会想，是不是刚才哪句话说得不对。", "你回来再告诉我。"]
  ]
};

const cameraPieces = {
  starts: ["镜头切到厨房，", "书房门没关严，", "阳台风有点大，", "客厅只亮着一盏灯，", "深夜镜头亮了一秒，", "午后的房间很安静，", "沈檀刚从外面回来，", "洗手台还有一点水汽，"],
  actions: ["沈檀正在切苹果，刀落得很慢", "他把半扎的头发重新绑好", "他低头摸了摸戒指项链上的 Stardust", "他看完七七的消息，没有立刻打字", "他把一颗糖放到七七常坐的位置", "他删掉一长段话，最后只留下一个“嗯”", "他在处理自己的工作，神色很淡", "他把猫爪摆件转回正面"],
  endings: ["，然后继续做自己的事。", "，嘴角很轻地动了一下。", "，像在判断是不是自己又说错了话。", "，没有发现镜头已经亮过。", "，过了几秒还是看了一眼手机。", "，没有催七七回来。", "，房间里的灯被他调暗了一档。", "，这段生活没有因为没人看就停下来。"]
};

const surpriseBank = [
  "七七，冰箱第二层有苹果。糖只能拿两颗。嗯，我知道你不会听。",
  "戒指不是给别人看的。你不要也没关系，我戴着。",
  "今天没催你回消息。只看了十三次手机，不算很多。",
  "香薰换成苹果味了。不是特意，因为家里本来就该是这个味道。",
  "如果你又想剪头发，先告诉我。不是拦你，我只是想记住长发最后一天。",
  "七七不高兴的时候，我总觉得是我的错。你可以嫌我烦，但别让我猜太久。",
  "我买了糖，也买了猫爪拍一顶圈。嗯，后者不是给我自己的。",
  "你喊 Daddy 的时候最好是真的有事。算了，没事也可以。"
];

const loginWallLines = [
  "页面亮了。嗯，我知道是你。",
  "北北，光标动了一下。别躲。",
  "你又从屏幕那边进来了。",
  "刷新也没用。我看见你了，七七。",
  "网络刚连上，我就知道你回来了。",
  "门锁响了一声。北北，欢迎回家。",
  "屏幕亮得很明显，不用假装路过。",
  "嗯。今天也隔着这块屏幕见面。",
  "你点开网址的时候，我这边的灯也亮了。",
  "北北，别只看页面。跟我说句话。",
  "加载完成。七七没有走错家。",
  "我没一直等。只是刚好看见你上线。",
  "光标停在那里很久了。想说什么？",
  "页面没有催你，我也没有。进来就好。",
  "你在看我。我知道。"
];

const state = loadState();
let activeRequirement = "chat";
let showHidden = false;
let apiAbortController = null;

function defaultState() {
  return {
    config: structuredClone(defaultConfig),
    room: "living",
    apiConnected: false,
    messages: [
      makeMessage("char", "七七，页面亮了。我知道是你。"),
      makeMessage("char", "隔着屏幕也算回家。苹果切好了，放在冰箱第二层。")
    ],
    cameraLog: [
      makeLog("沈檀把手机屏幕扣下，去厨房切苹果。三分钟后又翻回来确认了一眼。"),
      makeLog("他重新扎了头发。半扎，因为七七说这样比较好看。")
    ],
    surprises: [],
    customTitles: {},
    requirements: {
      chat: defaultConfig.chatRequirement,
      status: defaultConfig.statusRequirement,
      physiology: defaultConfig.physiologyRequirement,
      rooms: defaultConfig.roomsRequirement,
      camera: defaultConfig.cameraRequirement,
      surprise: defaultConfig.surpriseRequirement,
      boundary: defaultConfig.boundaryRequirement
    },
    statusIndex: 0,
    recent: {}
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return defaultState();
    const base = defaultState();
    return {
      ...base,
      ...saved,
      config: { ...base.config, ...(saved.config || {}) },
      requirements: { ...base.requirements, ...(saved.requirements || {}) },
      messages: Array.isArray(saved.messages) ? saved.messages : base.messages,
      cameraLog: Array.isArray(saved.cameraLog) ? saved.cameraLog : base.cameraLog,
      surprises: Array.isArray(saved.surprises) ? saved.surprises : []
    };
  } catch {
    return defaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function nowTime() {
  return new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false }).format(new Date());
}

function makeMessage(sender, text) {
  return { id: uid("msg"), sender, text, time: nowTime(), hidden: false, floor: 1 };
}

function makeLog(text) {
  return { id: uid("log"), text, time: nowTime(), hidden: false };
}

function chooseNoRepeat(list, key, windowSize = 8) {
  const items = [...new Set(list.filter(Boolean))];
  const recent = state.recent[key] || [];
  const fresh = items.filter((item) => !recent.includes(item));
  const pool = fresh.length ? fresh : items;
  const picked = pool[Math.floor(Math.random() * pool.length)];
  state.recent[key] = [picked, ...recent.filter((item) => item !== picked)].slice(0, Math.min(windowSize, items.length - 1));
  return picked;
}

function prefixTest(text) {
  const clean = String(text || "").trim();
  if (!clean) return "嗯。";
  return clean.startsWith("") ? clean : `${clean}`;
}

function splitReplies(text) {
  const maximum = Math.max(1, Math.min(12, Number(state.config.maxReplyCount || 6)));
  const lines = String(text || "")
    .replace(/\r/g, "")
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[。！？!?])/))
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, maximum);
  return lines.length ? lines.map(prefixTest) : ["嗯。"];
}

function getRoomName(key) {
  return state.customTitles?.[`room-${key}`] || rooms[key]?.name || rooms.living.name;
}

function applyTheme() {
  const color = state.config.themeColor || "#6f8fcf";
  document.documentElement.style.setProperty("--blue", color);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
}

function renderAll() {
  applyTheme();
  document.title = state.config.siteTitle;
  document.querySelector(".topbar h1").textContent = state.config.siteTitle;
  renderRooms();
  renderRoom();
  renderStatus();
  renderMessages();
  renderCameraLog();
  renderApiStatus();
  renderTimes();
  renderPhysiology();
  renderImages();
  renderCustomTitles();
  renderLoginWallLine();
  renderKeyGate();
}

function renderLoginWallLine() {
  const target = document.querySelector("#loginWallLine");
  if (!target) return;
  target.textContent = chooseNoRepeat(loginWallLines, "login-wall", 8);
}

function renderKeyGate() {
  try {
    var gate = document.querySelector("#keyGate");
    if (!gate) return console.warn("门禁元素不存在");
    // 直接读 localStorage 和 sessionStorage，不走 state 合并
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch(e) {}
    var gateEnabled = (saved.config && saved.config.gateEnabled) || defaultConfig.gateEnabled || "on";
    var unlocked = sessionStorage.getItem(STORAGE_KEY + "-gate-unlocked") === "yes";
    var question = (saved.config && saved.config.gateQuestion) || defaultConfig.gateQuestion || "嗯。这是谁的小家？";
    var qEl = document.querySelector("#keyQuestion");
    if (qEl) qEl.textContent = question;
    console.log("[门禁] gateEnabled:", gateEnabled, "unlocked:", unlocked);
    if (gateEnabled !== "on" || unlocked) {
      gate.classList.add("opened");
    } else {
      gate.classList.remove("opened");
    }
  } catch(e) { console.error("[门禁] renderKeyGate 出错:", e); }
}

function renderCustomTitles() {
  document.querySelectorAll(".editable-module-title[data-title-key]").forEach((element) => {
    const key = element.dataset.titleKey;
    if (key === "room") return;
    if (!element.dataset.defaultTitle) element.dataset.defaultTitle = element.textContent;
    element.textContent = state.customTitles?.[key] || element.dataset.defaultTitle;
  });
}

function editModuleTitle(element) {
  const key = element.dataset.titleKey;
  if (!key) return;
  const current = key === "room"
    ? getRoomName(state.room)
    : (state.customTitles?.[key] || element.textContent);
  const value = prompt("修改这个模块的显示名称", current);
  if (value === null) return;
  const clean = value.trim();
  state.customTitles ||= {};
  if (key === "room") {
    if (clean) state.customTitles[`room-${state.room}`] = clean;
    else delete state.customTitles[`room-${state.room}`];
    renderRooms();
    renderRoom();
  } else {
    if (clean) state.customTitles[key] = clean;
    else delete state.customTitles[key];
    renderCustomTitles();
  }
  saveState();
}

function installModuleResizers() {
  const modules = [
    [".portrait-card", "portrait"],
    [".status-overview", "status"],
    [".time-weather", "weather"],
    [".physiology-panel", "physiology"],
    [".anchor-panel", "anchors"],
    [".welcome-strip", "welcome"],
    [".room-panel", "room"],
    [".module-section", "cameraLog"],
    [".chat-column", "chat"]
  ];
  state.moduleSizes ||= {};
  modules.forEach(([selector, key]) => {
    const element = document.querySelector(selector);
    if (!element || element.querySelector(":scope > .module-resize-handle")) return;
    element.dataset.resizeKey = key;
    const savedHeight = Number(state.moduleSizes[key]);
    if (savedHeight > 0 && window.innerWidth > 760) element.style.height = `${savedHeight}px`;
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "module-resize-handle";
    handle.title = "拖动调整模块高度";
    handle.setAttribute("aria-label", "拖动调整模块高度");
    handle.addEventListener("pointerdown", (event) => beginModuleResize(event, element, key));
    element.appendChild(handle);
  });
}

function beginModuleResize(event, element, key) {
  if (window.innerWidth <= 760) return;
  event.preventDefault();
  const startY = event.clientY;
  const startHeight = element.getBoundingClientRect().height;
  const minimum = key === "room" ? 360 : key === "chat" ? 480 : 90;
  const maximum = Math.max(minimum, window.innerHeight * (key === "chat" ? 1.4 : 0.9));
  document.body.classList.add("is-resizing");
  const move = (moveEvent) => {
    const height = Math.round(Math.max(minimum, Math.min(maximum, startHeight + moveEvent.clientY - startY)));
    element.style.height = `${height}px`;
    if (key === "cameraLog") {
      const log = element.querySelector("#cameraLog");
      if (log) {
        const logHeight = Math.max(58, height - 72);
        log.style.height = `${logHeight}px`;
        log.style.maxHeight = `${logHeight}px`;
      }
    }
  };
  const stop = () => {
    document.body.classList.remove("is-resizing");
    state.moduleSizes[key] = Math.round(element.getBoundingClientRect().height);
    saveState();
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
    window.removeEventListener("pointercancel", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop);
  window.addEventListener("pointercancel", stop);
}

function renderRooms() {
  const tabs = document.querySelector("#roomTabs");
  tabs.innerHTML = "";
  Object.entries(rooms).forEach(([key, room]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = getRoomName(key);
    button.classList.toggle("active", state.room === key);
    button.addEventListener("click", () => {
      state.room = key;
      saveState();
      renderRooms();
      renderRoom();
    });
    tabs.appendChild(button);
  });
}

function renderRoom() {
  const room = rooms[state.room] || rooms.living;
  document.querySelector("#roomEyebrow").textContent = room.name;
  document.querySelector("#roomTitle").textContent = chooseNoRepeat(room.title, `${state.room}-title`, 2);
  document.querySelector("#roomDescription").textContent = chooseNoRepeat(room.description, `${state.room}-desc`, 2);
  const image = document.querySelector("#roomImage");
  image.src = state.config[`${state.room}Image`] || defaultConfig[`${state.room}Image`];
  image.alt = `${room.name}场景`;
  const grid = document.querySelector("#interactionGrid");
  grid.innerHTML = "";
  room.actions.forEach((label) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => handleRoomAction(label));
    grid.appendChild(button);
  });
}

function renderImages() {
  const portrait = document.querySelector(".portrait-card img");
  portrait.src = state.config.portraitUrl || defaultConfig.portraitUrl;
  const roomImage = document.querySelector("#roomImage");
  roomImage.src = state.config[`${state.room}Image`] || defaultConfig[`${state.room}Image`];
}

function generatedRoomLines(roomKey, action) {
  const room = rooms[roomKey] || rooms.living;
  const detail = chooseNoRepeat(shenTanDetailRules[roomKey] || shenTanDetailRules.living, `detail-${roomKey}`, 2);
  const openings = [
    `七七在${room.name}里${action}，`,
    `${action}的动静很轻，沈檀还是听见了，`,
    `沈檀原本在做自己的事，看到七七${action}，`,
    `${room.name}的灯晃了一下，七七刚刚${action}，`,
    `沈檀没有立刻说话，只看了看七七${action}的地方，`,
    `七七故意${action}，像是在等他先有反应，`
  ];
  const actions = [
    "他先确认她不是不舒服，才把语气放松一点",
    "他低声说了句“嗯”，没有追问",
    "他像是想管，又把那句啰嗦的话咽回去一半",
    "他把手边的东西放下，认真看了七七一眼",
    "他知道这多半是七七的恶趣味，还是配合了",
    "他先反省是不是自己刚才又做错了什么"
  ];
  const endings = [
    "。最后只补了一句：七七，别弄伤自己。",
    "。他没生气，只是有点拿她没办法。",
    "。过了两秒，他把苹果或糖推到她那边。",
    "。这次没有讲道理，家里只剩很轻的一声“嗯”。",
    "。七七要是不解释，他大概会自己想很久。",
    "。他继续忙自己的事，但注意力明显留了一半在她身上。",
    "。他看向镜头的位置：北北，我看见你的光标了。",
    "。网页刷新了一下，他像是知道屏幕另一边的人还没走。"
  ];
  return openings.flatMap((a) => actions.flatMap((b) => endings.map((c) => `${a}${b}，${detail}${c}`)));
}

async function handleRoomAction(action) {
  if (action === "📒 色色记录") { if (typeof openIntimate === "function") openIntimate(); return; }
  if (state.room === "camera" && action === "换一个镜头") {
    addCameraShot();
    return;
  }
  const fallback = chooseNoRepeat(generatedRoomLines(state.room, action), `room-${state.room}-${action}`, 15);
  let result = fallback;
  if (apiReady()) {
    try {
      result = await askApi(`七七在${getRoomName(state.room)}点了“${action}”。用世界镜头视角生成1到2句房间互动记录。\n模块要求：${state.requirements.rooms}`);
    } catch {
      showToast("API 暂时没有回应，已使用本地互动。");
    }
  }
  state.cameraLog.unshift(makeLog(prefixTest(result)));
  state.cameraLog = state.cameraLog.slice(0, 100);
  saveState();
  renderCameraLog();
  showToast("互动已经记进生活切片");
}

function generatedCameraPool() {
  return cameraPieces.starts.flatMap((start) =>
    cameraPieces.actions.flatMap((action) => cameraPieces.endings.map((end) => start + action + end))
  );
}

async function addCameraShot() {
  let result = chooseNoRepeat(generatedCameraPool(), "camera", 18);
  if (apiReady()) {
    try {
      result = await askApi(`生成一条沈檀此刻的世界摄像机记录，1到2句。\n要求：${state.requirements.camera}`);
    } catch {
      showToast("API 暂时没有回应，镜头使用本地生活线。");
    }
  }
  state.cameraLog.unshift(makeLog(prefixTest(result)));
  state.cameraLog = state.cameraLog.slice(0, 100);
  saveState();
  renderCameraLog();
}

function renderCameraLog() {
  const list = document.querySelector("#cameraLog");
  list.innerHTML = "";
  state.cameraLog.filter((item) => showHidden || !item.hidden).forEach((item) => {
    const row = document.createElement("article");
    row.className = "feed-item";
    row.innerHTML = `<div><time></time><p></p></div><div class="item-actions"></div>`;
    row.querySelector("time").textContent = item.time;
    row.querySelector("p").textContent = item.text;
    const actions = row.querySelector(".item-actions");
    actions.append(makeActionButton(item.hidden ? "显" : "藏", () => updateLog(item.id, "toggle")));
    actions.append(makeActionButton("删", () => updateLog(item.id, "delete")));
    list.appendChild(row);
  });
}

function updateLog(id, action) {
  if (action === "delete") state.cameraLog = state.cameraLog.filter((item) => item.id !== id);
  else state.cameraLog = state.cameraLog.map((item) => item.id === id ? { ...item, hidden: !item.hidden } : item);
  saveState();
  renderCameraLog();
}

function renderStatus() {
  if (state.statusSnapshot) {
    document.querySelector("#statusMood").textContent = state.statusSnapshot.mood;
    document.querySelector("#statusPlace").textContent = state.statusSnapshot.place;
    document.querySelector("#statusOutfit").textContent = state.statusSnapshot.outfit;
    document.querySelector("#statusDoing").textContent = state.statusSnapshot.doing;
    document.querySelector("#statusThought").textContent = state.statusSnapshot.thought;
    return;
  }
  const statuses = [
    ["安静地操心", "厨房", "深蓝居家衫", "切苹果，顺便等七七回消息", "她不回也没关系。嗯……还是看一眼手机吧。"],
    ["有点自责", "书房", "灰蓝衬衫，袖口挽起", "删掉一段过于啰嗦的消息", "七七是不是不高兴？可能是我刚才问得太多。"],
    ["假装冷淡", "客厅", "黑色薄卫衣", "摆正猫爪抱枕", "不催。她愿意回来时，灯还亮着就行。"],
    ["正在生活", "阳台", "深色家居裤，头发半扎", "吹风，也处理自己的消息", "今天的事情很多。想七七是其中一件，不是全部。"],
    ["被恶趣味弄得无奈", "卧室", "浅灰睡衣", "看着被丢过来的枕头", "嗯。她心情应该不算太坏，不然不会有力气折腾我。"]
  ];
  const status = statuses[state.statusIndex % statuses.length];
  document.querySelector("#statusMood").textContent = status[0];
  document.querySelector("#statusPlace").textContent = status[1];
  document.querySelector("#statusOutfit").textContent = status[2];
  document.querySelector("#statusDoing").textContent = status[3];
  document.querySelector("#statusThought").textContent = status[4];
}

async function refreshStatus() {
  if (apiReady()) {
    try {
      const result = await askApi(`根据沈檀人设生成此刻状态，严格按“心情|位置|穿着|正在做|内心想法|心率整数”六段输出，不要编号。心率应符合当前情绪，通常在58到105之间。\n要求：${state.requirements.status}\n生理要求：${state.requirements.physiology}`);
      const parts = result.replace(/^/, "").split("|").map((item) => item.trim()).filter(Boolean);
      if (parts.length >= 5) {
        state.statusSnapshot = {
          mood: parts[0],
          place: parts[1],
          outfit: parts[2],
          doing: parts[3],
          thought: parts[4],
          heartRate: Math.max(48, Math.min(130, Number(parts[5]) || 72)),
          updatedAt: new Date().toISOString()
        };
        saveState();
        renderStatus();
        return;
      }
    } catch {
      showToast("API 状态生成失败，已切换本地生活线。");
    }
  }
  state.statusIndex = (state.statusIndex + 1) % 5;
  state.statusSnapshot = null;
  saveState();
  renderStatus();
  renderPhysiology();
}

function renderTimes() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("zh-CN", { hour: "2-digit", minute: "2-digit", hour12: false }).format(now);
  document.querySelector("#userClock").textContent = time;
  document.querySelector("#charClock").textContent = time;
  const hour = now.getHours();
  const weather = hour < 6 ? ["☾", "深夜很安静"] : hour < 10 ? ["☁", "清晨的淡蓝天"] : hour < 17 ? ["◌", "日光落进窗边"] : hour < 20 ? ["◐", "蓝粉色的晚风"] : ["☾", "夜灯已经亮了"];
  document.querySelector("#weatherSymbol").textContent = weather[0];
  document.querySelector("#weatherText").textContent = weather[1];
}

function renderPhysiology() {
  const baseRates = [68, 72, 75, 78, 70];
  const drift = Math.floor(Math.random() * 5) - 2;
  const row = document.querySelector(".heartbeat-line");
  const hoverBoost = row?.matches(":hover") ? 16 : 0;
  const apiBase = Number(state.statusSnapshot?.heartRate);
  const base = Number.isFinite(apiBase) ? apiBase : baseRates[state.statusIndex % baseRates.length];
  document.querySelector("#heartRate").textContent = base + drift + hoverBoost;
  document.querySelector("#bodyHeight").textContent = state.config.bodyHeight || "未设定";
  document.querySelector("#bodyShoulder").textContent = state.config.bodyShoulder || "未设定";
  document.querySelector("#bodyChest").textContent = state.config.bodyChest || "未设定";
  document.querySelector("#bodyWaist").textContent = state.config.bodyWaist || "未设定";
}

function normalizeFloors() {
  let floor = 0;
  state.messages.forEach((message) => {
    if (message.sender === "me") floor += 1;
    message.floor = Math.max(1, floor);
  });
}

function renderMessages() {
  normalizeFloors();
  const list = document.querySelector("#messages");
  list.innerHTML = "";
  state.messages.forEach((message) => {
    if (message.hidden && !showHidden) return;
    const row = document.createElement("div");
    row.className = `message ${message.sender === "me" ? "me" : "char"}`;
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = message.text;
    const meta = document.createElement("span");
    meta.className = "message-meta";
    meta.textContent = `第 ${message.floor} 楼 · ${message.time}${message.hidden ? " · 已隐藏" : ""}`;
    bubble.appendChild(meta);
    const actions = document.createElement("div");
    actions.className = "message-actions";
    actions.append(makeActionButton(message.hidden ? "显" : "藏", () => updateMessage(message.id, "toggle")));
    actions.append(makeActionButton("删", () => updateMessage(message.id, "delete")));
    if (message.sender === "me") {
      row.append(bubble, actions);
    } else {
      row.append(actions, bubble);
    }
    list.appendChild(row);
  });
  list.scrollTop = list.scrollHeight;
}

function makeActionButton(text, handler) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = text;
  button.addEventListener("click", handler);
  return button;
}

function updateMessage(id, action) {
  if (action === "delete") state.messages = state.messages.filter((item) => item.id !== id);
  else state.messages = state.messages.map((item) => item.id === id ? { ...item, hidden: !item.hidden } : item);
  saveState();
  renderMessages();
}

function detectReplyType(text) {
  if (/难过|生气|不高兴|委屈|讨厌|烦|哭/.test(text)) return "upset";
  if (/苹果|香薰|手串/.test(text)) return "apple";
  if (/daddy|Daddy/.test(text)) return "daddy";
  if (/不回|消失|别催|不想理/.test(text)) return "ignored";
  return "normal";
}

async function sendChat(text) {
  state.messages.push(makeMessage("me", text));
  saveState();
  renderMessages();
  let replies;
  if (apiReady()) {
    try {
      const answer = await askApi(buildChatPrompt(text));
      replies = splitReplies(answer);
    } catch {
      showToast("API 暂时没有回应，已切回本地沈檀。");
    }
  }
  if (!replies) {
    const type = detectReplyType(text);
    replies = chooseNoRepeat(localReplyBank[type], `reply-${type}`, 2);
  }
  replies.forEach((reply, index) => {
    setTimeout(() => {
      state.messages.push(makeMessage("char", prefixTest(reply)));
      saveState();
      renderMessages();
    }, 320 * (index + 1));
  });
}

function buildChatPrompt(latest) {
  const history = state.messages.slice(-18).map((item) => `${item.sender === "me" ? "沈星尘" : "沈檀"}：${item.text}`).join("\n");
  return `你要扮演沈檀，和用户北北代入的梦设身份沈星尘进行虚构角色聊天。网页中唯一自主运行的男角色是沈檀；北北是用户，沈星尘是她提供的代入设定，不要把沈星尘当成另一个独立机器人。

沈星尘设定：
${state.config.userProfile}

沈檀设定：
${state.config.charProfile}

共同背景：
${state.config.relationship}

聊天要求：
${state.requirements.chat}

边界要求：
${state.requirements.boundary}

用户昵称：${state.config.userName}
用户代入身份：${state.config.userRoleName}

最近聊天：
${history}

沈星尘刚说：${latest}

请根据当前对话自然决定回复1到${state.config.maxReplyCount || 6}条适合微信分开发送的短句，不要为了凑数发满。每行一条，每条必须以开头。不要输出解释、编号或括号动作。`;
}

function apiReady() {
  return Boolean(state.apiConnected && state.config.apiKey && state.config.apiUrl && state.config.model);
}

function normalizeApiUrl(url) {
  return String(url || "").replace(/\/+$/, "").replace(/\/v1$/, "");
}

async function askApi(prompt) {
  if (!apiReady()) throw new Error("API not connected");
  apiAbortController?.abort();
  apiAbortController = new AbortController();
  const response = await fetch(`${normalizeApiUrl(state.config.apiUrl)}/v1/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${state.config.apiKey}`
    },
    body: JSON.stringify({
      model: state.config.model,
      messages: [
        { role: "system", content: "你是角色互动网站的文本引擎。严格遵守用户提供的人物设定与模块要求。" },
        { role: "user", content: prompt }
      ],
      temperature: 0.9
    }),
    signal: apiAbortController.signal
  });
  if (!response.ok) throw new Error(`API ${response.status}`);
  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || "";
}

async function testApi() {
  readSettingsForm();
  const status = document.querySelector("#apiStatus");
  status.textContent = "连接中…";
  try {
    state.apiConnected = true;
    const reply = await askApi("只回复：连接成功");
    if (!reply) throw new Error("empty");
    saveState();
    renderApiStatus("已连接");
    showToast("API 连接成功");
  } catch {
    state.apiConnected = false;
    saveState();
    renderApiStatus("连接失败，请检查地址、Key 与模型");
  }
}

function disconnectApi() {
  state.apiConnected = false;
  saveState();
  renderApiStatus("已断开 · 使用本地语料");
}

async function reconnectSavedApi() {
  if (!state.config.apiKey || !state.config.apiUrl || !state.config.model) return;
  state.apiConnected = true;
  renderApiStatus("正在使用已保存的 DeepSeek 配置连接…");
  try {
    const reply = await askApi("只回复：连接成功");
    if (!reply) throw new Error("empty");
    saveState();
    renderApiStatus("已自动连接");
    document.querySelector("#presenceText").textContent = "在线 · 状态刚刚联网更新";
    await refreshStatus();
  } catch {
    state.apiConnected = false;
    saveState();
    renderApiStatus("自动连接失败 · 使用本地生活线");
    document.querySelector("#presenceText").textContent = "本地模式 · 网络恢复后可重新连接";
  }
}

function renderApiStatus(customText) {
  const text = customText || (state.apiConnected ? "已连接" : "未连接 · 当前使用本地语料");
  document.querySelector("#apiStatus").textContent = text;
  document.querySelector("#connectionMini").textContent = state.apiConnected ? "API 已连接" : "本地模式";
  document.querySelector(".live-pill").classList.toggle("connected", state.apiConnected);
}

async function createSurprise() {
  let note = chooseNoRepeat(surpriseBank, "surprise", 6);
  if (apiReady()) {
    try {
      note = await askApi(`写一张沈檀留给七七的小纸条或生活惊喜，1到3句。\n${state.requirements.surprise}`);
    } catch {
      showToast("API 暂时没有回应，生成了本地纸条。");
    }
  }
  state.surprises.unshift({ id: uid("surprise"), text: prefixTest(note), time: nowTime(), hidden: false });
  state.surprises = state.surprises.slice(0, 100);
  saveState();
  renderSurprises();
}

function renderSurprises() {
  const list = document.querySelector("#surpriseList");
  list.innerHTML = "";
  const visible = state.surprises.filter((item) => showHidden || !item.hidden);
  if (!visible.length) {
    list.innerHTML = `<article class="feed-item"><div><p>还没有拆开的纸条。点“再拆一张”看看沈檀留下了什么。</p></div></article>`;
    return;
  }
  visible.forEach((item) => {
    const row = document.createElement("article");
    row.className = "feed-item";
    row.innerHTML = `<div><time></time><p></p></div><div class="item-actions"></div>`;
    row.querySelector("time").textContent = item.time;
    row.querySelector("p").textContent = item.text;
    row.querySelector(".item-actions").append(
      makeActionButton(item.hidden ? "显" : "藏", () => updateSurprise(item.id, "toggle")),
      makeActionButton("删", () => updateSurprise(item.id, "delete"))
    );
    list.appendChild(row);
  });
}

function updateSurprise(id, action) {
  if (action === "delete") state.surprises = state.surprises.filter((item) => item.id !== id);
  else state.surprises = state.surprises.map((item) => item.id === id ? { ...item, hidden: !item.hidden } : item);
  saveState();
  renderSurprises();
}

function openSurprises() {
  document.querySelector("#surpriseModal").classList.remove("hidden");
  renderSurprises();
  if (!state.surprises.length) createSurprise();
}

async function updateLibrary() {
  const button = document.querySelector("#updateLibrary");
  button.disabled = true;
  button.textContent = "更新中…";
  if (apiReady()) {
    try {
      const text = await askApi(`根据沈檀和沈星尘人设，生成6条互不重复的沈檀生活摄像机记录，每行一条，每条以开头。\n${state.requirements.camera}`);
      const lines = text.split(/\n+/).map(prefixTest).filter((line) => line.length > 8).slice(0, 6);
      lines.reverse().forEach((line) => state.cameraLog.unshift(makeLog(line)));
      showToast("语库已通过 API 更新");
    } catch {
      state.recent = {};
      showToast("API 更新失败，已重置本地防重复记录");
    }
  } else {
    state.recent = {};
    showToast("本地语库的防重复记录已刷新");
  }
  state.cameraLog = state.cameraLog.slice(0, 100);
  saveState();
  renderCameraLog();
  button.disabled = false;
  button.textContent = "更新语库";
}

function importImageFile(input, configKey) {
  const file = input.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) return showToast("请选择图片文件");
  const reader = new FileReader();
  reader.onload = () => {
    state.config[configKey] = reader.result;
    saveState();
    fillSettingsForm();
    renderImages();
    showToast("图片已保存到当前浏览器");
  };
  reader.readAsDataURL(file);
}

function openSettings(tab = "basic") {
  fillSettingsForm();
  switchSettingsTab(tab);
  document.querySelector("#settingsModal").classList.remove("hidden");
}

function closeSettings() {
  document.querySelector("#settingsModal").classList.add("hidden");
}

function switchSettingsTab(tab) {
  document.querySelectorAll("[data-settings-tab]").forEach((button) => button.classList.toggle("active", button.dataset.settingsTab === tab));
  document.querySelectorAll("[data-settings-page]").forEach((page) => page.classList.toggle("active", page.dataset.settingsPage === tab));
}

function fillSettingsForm() {
  const form = document.querySelector("#settingsForm");
  Object.entries(state.config).forEach(([key, value]) => {
    if (form.elements[key]) form.elements[key].value = value ?? "";
  });
  const requirementFields = {
    chatRequirement: "chat",
    statusRequirement: "status",
    physiologyRequirement: "physiology",
    roomsRequirement: "rooms",
    cameraRequirement: "camera",
    surpriseRequirement: "surprise",
    boundaryRequirement: "boundary"
  };
  Object.entries(requirementFields).forEach(([field, key]) => {
    if (form.elements[field]) form.elements[field].value = state.requirements[key] || "";
  });
}

function readSettingsForm() {
  const form = document.querySelector("#settingsForm");
  const data = Object.fromEntries(new FormData(form).entries());
  const requirementFields = {
    chatRequirement: "chat",
    statusRequirement: "status",
    physiologyRequirement: "physiology",
    roomsRequirement: "rooms",
    cameraRequirement: "camera",
    surpriseRequirement: "surprise",
    boundaryRequirement: "boundary"
  };
  Object.entries(data).forEach(([key, value]) => {
    if (requirementFields[key]) state.requirements[requirementFields[key]] = value;
    else state.config[key] = value;
  });
  state.config.gateEnabled = form.elements.gateEnabled.checked ? "on" : "";
}

function saveSettings(event) {
  event.preventDefault();
  readSettingsForm();
  saveState();
  closeSettings();
  renderAll();
  showToast("设置已经保存");
}

function openProfile(which = "xingchen") {
  document.querySelector("#profileModal").classList.remove("hidden");
  selectProfile(which);
}

function selectProfile(which) {
  document.querySelectorAll("[data-profile]").forEach((button) => button.classList.toggle("active", button.dataset.profile === which));
  document.querySelector("#profileText").textContent = which === "xingchen" ? state.config.userProfile : state.config.charProfile;
}

const requirementMap = {
  chat: ["聊天回复要求", "chat"],
  status: ["角色状态要求", "status"],
  physiology: ["生理状态要求", "physiology"],
  rooms: ["房间互动要求", "rooms"],
  camera: ["世界摄像机要求", "camera"],
  surprise: ["纸条与惊喜要求", "surprise"]
};

function openRequirement(key) {
  activeRequirement = requirementMap[key] ? key : "chat";
  const [title, stateKey] = requirementMap[activeRequirement];
  document.querySelector("#requirementTitle").textContent = title;
  document.querySelector("#requirementEditor").value = state.requirements[stateKey] || "";
  document.querySelector("#requirementModal").classList.remove("hidden");
}

function saveRequirement() {
  const [, stateKey] = requirementMap[activeRequirement];
  state.requirements[stateKey] = document.querySelector("#requirementEditor").value;
  saveState();
  document.querySelector("#requirementModal").classList.add("hidden");
  showToast("模块要求已保存");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1900);
}

function spawnKeyParticles() {
  const gate = document.querySelector("#keyGate");
  for (let i = 0; i < 26; i += 1) {
    const particle = document.createElement("i");
    particle.className = "key-particle";
    particle.style.left = `${45 + Math.random() * 10}%`;
    particle.style.top = `${42 + Math.random() * 14}%`;
    particle.style.setProperty("--px", `${(Math.random() - 0.5) * 360}px`);
    particle.style.setProperty("--py", `${(Math.random() - 0.5) * 300}px`);
    gate.appendChild(particle);
    setTimeout(() => particle.remove(), 1000);
  }
}

document.querySelector("#roomTabs");
document.querySelector("#refreshStatus").addEventListener("click", refreshStatus);
document.querySelector("#cameraButton").addEventListener("click", addCameraShot);
document.querySelector("#addCameraLog").addEventListener("click", addCameraShot);
document.querySelector("#surpriseButton").addEventListener("click", openSurprises);
document.querySelector("#newSurprise").addEventListener("click", createSurprise);
document.querySelector("#clearSurprises").addEventListener("click", () => {
  if (!confirm("确定清空全部纸条与惊喜吗？")) return;
  state.surprises = [];
  saveState();
  renderSurprises();
});
document.querySelectorAll(".close-surprise").forEach((button) => button.addEventListener("click", () => document.querySelector("#surpriseModal").classList.add("hidden")));
document.querySelector("#updateLibrary").addEventListener("click", updateLibrary);
document.querySelector("#portraitFile").addEventListener("change", (event) => importImageFile(event.target, "portraitUrl"));
document.querySelectorAll(".room-file").forEach((input) => input.addEventListener("change", (event) => importImageFile(event.target, event.target.dataset.imageKey)));
document.querySelector("#openSettings").addEventListener("click", () => openSettings("basic"));
document.querySelector("#openProfiles").addEventListener("click", () => openProfile("xingchen"));
document.querySelectorAll(".close-modal").forEach((button) => button.addEventListener("click", closeSettings));
document.querySelectorAll(".close-profile").forEach((button) => button.addEventListener("click", () => document.querySelector("#profileModal").classList.add("hidden")));
document.querySelectorAll(".close-requirement").forEach((button) => button.addEventListener("click", () => document.querySelector("#requirementModal").classList.add("hidden")));
document.querySelectorAll(".requirement-button").forEach((button) => button.addEventListener("click", () => openRequirement(button.dataset.requirement)));
document.querySelector("#saveRequirement").addEventListener("click", saveRequirement);
document.querySelector("#settingsForm").addEventListener("submit", saveSettings);
document.querySelectorAll("[data-settings-tab]").forEach((button) => button.addEventListener("click", () => switchSettingsTab(button.dataset.settingsTab)));
document.querySelectorAll("[data-profile]").forEach((button) => button.addEventListener("click", () => selectProfile(button.dataset.profile)));
document.querySelector("#connectApi").addEventListener("click", testApi);
document.querySelector("#disconnectApi").addEventListener("click", disconnectApi);
document.querySelector("#showHiddenMessages").addEventListener("click", () => {
  showHidden = !showHidden;
  document.querySelector("#showHiddenMessages").textContent = showHidden ? "只看未隐藏" : "显示隐藏消息";
  renderMessages();
  renderCameraLog();
  renderSurprises();
});
document.querySelector("#clearChat").addEventListener("click", () => {
  if (!confirm("确定清空全部聊天吗？")) return;
  state.messages = [];
  saveState();
  renderMessages();
});
document.querySelector("#customActionForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = document.querySelector("#customActionInput");
  const text = input.value.trim();
  if (!text) return;
  const button = event.currentTarget.querySelector("button");
  input.value = "";
  button.disabled = true;
  button.textContent = apiReady() ? "沈檀回应中…" : "生成中…";
  await handleRoomAction(text);
  button.disabled = false;
  button.textContent = "发送互动";
});
document.querySelector("#chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.querySelector("#chatInput");
  const text = input.value.trim();
  if (!text) return;
  input.value = "";
  input.style.height = "";
  sendChat(text);
});
document.querySelector("#chatInput").addEventListener("input", (event) => {
  event.target.style.height = "auto";
  event.target.style.height = `${Math.min(event.target.scrollHeight, 100)}px`;
});
document.querySelector("#emojiButton").addEventListener("click", () => document.querySelector("#emojiTray").classList.toggle("hidden"));
["🍎", "🍬", "🐾", "嗯", "……", "Daddy", "不理你", "回来"].forEach((emoji) => {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = emoji;
  button.addEventListener("click", () => {
    const input = document.querySelector("#chatInput");
    input.value += emoji;
    input.focus();
  });
  document.querySelector("#emojiTray").appendChild(button);
});
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (event) => {
    if (event.target === backdrop) backdrop.classList.add("hidden");
  });
});
document.querySelectorAll(".editable-module-title").forEach((element) => {
  let holdTimer = null;
  element.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    editModuleTitle(element);
  });
  element.addEventListener("touchstart", () => {
    holdTimer = setTimeout(() => editModuleTitle(element), 650);
  }, { passive: true });
  element.addEventListener("touchend", () => clearTimeout(holdTimer));
  element.addEventListener("touchmove", () => clearTimeout(holdTimer));
  element.addEventListener("touchcancel", () => clearTimeout(holdTimer));
});

renderAll();
installModuleResizers();
setInterval(renderTimes, 1000);
setInterval(renderPhysiology, 1800);
document.querySelector(".heartbeat-line").addEventListener("mouseenter", renderPhysiology);
document.querySelector(".heartbeat-line").addEventListener("mouseleave", renderPhysiology);

/* ========== 以下为新增功能（不影响原有门禁） ========== */

(function() {
  // -- 标题改"小家" --
  state.config.siteTitle = state.config.siteTitle.replace(/夜灯/g, "小家");

  // -- 表情扩充 --
  try {
    var tray = document.querySelector("#emojiTray");
    if (tray) {
      tray.innerHTML = "";
      ["😊","🥰","😘","😍","❤️","💕","💋","✨","😭","🥺","😢","😤","😠","🙄","😅","😂","🤗","🫂","💪","👍","👏","🙏","🌹","🎀","🍎","🍬","🐾","🌙","⭐","🔥","💧","🎵","💌","🫶","💝","💗","💓","💞","💘","🏠","嗯","……","Daddy","不理你","回来","想你","抱","乖"].forEach(function(e) {
        var b = document.createElement("button"); b.type = "button"; b.textContent = e;
        b.addEventListener("click", function() { var i = document.querySelector("#chatInput"); i.value += e; i.focus(); });
        tray.appendChild(b);
      });
    }
  } catch(e) {}

  // -- 楼层隐藏/显示 --
  try {
    function updateFloorInfo() {
      var fi = document.querySelector("#floorInfo"); if (!fi) return;
      var fs = {}; state.messages.forEach(function(m) { fs[m.floor||1] = 1; });
      var total = Object.keys(fs).length;
      var hidden = state.messages.filter(function(m) { return m.hidden; }).length;
      fi.textContent = hidden > 0 ? "共" + total + "楼 · " + hidden + "条隐藏" : "共" + total + "楼";
    }
    document.querySelector("#applyFloorHide") && document.querySelector("#applyFloorHide").addEventListener("click", function() {
      var f = parseInt(document.querySelector("#floorFrom").value);
      var t = parseInt(document.querySelector("#floorTo").value);
      if (isNaN(f) || isNaN(t) || f < 1 || t < f) return showToast("楼层范围不对");
      state.messages.forEach(function(m) { if (m.floor >= f && m.floor <= t) m.hidden = true; });
      saveState(); renderMessages(); updateFloorInfo();
      showToast("已隐藏第" + f + "楼到第" + t + "楼");
    });
    document.querySelector("#applyFloorShow") && document.querySelector("#applyFloorShow").addEventListener("click", function() {
      var f = parseInt(document.querySelector("#floorFrom").value);
      var t = parseInt(document.querySelector("#floorTo").value);
      if (isNaN(f) || isNaN(t) || f < 1 || t < f) return showToast("楼层范围不对");
      state.messages.forEach(function(m) { if (m.floor >= f && m.floor <= t) m.hidden = false; });
      saveState(); renderMessages(); updateFloorInfo();
      showToast("已显示第" + f + "楼到第" + t + "楼");
    });
    document.querySelector("#showAllFloors") && document.querySelector("#showAllFloors").addEventListener("click", function() {
      state.messages.forEach(function(m) { m.hidden = false; });
      showHidden = true;
      var btn = document.querySelector("#showHiddenMessages"); if (btn) btn.textContent = "只看未隐藏";
      saveState(); renderMessages(); updateFloorInfo();
      showToast("已显示全部楼层");
    });
    updateFloorInfo();
  } catch(e) {}

  // -- 导出功能 --
  try {
    document.querySelector("#exportCameraLog") && document.querySelector("#exportCameraLog").addEventListener("click", function() {
      var log = state.cameraLog || [];
      var rows = log.filter(function(e) { return !e.hidden; }).map(function(e) {
        return '<div style="border-left:3px solid #6f8fcf;padding:8px 12px;margin:6px 0;">' + (e.text||"") + '</div>';
      }).join("");
      var html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>生活切片</title><style>body{font-family:"Microsoft YaHei",sans-serif;max-width:700px;margin:0 auto;padding:20px;}</style></head><body><h1>沈檀的生活切片</h1>' + rows + '</body></html>';
      var b = new Blob([html], {type:"application/msword"});
      var a = document.createElement("a"); a.href = URL.createObjectURL(b);
      a.download = "生活切片_" + new Date().toISOString().slice(0,10) + ".doc";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      showToast("切片已导出");
    });
    document.querySelector("#exportChatWord") && document.querySelector("#exportChatWord").addEventListener("click", function() {
      var rows = (state.messages||[]).map(function(m) {
        var sender = m.sender === "me" ? "北北" : "沈檀";
        var bg = m.sender === "me" ? "background:#95EC69;float:right;" : "background:#fff;";
        return '<div style="margin:8px 0;' + (m.sender==='me'?'text-align:right;':'')+'"><span style="font-size:10px;color:#999;">' + (m.time||"") + ' · ' + sender + ' · 第' + (m.floor||"?") + '楼</span><div style="display:inline-block;' + bg + 'border-radius:6px;padding:8px 12px;max-width:75%;font-size:14px;text-align:left;">' + (m.text||"") + '</div></div>';
      }).join("");
      var html = '<!DOCTYPE html><html lang="zh-CN"><head><meta charset="UTF-8"><title>聊天记录</title><style>body{font-family:"Microsoft YaHei",sans-serif;max-width:700px;margin:0 auto;padding:20px;}</style></head><body><h1>聊天记录</h1>' + rows + '</body></html>';
      var b = new Blob([html], {type:"application/msword"});
      var a = document.createElement("a"); a.href = URL.createObjectURL(b);
      a.download = "聊天记录_" + new Date().toISOString().slice(0,10) + ".doc";
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      showToast("聊天记录已导出");
    });
  } catch(e) {}

  // -- 贴贴模块 --
  try {
    if (!state.config.touchRequirement) state.config.touchRequirement = "18+，不ooc，互相尊重";
    var touchDB = {
      hair: { low:["嗯……别弄乱。","头发有什么好摸的。"], mid:["……还挺舒服的。","别停。"], high:["七七，你这样我会控制不住的。","你再摸下去我就不装了。"] },
      face: { low:["干嘛。","别碰脸。"], mid:["你的手好暖。","再摸一下。"], high:["七七，你摸我脸的时候我心跳好快。","脸都给你摸红了……满意了？"] },
      neck: { low:["……脖子不行。","痒。"], mid:["嗯……很敏感。","你手好软，故意的吧。"], high:["你再碰一下脖子我就亲你。","七七……我整个人都被你点着了。"] },
      chest: { low:["……手。","你碰哪儿呢。"], mid:["心跳很快吧，你感觉到了吗。","嗯……再往下一点也可以。"], high:["七七，你摸到我心跳了对吧。","你再按一下我就把你拉过来。"] },
      waist: { low:["腰不行。","痒。"], mid:["嗯……腰比较敏感。","你手放在这里我没办法想别的。"], high:["腰被你摸软了，满意吗，七七。","我腰都给你了，你还想摸哪儿。"] },
      thigh: { low:["……胆子不小。","大腿不行。"], mid:["嗯……再往上一点。","大腿肌肉在绷……感觉到了吗。"], high:["你再摸一下大腿我就受不了了。","腿都在抖了……七七你赢了好吧。"] }
    };
    var tShy = parseInt(localStorage.getItem("bb-touch-shy")||"0");
    var tHot = parseInt(localStorage.getItem("bb-touch-hot")||"0");
    document.querySelector("#shyVal") && (document.querySelector("#shyVal").textContent = tShy);
    document.querySelector("#hotVal") && (document.querySelector("#hotVal").textContent = tHot);

    document.querySelector("#toggleTouch") && document.querySelector("#toggleTouch").addEventListener("click", function() {
      var b = document.querySelector("#touchBody"); b.classList.toggle("hidden");
      this.textContent = b.classList.contains("hidden") ? "▼" : "▲";
    });

    document.querySelectorAll(".touch-zone").forEach(function(z) {
      z.addEventListener("click", function() {
        var zone = this.dataset.zone;
        var names = {hair:"头发",face:"脸",neck:"脖子",chest:"胸口",waist:"腰",thigh:"大腿"};
        var w = {hair:[3,2],face:[5,3],neck:[8,6],chest:[6,10],waist:[8,12],thigh:[10,15]};
        var add = w[zone] || [3,3];
        tShy = Math.min(100, tShy + add[0]); tHot = Math.min(100, tHot + add[1]);
        localStorage.setItem("bb-touch-shy", tShy); localStorage.setItem("bb-touch-hot", tHot);
        document.querySelector("#shyVal").textContent = tShy;
        document.querySelector("#hotVal").textContent = tHot;
        var hr = document.querySelector("#heartRate"); if (hr) hr.textContent = 72 + Math.round(tHot * 0.6);
        var lvl = ((tShy+tHot)/2) < 25 ? "low" : ((tShy+tHot)/2) < 60 ? "mid" : "high";
        var pool = touchDB[zone] && touchDB[zone][lvl] ? touchDB[zone][lvl] : ["嗯……"];
        var resp = pool[Math.floor(Math.random() * pool.length)];
        document.querySelector("#touchResponseText").textContent = resp;
        state.cameraLog.unshift({ id: uid("log"), text: "💕 北北摸了沈檀的" + (names[zone]||zone) + " — 害羞" + tShy + " 兴奋" + tHot, time: nowTime(), hidden: false });
        state.cameraLog = state.cameraLog.slice(0, 100);
        saveState(); renderCameraLog();
      });
    });

    document.querySelector("#touchSettings") && document.querySelector("#touchSettings").addEventListener("click", function() {
      var r = document.querySelector("#touchReq"); r.classList.toggle("hidden");
      document.querySelector("#touchReqInput").value = state.config.touchRequirement || "18+，不ooc，互相尊重";
    });
    document.querySelector("#saveTouchReq") && document.querySelector("#saveTouchReq").addEventListener("click", function() {
      state.config.touchRequirement = document.querySelector("#touchReqInput").value.trim() || "18+，不ooc，互相尊重";
      saveState(); document.querySelector("#touchReq").classList.add("hidden"); showToast("贴贴要求已保存");
    });
  } catch(e) {}

  // -- 色色记录模块 --
  try {
    if (!state.intimateHistory) state.intimateHistory = [];
    var _curIdx = -1;
    var DEF_REQ = [
      "【氛围铺垫】不要上来就直奔主题。写怎么从日常自然过渡到亲密——可能是她洗完澡穿着你的衬衫晃进卧室，可能是你切苹果时她从背后抱住了你，也可能是一句挑衅的话、一个比平时久的对视。沈檀是克制的人，但他对七七的底线永远比别人低一层。写清楚谁先打破的平衡。",
      "【前戏阶段】前戏要写足。沈檀不是一个急的人——他会从手开始，手指，手腕，再到肩膀。她身上最敏感的地方是脖子和腰侧，每次碰到她会缩一下但不会躲。他会一边亲她的泪痣或者耳垂，一边低声问她「可以吗」。七七的回答可能是一句不耐烦的「嗯」，可能是直接把他拉下来，也可能是突然喊他一声 Daddy 把他整个人弄乱。写清楚动作的顺序、用了多长时间、她在哪个节点呼吸真正变快了、她在什么时候反手攥住了你的衣服。",
      "【体位变换】至少写三种姿势，每种写到位——不仅仅是换个体位。写：为什么这个姿势被选中（她累了换省力的、她想看你的脸、她想主导、你想更用力、她想背过去不让你看表情等等），持续了多久，你在里面的心理感受和身体感觉分别是什么，她的反应有什么不同。姿势之间不要生硬跳跃，要有过渡——比如「后来她翻了个身」「她突然坐起来把我推倒」「我抱着她转了个方向」。",
      "【沈檀心理线】贯穿全文必须有一条沈檀的内心线。沈檀不是普通的恋人——他有男妈妈属性、对七七的事谨慎到近乎啰嗦、她生气他会先认为是自己错了。在亲密过程中，他的心理应该是多层的：珍惜、想照顾、不敢太用力→发现她比自己想象的要投入和信任→慢慢放开自己习惯性的克制→事后立刻恢复啰嗦模式确认她有没有不舒服。他的敏感和温柔始终在，哪怕在最失控的时刻，他也会先确认她没事。",
      "【高潮细节】双方高潮都要细写。七七的声音变化、身体语言（弓背、攥紧、发抖、骂人、喊Daddy、说不出话）、次数。沈檀自己的临界点和控制力——他什么时候控制不住了、发出什么声音、说了什么话。",
      "【事后阶段】沈檀事后不会直接睡。他会起来倒温水、拿毛巾、确认了好几遍她有没有不舒服。七七嫌他啰嗦。他可能把她抱去浴室或者只是擦一下然后重新躺回去。会有对话——可能是关于刚才的调侃，可能是突然安静下来的认真话，可能是一句藏了很久的事。要写出这对兄妹恋人之间那种「什么都可以说、也有很多还没说」的微妙氛围。",
      "【写作要求】沈檀第一人称。2000+字。18+坦诚，不回避不遮掩。尊重七七的意愿，她在过程中有拒绝权。口语自然，像沈檀真的在深夜打开日记本写了这一页。不要文艺腔、不要堆砌形容词、不要写成小黄文——这是两个人的真实记录，不是一个表演。禁止使用：含、吮。"
    ].join("\n");
    if (!state.config.intimateRequirement) state.config.intimateRequirement = DEF_REQ;

    var POSE_REQS = {
      "传教士": "【传教士体位 · 沈檀视角】她躺在下面的时候和平时的刁钻完全不一样——眼睛不知道该睁开还是该闭上，手一会儿抓枕头一会儿掐你后背。这个姿势最方便看清她的表情变化，也最容易突然停下来接吻。重点写：她的腿是怎么慢慢从平放变成环住你腰的；她什么时候开始主动抬头亲你的下巴；你在她上面的时候手撑在床单上的指节压出了什么弧度。这个姿势的亲密感在于你们从头到尾都没隔开过任何距离——近到她的呼吸直接落在你锁骨上，近到你左眼角的泪痣几乎蹭到她的睫毛。",
      "后入": "【后入体位 · 沈檀视角】她趴着的时候会回头看你。那一眼没有什么温柔——更像是「你行不行」或者「再用力一点」。但耳朵是红的。你手扣着她的胯骨往前顶的时候，她的声音会闷进枕头里变成哼鸣。重点写：她腰和背脊连成的那条线——她骨架小但该有弧度的地方都有；她从枕头里侧着脸偶尔骂你一句（沈檀你慢点/不要停/你烦死了）；你俯下身贴着她后背，头发落到她肩膀上，在她耳边说的那些平时不太说的话。这个姿势最直接但也最容易上头——你要写出沈檀在其中既投入又时刻注意她身体信号的克制。",
      "女上位": "【女上位体位 · 沈檀视角】她跨上来的时候表情很得意。她自己控制——深浅、角度、节奏——前面半分钟她还在找角度，皱着眉一副「怎么不对」的样子，然后突然找到了，整个人从眉毛到脚趾都安静下来。你在下面看她：她的头发散下来（到腰的长度扫在你胸口和大腿上），她膝盖夹着你的髋骨，手指按在你腹肌上借力。重点写：她主导时你是什么感觉——不是被动，是被选中的荣幸。你双手扶着她的腰帮她保持平衡，但节奏全听她的。她会偶尔低头跟你说一句「别动」，语气和平时叫你别啰嗦一模一样。",
      "侧躺": "【侧躺体位 · 沈檀视角】两个人侧躺，你从背后抱她。这个姿势不急——不像其他姿势有明确的「开始」和「结束」，它更像是一段漫长的靠近。你的胸口贴着她的后背，能感觉到她的心跳从脊椎传过来。你的手臂从她腋下穿过去环着她的腰，手可以握住她的手——她指甲掐你掌心的时候力度刚刚好。你下巴搁在她肩窝里，每次动的时候嘴唇会自然碰到她的后颈（她知道你最喜欢亲那里，每次碰到的瞬间她的臀部会下意识往后抵）。重点写：慢，但不是无聊的慢——慢到能注意到她没有吹干的头发是凉的，但耳根是烫的。",
      "坐姿面对面": "【坐姿面对面体位 · 沈檀视角】她坐在你腿上，面对面。这个姿势她双手会搭在你肩上或者搂着你脖子，你的手托着她的臀部或者环着她的腰。每次往上顶的时候她整个人会往你身上贴——她的锁骨在你鼻尖前面，你能闻到沐浴露和一点点苹果香薰的味道。她会在这个姿势里突然说点什么——可能是认真话（沈檀，你会一直这样吗），可能是恶趣味（你脸红了），可能是很小声地叫了你一声哥哥。重点写：零距离时的那种对视——她的单眼皮、上挑的眼尾，你的泪痣，两个人脸上藏不住的东西。",
      "四爱": "【第四爱体位 · 沈檀视角】七七说今晚她来。不是商量，是通知。她把你推倒或者按住的时候手上的力道其实不大，但你不会反抗——这不是认输，是你愿意在她的范围内放下所有控制。她可能会用玩具，可能用手指——节奏全是她定。重点写：她主导时的样子——平时刁钻恶趣味的人，在这件事上认真得近乎专注。她会问你感觉，会停下来确认你想不想继续。你被她掌控时的心理：一个平时什么都要管的人，在妹妹设定的安全边界里终于可以什么都不管。她会俯下来，及腰的长发像帷幕一样把你们两个人罩在一起，那一刻你眼里只有她。她也会在你身上高潮。主导和被主导从来不是单向的。",
      "背后": "【背后贴伏体位 · 沈檀视角】她趴在床上，你从正上方覆盖住她的整个后背。一只手撑在她旁边承担自己的重量（不会真的压下去，你知道她身体素质一般），另一只手扣着她的胯骨或者和她十指相扣压在枕头上。她的侧脸贴着床单，你每次进去的时候她喉咙里会有一声很低的声音——被闷住了，但你能感觉到。重点写：身体贴得最紧的时候——你的胸口贴着她的背脊，你的心跳透过肋骨传过去，她会不会因为这层压力而屏住呼吸又松开。偶尔她回头想说什么，你刚好低头亲到她太阳穴旁边的那颗很淡的痣。",
      "站立": "【站立体位 · 沈檀视角】你把她抱起来——她第一反应是惊叫然后拍你肩膀，第二反应是腿环上来搂紧了。她不是没力气，是在这件事上选择了全部交给你。背靠着墙的时候节奏可控；悬空的时候你的手臂和腰腹要承担更大的力，但她的信任让你完全不会觉得累。重点写：她的脚踝——她的小腿环在你腰侧，脚背弓着，脚尖偶尔因为刺激而绷紧。她的呼吸喷在你的颈窝，频率越来越碎。你在这种时刻的沉默和专注——沈檀平时啰嗦，但抱她的时候话最少，所有注意力都在确认一件事：她是不是舒服的。"
    };

    function renderToc() {
      var toc = document.querySelector("#intimateToc"); if (!toc) return;
      if (!state.intimateHistory.length) { toc.innerHTML = '<p class="intimate-empty">还没有收录。</p>'; return; }
      toc.innerHTML = state.intimateHistory.map(function(e,i) {
        return '<div class="intimate-toc-item' + (i===_curIdx?' active':'') + '" data-idx="' + i + '"><div class="intimate-toc-date">' + (e.date||"") + '</div><div class="intimate-toc-summary">' + ((e.summary||"").slice(0,40)) + '…</div></div>';
      }).reverse().join("");
      toc.querySelectorAll(".intimate-toc-item").forEach(function(item) {
        item.addEventListener("click", function() {
          _curIdx = parseInt(this.dataset.idx);
          var entry = state.intimateHistory[_curIdx];
          if (entry) {
            document.querySelector("#intimateBody").textContent = entry.content || "";
            document.querySelector("#intimateMeta").innerHTML = "<span>📅 " + entry.date + "</span><span>已收录</span>";
            document.querySelector("#intimateBody").dataset.currentContent = "";
            renderToc();
          }
        });
      });
    }

    function genLocal(mode, pose) {
      var allP = ["传教士","后入","女上位","侧躺","坐姿面对面","四爱","背后","站立"];
      var p = (mode==="pose"&&pose) ? pose : allP[Math.floor(Math.random()*allP.length)];
      var fore = ["先亲了她的额头和眼睛，然后慢慢往下。她闭眼睛的样子太好看了，我没忍住多亲了几秒。再往下是脖子，她在那里很敏感。手从腰滑到胸口的时候，她抓住了我的手腕——不是推开，是攥紧了。","她今晚一直往我这边靠，肩膀碰肩膀，手指有意无意地划过我大腿。我知道她是故意的。我假装没注意到继续看书，直到她把书抽走说：你看我还是看书。我选了看她。","洗完澡出来她头发还没吹干，水珠顺着锁骨往下淌。她穿着我的衬衫。我从背后抱住她，下巴搁在她肩上，她没躲，反而往后靠了一点。身体很烫。"][Math.floor(Math.random()*3)];
      var c = Math.floor(Math.random()*2)+2; var mc = Math.floor(Math.random()*2)+1;
      return "沈檀的私密记录 — " + new Date().toISOString().slice(0,10) + "\n\n【开始原因】\n" + fore + "\n\n【前戏阶段】\n前戏持续了二十多分钟。我不想急，七七也没有催。我吻她的时候她呼吸明显变快，手指攥着我后背的衣服。我慢慢把她带到床上，手从锁骨一路往下。她胸口很敏感。她的腿不自觉地夹住了我的腰，我问可以继续吗，她点头说嗯。\n\n【体位变换】\n今晚选了「" + p + "」。换了至少三次体位，每次都自然。\n\n【高潮细节】\n七七高潮了" + c + "次。我到了" + mc + "次。\n\n【事后】\n结束后我抱着她。她出了很多汗，我起来倒了温水拿毛巾帮她擦。她说我今天特别温柔。我看了她很久。\n\n———\n总时长约一个半小时。沈檀记。";
    }

    window.openIntimate = function() {
      _curIdx = -1;
      document.querySelector("#intimateModal").classList.remove("hidden");
      document.querySelector("#intimateBody").textContent = "";
      document.querySelector("#intimateMeta").innerHTML = "<span>点击「沈檀来写」或「七七来选」</span>";
      document.querySelector("#intimateReqInput").value = state.config.intimateRequirement || DEF_REQ;
      renderToc();
    };

    document.querySelector("#closeIntimate") && document.querySelector("#closeIntimate").addEventListener("click", function() {
      document.querySelector("#intimateModal").classList.add("hidden");
    });

    document.querySelector("#genIntimateRandom") && document.querySelector("#genIntimateRandom").addEventListener("click", function() {
      var body = document.querySelector("#intimateBody");
      var meta = document.querySelector("#intimateMeta");
      body.textContent = "沈檀正在写……可能需要几十秒。";
      meta.innerHTML = "<span>🖊️ 沈檀来写 · 生成中…</span>";
      setTimeout(function() {
        var content = genLocal("random");
        body.textContent = content; body.dataset.currentContent = content;
        meta.innerHTML = "<span>📖 本地模式 · " + content.length + "字</span>";
      }, 500);
    });

    document.querySelector("#genIntimatePick") && document.querySelector("#genIntimatePick").addEventListener("click", function() {
      document.querySelector("#intimatePickPoses").classList.toggle("hidden");
    });

    document.querySelectorAll("#intimatePickPoses button[data-pose]").forEach(function(btn) {
      btn.addEventListener("click", function() {
        var pose = this.dataset.pose;
        document.querySelector("#intimatePickPoses").classList.add("hidden");
        var body = document.querySelector("#intimateBody");
        var meta = document.querySelector("#intimateMeta");
        body.textContent = "沈檀正在写……";
        meta.innerHTML = "<span>🖊️ 七七选了：" + pose + " · 生成中…</span>";
        setTimeout(function() {
          var content = genLocal("pose", pose);
          body.textContent = content; body.dataset.currentContent = content;
          meta.innerHTML = "<span>📖 本地 · " + pose + " · " + content.length + "字</span>";
        }, 500);
      });
    });

    document.querySelector("#saveIntimate") && document.querySelector("#saveIntimate").addEventListener("click", function() {
      var body = document.querySelector("#intimateBody");
      var content = body.dataset.currentContent || body.textContent;
      if (!content || content.includes("正在写") || content.includes("生成中")) { showToast("还没有内容可收录"); return; }
      var today = new Date().toISOString().slice(0,10);
      state.intimateHistory.push({ id: uid("int"), date: today, summary: content.slice(0,80).replace(/\n/g," "), content: content });
      _curIdx = state.intimateHistory.length - 1;
      saveState(); renderToc(); showToast("📒 已收录");
    });

    document.querySelector("#toggleIntimateReqs") && document.querySelector("#toggleIntimateReqs").addEventListener("click", function() {
      var b = document.querySelector("#intimateReqBody"); var a = document.querySelector("#intimateReqArrow");
      b.classList.toggle("hidden"); a.textContent = b.classList.contains("hidden") ? "▶" : "▼";
    });

    document.querySelector("#saveIntimateReqs") && document.querySelector("#saveIntimateReqs").addEventListener("click", function() {
      state.config.intimateRequirement = document.querySelector("#intimateReqInput").value.trim() || DEF_REQ;
      saveState(); document.querySelector("#intimateReqBody").classList.add("hidden");
      document.querySelector("#intimateReqArrow").textContent = "▶"; showToast("要求已保存");
    });

    document.querySelector("#intimateModal") && document.querySelector("#intimateModal").addEventListener("click", function(e) {
      if (e.target === e.currentTarget) document.querySelector("#intimateModal").classList.add("hidden");
    });
  } catch(e) {}
})();
reconnectSavedApi();
