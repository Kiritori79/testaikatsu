/**
 * 偶像活动初代印象测试 — 数据层
 * 修改角色文案、题目或分值时，只需编辑本文件。
 */

/** @typedef {{ [characterId: string]: number }} ScoreMap */

/** 计分用角色 id 顺序（同分时的优先顺序） */
const CHARACTER_IDS = [
  "ichigo",
  "aoi",
  "ran",
  "otome",
  "yurika",
  "sakura",
  "kaede",
  "mizuki",
  "seira",
  "kii",
  "sora",
  "maria",
];

/**
 * 角色资料：姓名、关键词、结果文案、SSR 卡用渐变与首字
 * @type {Record<string, {
 *   id: string,
 *   name: string,
 *   nameRomaji: string,
 *   keywords: string[],
 *   description: string,
 *   cardGradient: string,
 *   initial: string,
 *   quoteJa: string,
 *   compLike: string,
 *   compAs: string,
 *   compOf: string
 * }>}
 */
const CHARACTERS = {
  ichigo: {
    id: "ichigo",
    name: "星宫莓",
    nameRomaji: "Hoshimiya Ichigo",
    image: "img/ichigo.png",
    keywords: ["太阳系", "直球元气", "成长主角", "舞台热爱"],
    description:
      "你像星宫莓一样，把「喜欢」写在脸上，也敢把梦想喊得很大声。你会被热情点燃，也会用自己的方式把快乐传染给身边的人。不是完美的天才型，却是让人忍不住想为你加油的那一类主角气质。",
    cardGradient: "linear-gradient(160deg, #ffb7c5 0%, #ff8fab 45%, #ffd93d 100%)",
    initial: "莓",
    quoteJa: "「『アイカツ』って書いて、『アイカツ』って読むんだよ！」",
    compLike: "把喜欢写在脸上、跌倒也会马上爬起来的主角元气",
    compAs: "像小太阳一样想把舞台和笑容都点亮起来的冲劲",
    compOf: "越挫越勇、凭着直觉往前跑的那股不服输",
  },
  aoi: {
    id: "aoi",
    name: "雾矢葵",
    nameRomaji: "Kiriya Aoi",
    image: "img/aoi.png",
    keywords: ["冷静清晰", "观察力", "务实派", "温柔靠谱"],
    description:
      "你像雾矢葵一样，擅长把情绪收好，把该做的事一件件理清。你容易被「聪明又体贴」的细节打动，也更愿意用陪伴与倾听去支撑重要的人。安静的外表下，其实藏着很稳很强的内核。",
    cardGradient: "linear-gradient(165deg, #a8d8ea 0%, #7ec8e3 50%, #e0f7fa 100%)",
    initial: "葵",
    quoteJa: "「穏やかじゃないわね。」",
    compLike: "冷静又体贴、把细节和陪伴都放在心里的可靠感",
    compAs: "像整理好的笔记一样清楚透彻的观察力",
    compOf: "不说漂亮话、却会一直站在你身边的那份温柔",
  },
  ran: {
    id: "ran",
    name: "紫吹兰",
    nameRomaji: "Shibuki Ran",
    image: "img/ran.png",
    keywords: ["不服输", "气场", "直线球", "实力至上"],
    description:
      "你像紫吹兰一样，对「变强」这件事很诚实。你不喜欢绕弯子，也更愿意用结果说话。你心软的方式很克制，但一旦认定了目标，就会用冷静又锋利的步伐一路走下去。",
    cardGradient: "linear-gradient(150deg, #c9b1ff 0%, #9b7ed9 50%, #f8bbd9 100%)",
    initial: "兰",
    quoteJa: "「悔しいって思えるのは、本気でやった証拠でしょ。」",
    compLike: "不服输、用实力把话说明白的锋利气场",
    compAs: "直线球一样坦率、却很有分寸的帅气",
    compOf: "认定目标就一路走到底的冷静执着",
  },
  otome: {
    id: "otome",
    name: "有栖川乙女",
    nameRomaji: "Arisugawa Otome",
    image: "img/otome.png",
    keywords: ["童话脑", "可爱即正义", "小剧场", "甜系治愈"],
    description:
      "你像有栖川乙女一样，心里永远住着一个软绵绵的童话世界。你容易被可爱与浪漫吸引，也会用天真又真诚的方式去喜欢别人。你的快乐很纯粹，也常常在脑内上演让人会心一笑的小剧场。",
    cardGradient: "linear-gradient(165deg, #ffe0ef 0%, #ffc2d4 45%, #fff9c4 100%)",
    initial: "乙",
    quoteJa: "「超かわいいは、正義です！」",
    compLike: "天真又浪漫的童话感与可爱能量",
    compAs: "把“开心”当成最重要任务的甜系治愈力",
    compOf: "脑内小剧场永远很热闹的那份纯粹快乐",
  },
  yurika: {
    id: "yurika",
    name: "藤堂尤里卡",
    nameRomaji: "Todo Yurika",
    image: "img/yurika.png",
    keywords: ["小恶魔", "神秘感", "反差萌", "自我风格"],
    description:
      "你像藤堂尤里卡一样，擅长用一点点距离感把自己包装得很「特别」。你享受被注视，也享受在夜色里独自散步的那种自由。嘴上可能很坏，心里却比谁都认真。",
    cardGradient: "linear-gradient(155deg, #2d2640 0%, #5c4a6e 40%, #b39ddb 100%)",
    initial: "尤",
    quoteJa: "「私は美しい、永遠のヴァンパイア…わっ！」",
    compLike: "独特又神秘、让人忍不住多看一眼的小恶魔气场",
    compAs: "夜色一样优雅、嘴上很坏却很认真的反差魅力",
    compOf: "只属于自己节奏的那份从容与骄傲",
  },
  sakura: {
    id: "sakura",
    name: "北大路樱",
    nameRomaji: "Kitaoji Sakura",
    image: "img/sakura.png",
    keywords: ["和风静谧", "细腻体贴", "慢热温柔", "安定感"],
    description:
      "你像北大路樱一样，像雨后的空气一样干净、安静。你记得别人随口说的话，也会用不打扰的方式表达关心。你不是最吵闹的那一个，却常常是最让人安心的存在。",
    cardGradient: "linear-gradient(160deg, #fce4ec 0%, #f8bbd0 50%, #e1bee7 100%)",
    initial: "樱",
    quoteJa: "「桜の花びらみたいに、そっと寄り添いたいです。」",
    compLike: "和风一样安静、却把温柔落在细节里的体贴",
    compAs: "不抢戏却让人安心的陪伴感",
    compOf: "慢热却很长情的柔软内核",
  },
  kaede: {
    id: "kaede",
    name: "一之濑枫",
    nameRomaji: "Ichinose Kaede",
    image: "img/kaede.png",
    keywords: ["自由派", "夜风系", "独特品味", "随性魅力"],
    description:
      "你像一之濑枫一样，带着一点成熟与洒脱的味道。你喜欢和别人不一样，也容易被「危险又迷人」的氛围吸引。你不会被规则绑死，更在意自己这一刻想怎么走。",
    cardGradient: "linear-gradient(150deg, #ff9a76 0%, #ff6a88 45%, #a18cd1 100%)",
    initial: "枫",
    quoteJa: "「ボンジュール！　センセーショナル！」",
    compLike: "成熟又洒脱、像夜风一样自由的独特味道",
    compAs: "不按牌理出牌、却很迷人的随性魅力",
    compOf: "想把人生过得好玩又精彩的那份大胆",
  },
  mizuki: {
    id: "mizuki",
    name: "神崎美月",
    nameRomaji: "Kanzaki Mizuki",
    image: "img/mizuki.png",
    keywords: ["顶点气质", "自律", "完美主义", "月亮型"],
    description:
      "你像神崎美月一样，把「强大」当成一种习惯。你思考得很深，也对自己要求很高。你未必总是最外向的人，但你的存在感像月光一样——不刺眼，却无法忽视。",
    cardGradient: "linear-gradient(165deg, #e8eaf6 0%, #c5cae9 40%, #9575cd 100%)",
    initial: "月",
    quoteJa: "「トップアイドルは、努力の先にあるものよ。」",
    compLike: "自律又耀眼、像月光一样无法忽视的顶点气质",
    compAs: "把“强大”当成习惯、对自己很诚实的坚持",
    compOf: "不喧哗却让人想要追赶的那份沉静力量",
  },
  seira: {
    id: "seira",
    name: "音城赛拉",
    nameRomaji: "Otoshiro Seira",
    image: "img/seira.png",
    keywords: ["摇滚魂", "直来直往", "热血", "想赢"],
    description:
      "你像音城赛拉一样，情绪很真、脚步很快。你喜欢冷空气里那种清醒感，也不害怕把「想赢」说出来。你会为朋友两肋插刀，也会用很帅的方式把问题扛下来。",
    cardGradient: "linear-gradient(155deg, #ef5350 0%, #ff7043 50%, #ffca28 100%)",
    initial: "赛",
    quoteJa: "「ロックの魂、ビンビンきてるぜ！」",
    compLike: "摇滚般直爽、把心情和冲劲都写在脸上的热血",
    compAs: "想赢就大声说出来、却也很讲义气的帅气",
    compOf: "冷风一样清醒、扛事不拖泥带水的利落",
  },
  kii: {
    id: "kii",
    name: "冴草纪伊",
    nameRomaji: "Saegusa Kii",
    image: "img/kii.png",
    keywords: ["活力队友", "行动派", "气氛组", "一起成长"],
    description:
      "你像冴草纪伊一样，是那种「走啦走啦」会把人拉出门的类型。你喜欢热闹的房间、也喜欢和伙伴一起冲刺。你的开心很外放，也很容易因为「被邀请」而一整天都亮起来。",
    cardGradient: "linear-gradient(160deg, #fff59d 0%, #ffeb3b 45%, #ffcc80 100%)",
    initial: "纪",
    quoteJa: "「アイカツは、仲間がいるから楽しいんだよ！」",
    compLike: "把伙伴往快乐里拉、外放又真诚的行动力",
    compAs: "像气氛组一样、让房间一下子亮起来的元气",
    compOf: "一起成长、一起往前冲的那份队友感",
  },
  sora: {
    id: "sora",
    name: "风沢空",
    nameRomaji: "Kazesawa Sora",
    image: "img/sora.png",
    keywords: ["艺术感", "氛围控", "幻想系", "黄昏粉紫"],
    description:
      "你像风沢空一样，更在意「整体好不好看」「氛围对不对」。你容易被粉紫色黄昏、展览与梦境感吸引，也想把脑海里的画面慢慢变成现实。你的强大来自很丰富的内在宇宙。",
    cardGradient: "linear-gradient(165deg, #e1bee7 0%, #ce93d8 40%, #90caf9 100%)",
    initial: "空",
    quoteJa: "「想像の翼で、どこまでも飛んでいきたい。」",
    compLike: "在意氛围与画面、像黄昏一样梦幻的艺术感",
    compAs: "把脑海里的世界慢慢变成现实的那份细腻",
    compOf: "安静却辽阔、只属于你自己的幻想宇宙",
  },
  maria: {
    id: "maria",
    name: "姬里玛利亚",
    nameRomaji: "Himesato Maria",
    image: "img/maria.png",
    keywords: ["软萌", "天然", "治愈", "害羞真诚"],
    description:
      "你像姬里玛利亚一样，像棉花糖一样柔软，却也有很真的坚持。你会因为小动物与可爱事物心软，也会在突然被夸奖时害羞到不知所措。你的温柔不是技巧，是本性。",
    cardGradient: "linear-gradient(160deg, #ffe0f0 0%, #f8bbd9 50%, #e1bee7 100%)",
    initial: "玛",
    quoteJa: "「わ、わわ……でも、がんばります！」",
    compLike: "软绵绵的天然感、却也有很真的坚持",
    compAs: "害羞到结巴、却还是想把心意传出去的真诚",
    compOf: "像棉花糖一样、让人想保护的治愈温柔",
  },
};

/**
 * 题目：每题 5 个选项，选项内 scores 为各角色加分（未写视为 0）
 * @type {{ id: string, text: string, options: { label: string, scores: ScoreMap }[] }[]}
 */
const QUESTIONS = [
  {
    question: "如果突然穿越到星光学园，你第一件事会：",
    options: [
      {
        text: "先去看看校园里有没有漂亮的拍照点",
        scores: { sora: 2, kaede: 1, otome: 1 }
      },
      {
        text: "认真研究课程资料和前辈们的 live 录像",
        scores: { aoi: 2, sakura: 1, mizuki: 1 }
      },
      {
        text: "想赶紧认识大家",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "先观察环境再行动",
        scores: { yurika: 2, aoi: 1, kaede: 1 }
      },
      {
        text: "去训练室练习，思考怎么快速进步",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      }
    ]
  },

  {
    question: "如果要准备一场 live，你最在意：",
    options: [
      {
        text: "整体舞台氛围够不够梦幻",
        scores: { otome: 2, sora: 1, maria: 1 }
      },
      {
        text: "能不能让观众开心",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "自己的表现有没有失误",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      },
      {
        text: "舞台设计和服装细节",
        scores: { kaede: 2, sora: 1, sakura: 1 }
      },
      {
        text: "流程是不是安排得够完美",
        scores: { aoi: 2, mizuki: 1, sakura: 1 }
      }
    ]
  },

  {
    question: "如果偶活举办校园祭，你会：",
    options: [
      {
        text: "到处跑来跑去参加活动，对什么都好奇",
        scores: { kii: 2, ichigo: 1, otome: 1 }
      },
      {
        text: "负责或协助安排整体流程",
        scores: { aoi: 2, sakura: 1, mizuki: 1 }
      },
      {
        text: "布置特别有氛围的装饰",
        scores: { yurika: 2, kaede: 1, sora: 1 }
      },
      {
        text: "为了让大家玩得开心提出活动创意",
        scores: { maria: 2, sakura: 1, ichigo: 1 }
      },
      {
        text: "想把舞台做到最完美",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      }
    ]
  },

  {
    question: "如果今天状态不好，你会：",
    options: [
      {
        text: "吃点喜欢的东西转换心情",
        scores: { otome: 2, kii: 1, ichigo: 1 }
      },
      {
        text: "想一个人待会儿",
        scores: { yurika: 2, sora: 1, maria: 1 }
      },
      {
        text: "短暂休息后继续努力",
        scores: { ran: 2, mizuki: 1, seira: 1 }
      },
      {
        text: "找朋友聊天倾诉",
        scores: { ichigo: 2, maria: 1, kii: 1 }
      },
      {
        text: "整理一下接下来的计划",
        scores: { aoi: 2, sakura: 1, kaede: 1 }
      }
    ]
  },

  {
    question: "你更喜欢哪种偶像风格？",
    options: [
      {
        text: "元气感染全场",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "神秘感和距离感",
        scores: { yurika: 2, mizuki: 1, kaede: 1 }
      },
      {
        text: "帅气强大型",
        scores: { seira: 2, ran: 1, mizuki: 1 }
      },
      {
        text: "梦幻可爱型",
        scores: { otome: 2, sora: 1, kii: 1 }
      },
      {
        text: "聪明冷静型",
        scores: { aoi: 2, sakura: 1, ran: 1 }
      }
    ]
  },

  {
    question: "如果突然爆红，你会：",
    options: [
      {
        text: "开心和大家互动",
        scores: { kii: 2, ichigo: 1, maria: 1 }
      },
      {
        text: "担心自己做得还不够好",
        scores: { ran: 2, mizuki: 1, aoi: 1 }
      },
      {
        text: "想打造自己的独特风格",
        scores: { kaede: 2, sora: 1, yurika: 1 }
      },
      {
        text: "会认真回复粉丝",
        scores: { maria: 2, sakura: 1, ichigo: 1 }
      },
      {
        text: "表面冷静其实偷偷开心",
        scores: { yurika: 2, aoi: 1, mizuki: 1 }
      }
    ]
  },

  {
    question: "如果在偶活里组队，你更想当：",
    options: [
      {
        text: "带动气氛的中心",
        scores: { ichigo: 2, kii: 1, seira: 1 }
      },
      {
        text: "负责规划的人",
        scores: { aoi: 2, sakura: 1, mizuki: 1 }
      },
      {
        text: "默默稳定团队的人",
        scores: { maria: 2, ran: 1, sakura: 1 }
      },
      {
        text: "最有个人特色的人",
        scores: { kaede: 2, yurika: 1, sora: 1 }
      },
      {
        text: "实力最强的ACE",
        scores: { seira: 2, ran: 1, mizuki: 1 }
      }
    ]
  },

  {
    question: "你更喜欢哪种舞台灯光？",
    options: [
      {
        text: "暖洋洋的亮色系",
        scores: { ichigo: 2, maria: 1, kii: 1 }
      },
      {
        text: "偏冷的高级灯光",
        scores: { mizuki: 2, ran: 1, yurika: 1 }
      },
      {
        text: "像童话一样的柔光",
        scores: { otome: 2, sora: 1, maria: 1 }
      },
      {
        text: "有点暗色系的夜晚氛围",
        scores: { yurika: 2, kaede: 1, aoi: 1 }
      },
      {
        text: "干净利落的聚光灯",
        scores: { seira: 2, ran: 1, sakura: 1 }
      }
    ]
  },

  {
    question: "如果你在星光学园的朋友突然说“我可能并不适合当偶像”，你会说：",
    options: [
      {
        text: "要不要先休息一下？有时候只是太累了而已，你已经很棒了",
        scores: { sakura: 2, maria: 1, aoi: 1 }
      },
      {
        text: "才不是！你站在舞台上的时候真的超级闪闪发光啊！",
        scores: { ichigo: 2, kii: 1, otome: 1 }
      },
      {
        text: "能一直努力到现在的人，本来就已经很厉害了。",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      },
      {
        text: "偶尔会迷茫也很正常呀，不代表你不适合。",
        scores: { yurika: 2, kaede: 1, sora: 1 }
      },
      {
        text: "但我觉得你的舞台有种别人没有的感觉，比如……（开始列举）",
        scores: { sora: 2, kaede: 1, mizuki: 1 }
      }
    ]
  },

  {
    question: "如果拥有偶像气场，你希望是：",
    options: [
      {
        text: "彩色宝石和星星一起闪闪发光的感觉",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "干净又有力量、让人忍不住一直注视的光",
        scores: { mizuki: 2, seira: 1, ran: 1 }
      },
      {
        text: "漂浮着糖果、花朵和童话泡泡的梦幻感",
        scores: { sora: 2, otome: 1, kaede: 1 }
      },
      {
        text: "月光、蝙蝠与暗紫色玫瑰交织的夜晚气息",
        scores: { yurika: 2, kaede: 1, mizuki: 1 }
      },
      {
        text: "温柔玻璃感、柔和的冷色系光芒",
        scores: { aoi: 2, sakura: 1, maria: 1 }
      }
    ]
  },

  {
    question: "你更接近哪种生活方式？",
    options: [
      {
        text: "每天都想尝试新东西",
        scores: { kaede: 2, ichigo: 1, kii: 1 }
      },
      {
        text: "按自己的节奏稳定生活",
        scores: { sakura: 2, maria: 1, aoi: 1 }
      },
      {
        text: "一直朝目标前进",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      },
      {
        text: "沉浸在喜欢的小世界里",
        scores: { otome: 2, sora: 1, yurika: 1 }
      },
      {
        text: "特立独行但享受其中",
        scores: { yurika: 2, kaede: 1, aoi: 1 }
      }
    ]
  },

  {
    question: "如果要拍偶像活动海报，你会：",
    options: [
      {
        text: "笑得超级灿烂",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "认真研究镜头表现",
        scores: { aoi: 2, mizuki: 1, sakura: 1 }
      },
      {
        text: "想拍得帅一点",
        scores: { seira: 2, ran: 1, mizuki: 1 }
      },
      {
        text: "加入特别的小设计",
        scores: { kaede: 2, sora: 1, otome: 1 }
      },
      {
        text: "想拍出有故事感的感觉",
        scores: { yurika: 2, sora: 1, maria: 1 }
      }
    ]
  },

  {
    question: "如果半夜睡不着，你一般会：",
    options: [
      {
        text: "刷点有趣的东西",
        scores: { kii: 2, ichigo: 1, kaede: 1 }
      },
      {
        text: "想很多未来的事",
        scores: { aoi: 2, mizuki: 1, sakura: 1 }
      },
      {
        text: "突然想努力变更强",
        scores: { ran: 2, seira: 1, mizuki: 1 }
      },
      {
        text: "脑内开始幻想小剧场",
        scores: { otome: 2, sora: 1, yurika: 1 }
      },
      {
        text: "安静听歌发呆",
        scores: { maria: 2, yurika: 1, sakura: 1 }
      }
    ]
  },

  {
    question: "你更希望别人怎么评价你？",
    options: [
      {
        text: "相处起来很舒服",
        scores: { maria: 2, sakura: 1, aoi: 1 }
      },
      {
        text: "很有魅力和存在感",
        scores: { mizuki: 2, yurika: 1, kaede: 1 }
      },
      {
        text: "特别有元气",
        scores: { ichigo: 2, kii: 1, otome: 1 }
      },
      {
        text: "很有个性",
        scores: { sora: 2, kaede: 1, yurika: 1 }
      },
      {
        text: "实力很强很可靠",
        scores: { seira: 2, ran: 1, aoi: 1 }
      }
    ]
  },

  {
    question: "如果偶活角色们一起去游乐园，你更像：",
    options: [
      {
        text: "一路兴奋到处跑的人",
        scores: { ichigo: 2, kii: 1, maria: 1 }
      },
      {
        text: "一直在拍漂亮照片的人",
        scores: { mizuki: 2, ran: 1, yurika: 1 }
      },
      {
        text: "准备超多零食的人",
        scores: { otome: 2, sora: 1, kaede: 1 }
      },
      {
        text: "想挑战刺激项目的人",
        scores: { seira: 2, ran: 1, aoi: 1 }
      },
      {
        text: "默默帮大家规划路线的人",
        scores: { sakura: 2, maria: 1, aoi: 1 }
      }
    ]
  }
];
/**
 * 每题每角理论最高分（用于匹配百分比）
 */
function computeMaxScoresPerCharacter(questions, ids) {
  /** @type {Record<string, number>} */
  const max = {};
  ids.forEach((id) => {
    max[id] = 0;
  });
  questions.forEach((q) => {
    ids.forEach((id) => {
      let best = 0;
      q.options.forEach((opt) => {
        const v = opt.scores[id] || 0;
        if (v > best) best = v;
      });
      max[id] += best;
    });
  });
  return max;
}

const MAX_SCORES_BY_CHARACTER = computeMaxScoresPerCharacter(QUESTIONS, CHARACTER_IDS);

/** 供非模块 `app.js` 读取 */
window.AIKATSU_QUIZ_DATA = {
  CHARACTER_IDS,
  CHARACTERS,
  QUESTIONS,
  MAX_SCORES_BY_CHARACTER,
};
