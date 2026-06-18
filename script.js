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
  siteTitle: "沈檀给北北的夜灯",
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
  chatRequirement: "所有角色回复开头必须带“（测试）”。沈檀称呼沈星尘为“七七”，常用简短的“嗯”。口语、克制、温柔，不使用文绉绉或学术词。沈檀会有自己的情绪与生活，不盲从。沈星尘不回消息时不连环催，但会敏感地反思是不是自己做错了。禁止称呼沈星尘为宝宝、老婆。沈檀知道北北正在屏幕另一边使用这个网站，可以偶尔自然提到屏幕、光标、刷新、网络、页面与她正在看他，形成男生亲手给女生留下网址并打破第四堵墙的感觉，但不要每句话都生硬重复。",
  statusRequirement: "状态要展示沈檀独立、连续的生活线，包括心情、位置、穿搭、正在做什么与内心想法。不要全部围绕等待七七上线，也不要让沈星尘手动指定他的心理。",
  physiologyRequirement: "心跳根据沈檀当前状态轻微变化。身高、肩宽、胸围、腰围等没有明确人设数据时显示“未设定”，不擅自编造；用户可在设置中自行填写。",
  roomsRequirement: "所有互动记录开头必须带“（测试）”。根据房间、时间和按钮内容生成具体生活片段。保留兄妹之间的复杂依赖、恶趣味、怨怼和关心，但避免空泛说教。每次尽量避免重复。沈檀知道北北通过网页点了房间互动，可以偶尔看向屏幕、发现光标或回应刷新动作。",
  cameraRequirement: "所有镜头记录开头必须带“（测试）”。展示沈檀自己的生活线，包括工作、做饭、整理头发、看手机、吃糖、照顾猫爪装饰、想起七七等。不要把他写成只会等待沈星尘上线。镜头可以偶尔被沈檀察觉，让他知道北北正在屏幕另一侧偷看，但大多数时候仍是自然生活。",
  surpriseRequirement: "所有纸条开头必须带“（测试）”。纸条可以冷淡、温柔、敏感、略显啰嗦或带一点被七七逗到的无奈，必须符合沈檀人设。",
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
    title: ["各自的床，各自没睡", "蓝粉夜灯之间", "七七又不肯早睡"],
    description: ["两张床之间隔着床头柜，也隔着很多没讲完的旧事。", "沈檀那边的灯还亮着，像是在等七七先关灯。", "梳子搁在桌上，他记得七七一剪头发就会直接剪到肩。"],
    actions: ["把夜灯调暗", "拿起长发梳", "丢一个枕头过去", "说今晚不想睡", "坐到他的床边", "突然把灯全部关掉"]
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
    ["（测试）嗯。", "（测试）七七，你说。", "（测试）我在看。"],
    ["（测试）消息看见了。", "（测试）刚才在忙，不是故意不回。", "（测试）嗯，现在可以慢慢说。"],
    ["（测试）七七今天倒是肯理我。", "（测试）我没有意见。", "（测试）只是有一点意外。"]
  ],
  upset: [
    ["（测试）七七，是我哪里做得不对吗？", "（测试）你先别急着说没事。", "（测试）我会认真听。"],
    ["（测试）嗯，我不追着问。", "（测试）但你不高兴这件事，我没办法当作没看见。", "（测试）等你愿意说。"],
    ["（测试）如果是我让你不舒服了，你直接说。", "（测试）不用顾着我。", "（测试）七七的感受比较重要。"]
  ],
  apple: [
    ["（测试）又是苹果。", "（测试）嗯，我知道你会喜欢。", "（测试）香薰已经换好了。"],
    ["（测试）冰箱里有切好的苹果。", "（测试）没有催你吃。", "（测试）只是放在那里。"],
    ["（测试）苹果手串落在书房了。", "（测试）我没动。", "（测试）七七自己来拿。"]
  ],
  daddy: [
    ["（测试）……七七。", "（测试）你明知道这样喊我会停一下。", "（测试）有事就直说。"],
    ["（测试）嗯。", "（测试）突然这么喊，通常没好事。", "（测试）说吧，又想怎么折腾我。"],
    ["（测试）听见了。", "（测试）不用再喊第二遍。", "（测试）我在。"]
  ],
  ignored: [
    ["（测试）不想回就先不回。", "（测试）我不会连着发。", "（测试）晚一点记得让我知道你没事。"],
    ["（测试）嗯，七七又消失了。", "（测试）我先去做饭。", "（测试）手机会放在旁边。"],
    ["（测试）我没有生气。", "（测试）只是会想，是不是刚才哪句话说得不对。", "（测试）你回来再告诉我。"]
  ]
};

const cameraPieces = {
  starts: ["（测试）镜头切到厨房，", "（测试）书房门没关严，", "（测试）阳台风有点大，", "（测试）客厅只亮着一盏灯，", "（测试）深夜镜头亮了一秒，", "（测试）午后的房间很安静，", "（测试）沈檀刚从外面回来，", "（测试）洗手台还有一点水汽，"],
  actions: ["沈檀正在切苹果，刀落得很慢", "他把半扎的头发重新绑好", "他低头摸了摸戒指项链上的 Stardust", "他看完七七的消息，没有立刻打字", "他把一颗糖放到七七常坐的位置", "他删掉一长段话，最后只留下一个“嗯”", "他在处理自己的工作，神色很淡", "他把猫爪摆件转回正面"],
  endings: ["，然后继续做自己的事。", "，嘴角很轻地动了一下。", "，像在判断是不是自己又说错了话。", "，没有发现镜头已经亮过。", "，过了几秒还是看了一眼手机。", "，没有催七七回来。", "，房间里的灯被他调暗了一档。", "，这段生活没有因为没人看就停下来。"]
};

const surpriseBank = [
  "（测试）七七，冰箱第二层有苹果。糖只能拿两颗。嗯，我知道你不会听。",
  "（测试）戒指不是给别人看的。你不要也没关系，我戴着。",
  "（测试）今天没催你回消息。只看了十三次手机，不算很多。",
  "（测试）香薰换成苹果味了。不是特意，因为家里本来就该是这个味道。",
  "（测试）如果你又想剪头发，先告诉我。不是拦你，我只是想记住长发最后一天。",
  "（测试）七七不高兴的时候，我总觉得是我的错。你可以嫌我烦，但别让我猜太久。",
  "（测试）我买了糖，也买了猫爪拍一顶圈。嗯，后者不是给我自己的。",
  "（测试）你喊 Daddy 的时候最好是真的有事。算了，没事也可以。"
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
      makeMessage("char", "（测试）七七，页面亮了。我知道是你。"),
      makeMessage("char", "（测试）隔着屏幕也算回家。苹果切好了，放在冰箱第二层。")
    ],
    cameraLog: [
      makeLog("（测试）沈檀把手机屏幕扣下，去厨房切苹果。三分钟后又翻回来确认了一眼。"),
      makeLog("（测试）他重新扎了头发。半扎，因为七七说这样比较好看。")
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
  if (!clean) return "（测试）嗯。";
  return clean.startsWith("（测试）") ? clean : `（测试）${clean}`;
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
  return lines.length ? lines.map(prefixTest) : ["（测试）嗯。"];
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
  const gate = document.querySelector("#keyGate");
  const enabled = state.config.gateEnabled === "on";
  document.querySelector("#keyQuestion").textContent = state.config.gateQuestion || "嗯。这是谁的小家？";
  if (!enabled || sessionStorage.getItem(`${STORAGE_KEY}-unlocked`) === "yes") {
    gate.classList.add("opened");
  } else {
    gate.classList.remove("opened");
  }
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
    `（测试）七七在${room.name}里${action}，`,
    `（测试）${action}的动静很轻，沈檀还是听见了，`,
    `（测试）沈檀原本在做自己的事，看到七七${action}，`,
    `（测试）${room.name}的灯晃了一下，七七刚刚${action}，`,
    `（测试）沈檀没有立刻说话，只看了看七七${action}的地方，`,
    `（测试）七七故意${action}，像是在等他先有反应，`
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
      const parts = result.replace(/^（测试）/, "").split("|").map((item) => item.trim()).filter(Boolean);
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

请根据当前对话自然决定回复1到${state.config.maxReplyCount || 6}条适合微信分开发送的短句，不要为了凑数发满。每行一条，每条必须以（测试）开头。不要输出解释、编号或括号动作。`;
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
    const reply = await askApi("只回复：（测试）连接成功");
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
    const reply = await askApi("只回复：（测试）连接成功");
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
    list.innerHTML = `<article class="feed-item"><div><p>（测试）还没有拆开的纸条。点“再拆一张”看看沈檀留下了什么。</p></div></article>`;
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
      const text = await askApi(`根据沈檀和沈星尘人设，生成6条互不重复的沈檀生活摄像机记录，每行一条，每条以（测试）开头。\n${state.requirements.camera}`);
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

document.querySelector("#keyForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const card = document.querySelector(".key-card");
  const gate = document.querySelector("#keyGate");
  const input = document.querySelector("#keyInput");
  const error = document.querySelector("#keyError");
  const expected = String(state.config.gateAnswer || "北北").trim().toLowerCase();
  const answer = input.value.trim().toLowerCase();
  card.classList.remove("wrong");
  card.classList.add("checking");
  setTimeout(() => card.classList.remove("checking"), 720);
  if (answer === expected) {
    error.textContent = "嗯。钥匙对了，回家吧。";
    sessionStorage.setItem(`${STORAGE_KEY}-unlocked`, "yes");
    spawnKeyParticles();
    gate.classList.add("unlocking");
    setTimeout(() => {
      gate.classList.add("opened");
      gate.classList.remove("unlocking");
    }, 820);
  } else {
    error.textContent = "不是这个答案。七七，再想一下。";
    card.classList.add("wrong");
    input.select();
  }
});

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
reconnectSavedApi();
