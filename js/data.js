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
    question: "周末突然空出一天，你会：",
    options: [
      { text: "独自去的小店坐一下午", scores: { sora: 2, otome: 1 } },
      { text: "约朋友出去玩", scores: { ichigo: 2, kii: 1 } },
      { text: "把拖着的事情做完", scores: { ran: 2, seira: 1 } },
      { text: "晚上一个人散散步", scores: { yurika: 2, kaede: 1 } },
      { text: "待在家读书做手工", scores: { aoi: 2, sakura: 1 } }
    ]
  },

  {
    question: "朋友一般会因为什么来找你？",
    options: [
      { text: "分享日常琐事", scores: { sakura: 2, maria: 1 } },
      { text: "出去玩", scores: { kii: 2, ichigo: 1 } },
      { text: "想和你deeptalk", scores: { aoi: 2, mizuki: 1 } },
      { text: "想让你帮忙解决问题", scores: { seira: 2, ran: 1 } },
      { text: "想找你一起做点天马行空的事", scores: { kaede: 2, sora: 1 } }
    ]
  },

  {
    question: "如果突然要上台讲话，你会：",
    options: [
      { text: "提前在脑子里排练很多遍", scores: { sakura: 2, aoi: 1 } },
      { text: "先讲了再说", scores: { ichigo: 2, kaede: 1 } },
      { text: "想做到最完美", scores: { mizuki: 2, ran: 1 } },
      { text: "表面冷静其实有点紧张", scores: { yurika: 2, maria: 1 } },
      { text: "想让整体表现更有风格", scores: { sora: 2, otome: 1 } }
    ]
  },

  {
    question: "你最容易在哪种时候开心？",
    options: [
      { text: "大家一起热热闹闹", scores: { ichigo: 2, kii: 1 } },
      { text: "终于有自己的独处时间", scores: { yurika: 2, aoi: 1 } },
      { text: "买到喜欢的小东西", scores: { otome: 2, kaede: 1 } },
      { text: "发现自己进步了", scores: { ran: 2, seira: 1 } },
      { text: "被别人记住小细节", scores: { maria: 2, sakura: 1 } }
    ]
  },

  {
    question: "你理想中的房间更像：",
    options: [
      { text: "简单但很有质感", scores: { mizuki: 2, ran: 1 } },
      { text: "舒服整洁、很好生活", scores: { sakura: 2, maria: 1 } },
      { text: "灯光偏暗、适合晚上待着", scores: { yurika: 2, kaede: 1 } },
      { text: "像艺术展一样有氛围", scores: { sora: 2, otome: 1 } },
      { text: "热热闹闹放很多周边", scores: { kii: 2, ichigo: 1 } }
    ]
  },

  {
    question: "朋友突然很难过，你会：",
    options: [
      { text: "认真听对方讲话", scores: { maria: 2, aoi: 1 } },
      { text: "努力让对方开心起来", scores: { ichigo: 2, kii: 1 } },
      { text: "默默陪在旁边", scores: { yurika: 2, sora: 1 } },
      { text: "帮对方分析问题", scores: { sakura: 2, seira: 1 } },
      { text: "直接帮对方解决事情", scores: { ran: 2, mizuki: 1 } }
    ]
  },

  {
    question: "你最受不了哪种情况？",
    options: [
      { text: "生活太无聊没变化", scores: { kaede: 2, sora: 1 } },
      { text: "气氛突然冷掉", scores: { kii: 2, ichigo: 1 } },
      { text: "自己不够优秀", scores: { ran: 2, seira: 1 } },
      { text: "事情完全失控", scores: { aoi: 2, mizuki: 1 } },
      { text: "一直没有自己的空间", scores: { yurika: 2, sakura: 1 } }
    ]
  },

  {
    question: "你更喜欢哪种天气？",
    options: [
      { text: "黄昏特别漂亮的时候", scores: { otome: 2, sora: 1 } },
      { text: "晚上有风的时候", scores: { yurika: 2, kaede: 1 } },
      { text: "刚下完雨的时候", scores: { sakura: 2, maria: 1 } },
      { text: "阳光正好的晴天", scores: { ichigo: 2, kii: 1 } },
      { text: "冬天冷冷的空气", scores: { ran: 2, seira: 1 } }
    ]
  },

  {
    question: "别人最常怎么评价你？",
    options: [
      { text: "其实比想象中更温柔", scores: { yurika: 2, maria: 1 } },
      { text: "做事很认真", scores: { aoi: 2, sakura: 1 } },
      { text: "有自己的特别风格", scores: { kaede: 2, sora: 1 } },
      { text: "很有活力", scores: { ichigo: 2, kii: 1 } },
      { text: "对自己要求很高", scores: { mizuki: 2, ran: 1 } }
    ]
  },

  {
    question: "如果突然有很多人关注你，你会：",
    options: [
      { text: "会认真回复大家", scores: { maria: 2, aoi: 1 } },
      { text: "开始设立自己的人设", scores: { sora: 2, otome: 1 } },
      { text: "想让自己表现更好", scores: { ran: 2, mizuki: 1 } },
      { text: "开心地和大家互动", scores: { kii: 2, ichigo: 1 } },
      { text: "表面冷静其实很在意评价", scores: { yurika: 2, sakura: 1 } }
    ]
  },

  {
    question: "你更喜欢哪种生活节奏？",
    options: [
      { text: "稳定舒服最重要", scores: { sakura: 2, maria: 1 } },
      { text: "每天都有新鲜事", scores: { ichigo: 2, kii: 1 } },
      { text: "一直朝目标前进", scores: { seira: 2, ran: 1 } },
      { text: "偶尔一个人待着充电", scores: { yurika: 2, aoi: 1 } },
      { text: "自由自在的生活", scores: { kaede: 2, sora: 1 } }
    ]
  },

  {
    question: "如果现在立刻出门，你会：",
    options: [
      { text: "顺便把别的事一起做完", scores: { ran: 2, mizuki: 1 } },
      { text: "戴耳机慢慢走", scores: { yurika: 2, maria: 1 } },
      { text: "边走边决定去哪", scores: { ichigo: 2, kaede: 1 } },
      { text: "先确认路线和天气", scores: { aoi: 2, sakura: 1 } },
      { text: "想穿得好看一点再出门", scores: { sora: 2, otome: 1 } }
    ]
  },

  {
    question: "你更容易被哪种人吸引？",
    options: [
      { text: "细心靠谱的人", scores: { sakura: 2, maria: 1 } },
      { text: "能力很强的人", scores: { ran: 2, mizuki: 1 } },
      { text: "有趣又有个性的人", scores: { kaede: 2, sora: 1 } },
      { text: "安静但相处舒服的人", scores: { yurika: 2, aoi: 1 } },
      { text: "很有感染力的人", scores: { ichigo: 2, kii: 1 } }
    ]
  },

  {
    question: "你最容易在哪种时候伤心？",
    options: [
      { text: "来灵感却写不出东西的时候", scores: { sora: 2, kaede: 1 } },
      { text: "热闹结束之后", scores: { ichigo: 2, kii: 1 } },
      { text: "想太多未来的时候", scores: { aoi: 2, sakura: 1 } },
      { text: "一个人待太久的时候", scores: { yurika: 2, maria: 1 } },
      { text: "觉得自己不够厉害的时候", scores: { ran: 2, seira: 1 } }
    ]
  },

  {
    question: "你希望别人怎么记住你？",
    options: [
      { text: "很有个性", scores: { kaede: 2, sora: 1 } },
      { text: "温暖又有活力", scores: { ichigo: 2, maria: 1 } },
      { text: "强大又耀眼", scores: { mizuki: 2, seira: 1 } },
      { text: "聪明又可靠", scores: { aoi: 2, sakura: 1 } },
      { text: "相处后会越来越喜欢", scores: { yurika: 2, otome: 1 } }
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
