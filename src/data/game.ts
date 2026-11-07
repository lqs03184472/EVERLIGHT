import { extraCharacters } from './characters-extra'

export type LawId = 'wind' | 'flame' | 'frost' | 'tide' | 'stone' | 'star'
export type Gender = 'female' | 'male'

export interface Law {
  id: LawId
  name: string
  en: string
  color: string
  motto: string
}

export const laws: Law[] = [
  { id: 'wind', name: '风律', en: 'WIND', color: '#7FA89B', motto: '记住每一个名字' },
  { id: 'flame', name: '焰律', en: 'FLAME', color: '#D2734E', motto: '把热量传给下一个人' },
  { id: 'frost', name: '霜律', en: 'FROST', color: '#8FB3CE', motto: '让时间慢一些' },
  { id: 'tide', name: '潮律', en: 'TIDE', color: '#4E8FA6', motto: '听海把实话说出来' },
  { id: 'stone', name: '岩律', en: 'STONE', color: '#BFA46C', motto: '守住答应了的事' },
  { id: 'star', name: '星律', en: 'STAR', color: '#D9C08A', motto: '为熄灭的光指路' },
]

export const lawMap: Record<LawId, Law> = laws.reduce(
  (acc, law) => ({ ...acc, [law.id]: law }),
  {} as Record<LawId, Law>,
)

export interface Skill {
  type: string
  name: string
  desc: string
}

export interface Voice {
  context: string
  line: string
}

export interface Character {
  slug: string
  name: string
  en: string
  title: string
  faction: string
  law: LawId
  weapon: string
  rarity: 4 | 5
  gender: Gender
  age: string
  height: string
  birthday: string
  outfit: string
  portrait: string
  closeup: string
  quote: string
  intro: string
  story: string
  stats: { label: string; value: string; note: string }[]
  skills: Skill[]
  constellation: string[]
  voices: Voice[]
}

export const characters: Character[] = [
  {
    slug: 'serin',
    name: '瑟琳',
    en: 'SERIN',
    title: '苍岚之翼',
    faction: '苍岚高地 · 巡风队',
    law: 'wind',
    weapon: '弓',
    rarity: 5,
    gender: 'female',
    age: '24',
    height: '172 cm',
    birthday: '3月19日',
    outfit: '巡风短披风 · 银羽发饰 · 长靴',
    portrait: 'images/char-serin.jpg',
    closeup: 'images/char-serin-close.jpg',
    quote: '名字会被风吹散，所以我替风记着。',
    intro: '巡风队的第九任队长。她能在断崖之间听见风的回声，并在回声里找到迷路的人。',
    story:
      '瑟琳出生在苍岚最北的风哨塔，那里终年只有风声与钟声。星火之灾后，塔中的钟再也没有响过。她带着祖父留下的旧弓上路，用三年时间走遍高地，把每一座哑掉的塔重新点亮——不是为了纪念，而是为了让后来的人知道该往哪里走。她很少拔箭，因为她更擅长让别人不必射箭。',
    stats: [
      { label: '生命值', value: '12,480', note: '基础生命' },
      { label: '攻击力', value: '342', note: '基础攻击' },
      { label: '防御力', value: '628', note: '基础防御' },
      { label: '暴击率', value: '24.6%', note: '风律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '逐风之矢',
        desc: '连续射出至多五箭，最后一箭附带风压，将敌人向后推开。蓄力射击可穿透至多三名目标。',
      },
      {
        type: '律技',
        name: '回旋风哨',
        desc: '掷出风哨，标记一片区域并牵引周围气流。再次触发时，瑟琳跃向空中，向标记处倾泻箭雨。',
      },
      {
        type: '律爆',
        name: '千风长歌',
        desc: '拉起旧弓，向天空射出一支无箭之矢。风从高处落下，持续撕扯范围内的敌人，并为每名队友恢复少量体力。',
      },
    ],
    constellation: ['风哨初鸣', '断崖回响', '归途之弦', '静默的钟', '长夜巡行', '千风之诗'],
    voices: [
      { context: '初次见面', line: '巡风队瑟琳。风告诉我你在找路——跟上，别掉队。' },
      { context: '闲聊', line: '你知道吗？高地有三百二十七座风哨塔。我数过。' },
      { context: '突破', line: '弓弦又紧了一些。这样就好，我不喜欢太松的东西。' },
    ],
  },
  {
    slug: 'jin',
    name: '烬',
    en: 'JIN',
    title: '不熄之锤',
    faction: '拾烬港 · 九号锻炉',
    law: 'flame',
    weapon: '双手剑',
    rarity: 4,
    gender: 'male',
    age: '27',
    height: '188 cm',
    birthday: '7月12日',
    outfit: '锻炉皮围裙 · 单肩护甲 · 火痕手套',
    portrait: 'images/char-jin.jpg',
    closeup: 'images/char-jin-close.jpg',
    quote: '铁不会骗人。它软，是因为你没用够力气。',
    intro: '拾烬港最年轻的锻炉主，脾气比炉火更烫，手艺比传说更稳。',
    story:
      '烬的父亲是九号锻炉的最后一任炉主，死于星火之灾那年的一场塌方。烬把父亲的锤子重新熔了，锻成自己的尺寸——他说遗物太轻，握不住。如今他的锻炉只接一种活：为准备远行的人修兵器。他不问对方要去哪里，只在交货时补一句「回来的时候，别把剑丢了」。',
    stats: [
      { label: '生命值', value: '10,860', note: '基础生命' },
      { label: '攻击力', value: '298', note: '基础攻击' },
      { label: '防御力', value: '745', note: '基础防御' },
      { label: '暴击率', value: '18.0%', note: '焰律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '淬火连斩',
        desc: '以熔炉般的节奏挥动巨锤，第三击必定造成爆燃，并在命中处留下短暂的火痕。',
      },
      {
        type: '律技',
        name: '余温',
        desc: '将锤头按入地面，引燃一片区域。烬在余温范围内获得减伤，并为队友的攻击附加火伤。',
      },
      {
        type: '律爆',
        name: '不熄',
        desc: '把整座锻炉的热量灌入一次挥击，造成范围伤害。之后的一段时间内，普通攻击附带灼烧。',
      },
    ],
    constellation: ['炉火初燃', '铁与盐', '父之名', '九号锻炉', '冷却的雨', '不熄的锤'],
    voices: [
      { context: '初次见面', line: '九号锻炉，烬。剑有伤就拿来，别自己乱磨。' },
      { context: '闲聊', line: '我爹说过，好铁听火的话。人也一样。' },
      { context: '突破', line: '手又厚了一层茧。这样握锤才不疼。' },
    ],
  },
  {
    slug: 'viel',
    name: '薇尔',
    en: 'VIEL',
    title: '霜语低吟',
    faction: '露霜林海 · 守望者',
    law: 'frost',
    weapon: '法器',
    rarity: 5,
    gender: 'female',
    age: '21',
    height: '165 cm',
    birthday: '12月21日',
    outfit: '霜纹长袍 · 白丝长袜 · 银扣短靴',
    portrait: 'images/char-viel.jpg',
    closeup: 'images/char-viel-close.jpg',
    quote: '雪落下来的时候，我在听它说些什么。',
    intro: '树冠城的守望者，能听见霜在枝叶间结成的每一个句子。',
    story:
      '薇尔守着一座只在冬天出现的图书馆。书页是用霜写成的，日出便会消失，所以她把重要的句子都背了下来。三百年来，守望者们用这种方式保存长夜之前的历史；薇尔是其中最年轻的一个，也是唯一一个开始怀疑「保存」是否足够的人。她带着霜杖离开树冠，去寻找那些没有被写下来的部分。',
    stats: [
      { label: '生命值', value: '11,920', note: '基础生命' },
      { label: '攻击力', value: '388', note: '基础攻击' },
      { label: '防御力', value: '590', note: '基础防御' },
      { label: '暴击率', value: '26.8%', note: '霜律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '霜枝点触',
        desc: '挥动霜杖释放三段霜花，第三段在敌人身上留下霜印，霜印会降低目标移速。',
      },
      {
        type: '律技',
        name: '停雪',
        desc: '在身前凝出一面霜镜，抵挡并反射部分伤害；霜镜破碎时冻结周围敌人。',
      },
      {
        type: '律爆',
        name: '霜语长卷',
        desc: '展开一卷由霜写成的书，持续降下霜雪。范围内敌人减速，队友获得护盾。',
      },
    ],
    constellation: ['初雪的书页', '树冠之上', '无声的句子', '冬之图书馆', '未写的部分', '霜语回响'],
    voices: [
      { context: '初次见面', line: '你是来借书的，还是来还书的？……都不是吗。那也没关系。' },
      { context: '闲聊', line: '这段历史我只背了一半。剩下的一半，雪没有写完。' },
      { context: '突破', line: '霜更听话了。可我还是更愿意听它自己说话。' },
    ],
  },
  {
    slug: 'azra',
    name: '阿兹拉',
    en: 'AZRA',
    title: '沙海星图',
    faction: '沙鸣遗都 · 观星台',
    law: 'stone',
    weapon: '长柄武器',
    rarity: 4,
    gender: 'female',
    age: '23',
    height: '170 cm',
    birthday: '9月8日',
    outfit: '沙色旅装 · 星图披巾 · 高跟长靴',
    portrait: 'images/char-azra.jpg',
    closeup: 'images/char-azra-close.jpg',
    quote: '沙埋掉的是名字，星图会替我们记得。',
    intro: '遗都最年轻的星图学者，用一杆沙脊长枪丈量沉没的王朝。',
    story:
      '阿兹拉在赤沙之下发现了一张完整星图，图上标注的不是星星，而是三百年前同时熄灭的七盏灯。她把它抄在随身的卷轴上，一边旅行一边补全空缺的坐标。遗都的老学者们说她疯了——星图是用来仰望的，不是用来走进去的。她只是把长枪扛上肩，说了一句：那就让我走进去。',
    stats: [
      { label: '生命值', value: '10,240', note: '基础生命' },
      { label: '攻击力', value: '305', note: '基础攻击' },
      { label: '防御力', value: '802', note: '基础防御' },
      { label: '暴击率', value: '16.4%', note: '岩律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '丈沙',
        desc: '以长枪连续穿刺，最后一击挑起沙尘。枪势经过沙地时伤害提升。',
      },
      {
        type: '律技',
        name: '星轨刻痕',
        desc: '在地面刻下一段星轨，轨迹上的敌人持续受到岩伤；轨迹闭合时引发一次爆发。',
      },
      {
        type: '律爆',
        name: '遗都坐标系',
        desc: '展开完整星图，标记全场并为队友提供岩之护盾；被标记的敌人受到额外伤害。',
      },
    ],
    constellation: ['沙下的第一颗星', '卷轴与锈', '坐标七', '走进星图', '老学者的灯', '遗都之上'],
    voices: [
      { context: '初次见面', line: '阿兹拉，观星台的。别踩我的卷轴，谢谢。' },
      { context: '闲聊', line: '这张星图缺了七个点。你说巧不巧，正好是七盏灯。' },
      { context: '突破', line: '枪尖更稳了。丈量这么长的路，手不能抖。' },
    ],
  },
  {
    slug: 'lan',
    name: '澜',
    en: 'LAN',
    title: '潮歌不歇',
    faction: '潮汐群岛 · 领航队',
    law: 'tide',
    weapon: '单手剑',
    rarity: 4,
    gender: 'female',
    age: '19',
    height: '162 cm',
    birthday: '5月2日',
    outfit: '海蓝短衫 · 白丝 · 软底短靴',
    portrait: 'images/char-lan.jpg',
    closeup: 'images/char-lan-close.jpg',
    quote: '潮水退下去的时候，记得看它留下了什么。',
    intro: '群岛最年轻的领航员，能凭一首渔歌判断暗礁的位置。',
    story:
      '澜的故乡是一座只有十二户人家的小岛，星火之灾后，岛上的灯再也没亮过。她跟着老领航员学了三年，把每一段潮汐的节奏都记进歌里。现在她带着一把弯刀和一整本渔歌集出海，替来往的船只标出安全的水道——顺便，寻找传说中沉在深处的「第七盏灯」。',
    stats: [
      { label: '生命值', value: '10,980', note: '基础生命' },
      { label: '攻击力', value: '312', note: '基础攻击' },
      { label: '防御力', value: '690', note: '基础防御' },
      { label: '暴击率', value: '20.2%', note: '潮律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '踏浪三式',
        desc: '轻快的三段连斩，命中后向任意方向短距离位移，可连续穿越多个目标。',
      },
      {
        type: '律技',
        name: '引潮歌',
        desc: '唱出一段渔歌，为队友恢复体力并附加水幕；水幕破裂时击退周围敌人。',
      },
      {
        type: '律爆',
        name: '不歇之潮',
        desc: '召唤涨潮，持续推挤与冲击范围内的敌人；潮水退去时留下治疗水域。',
      },
    ],
    constellation: ['十二户的灯', '第一段渔歌', '暗礁与月光', '老领航员的罗盘', '深处的第七盏', '潮歌不歇'],
    voices: [
      { context: '初次见面', line: '领航员澜。上船吧，潮水不等人。' },
      { context: '闲聊', line: '这首歌唱到第三句就要右转——别问为什么，问就是暗礁。' },
      { context: '突破', line: '嗓子和刀一样，越用越亮。今天状态不错。' },
    ],
  },
  {
    slug: 'calvin',
    name: '卡尔文',
    en: 'CALVIN',
    title: '铁誓不移',
    faction: '苍岚高地 · 石垒要塞',
    law: 'stone',
    weapon: '双手剑',
    rarity: 4,
    gender: 'male',
    age: '52',
    height: '190 cm',
    birthday: '1月15日',
    outfit: '旧式重甲 · 石门纹披风 · 铁靴',
    portrait: 'images/char-calvin.jpg',
    closeup: 'images/char-calvin-close.jpg',
    quote: '我答应过守住这道门。门还在，所以我还在。',
    intro: '石垒要塞最后的守门人，三十年没有离开过他的岗位。',
    story:
      '星火之灾那年，要塞的守军一夜之间散尽，只剩卡尔文留在门后。他把自己的名字刻在门楣上，作为一笔未完成的誓言。后来路过的人劝他下山，说长夜已经过去了；他摇摇头，指了指门外的雪——只要还有人需要一扇能关上的门，他就得站在这里。他并不孤独，因为他把每一个借宿的旅人都当作回来的旧友。',
    stats: [
      { label: '生命值', value: '13,760', note: '基础生命' },
      { label: '攻击力', value: '268', note: '基础攻击' },
      { label: '防御力', value: '915', note: '基础防御' },
      { label: '暴击率', value: '12.0%', note: '岩律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '门之重',
        desc: '缓慢而沉重的四段挥剑，第三段获得霸体，不会被击退。',
      },
      {
        type: '律技',
        name: '石垒',
        desc: '立起一面石门，吸收伤害并为身后的队友提供掩体；石门存在期间，卡尔文防御提升。',
      },
      {
        type: '律爆',
        name: '最后的守门人',
        desc: '以誓言为引，在范围内筑起环形石墙，阻挡敌人并为队友恢复护盾。',
      },
    ],
    constellation: ['门楣上的名字', '三十年的雪', '借宿者', '关不上的门', '旧友与信', '铁誓不移'],
    voices: [
      { context: '初次见面', line: '要塞守门人卡尔文。门在那边，风在这边，你自己选。' },
      { context: '闲聊', line: '那年之后，我就没数过冬天了。数不清。' },
      { context: '突破', line: '铠甲又紧了一点。人老了，骨头反而硬。' },
    ],
  },
  {
    slug: 'noa',
    name: '诺亚',
    en: 'NOA',
    title: '星轨观测者',
    faction: '沙鸣遗都 · 观星台',
    law: 'star',
    weapon: '法器',
    rarity: 5,
    gender: 'male',
    age: '29',
    height: '180 cm',
    birthday: '2月29日',
    outfit: '观星长外套 · 黄铜镜片 · 高领',
    portrait: 'images/char-noa.jpg',
    closeup: 'images/char-noa-close.jpg',
    quote: '星星不是在发光，它们是在指路。',
    intro: '沙海观星台的现任台长，为每一颗熄灭的星建立了一本档案。',
    story:
      '诺亚相信星火之灾不是终点，而是一次「轨道偏移」。他把三百年来所有观测记录重新算了一遍，得出一个让同僚无法接受的结论：第七盏灯从未熄灭，它只是被藏进了某个不在天上的地方。为了验证这个猜想，他离开观星台，带着一只黄铜星盘走遍五座城邦，把每一次异常的光都记进档案。他的镜片很厚，眼神很亮。',
    stats: [
      { label: '生命值', value: '11,360', note: '基础生命' },
      { label: '攻击力', value: '402', note: '基础攻击' },
      { label: '防御力', value: '566', note: '基础防御' },
      { label: '暴击率', value: '28.4%', note: '星律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '星轨测算',
        desc: '释放三枚星芒，命中时在敌人身上留下轨道标记，标记可被律技引爆。',
      },
      {
        type: '律技',
        name: '黄铜星盘',
        desc: '展开一座星盘，持续为队友恢复能量；星盘旋转时改变战场内的星轨方向。',
      },
      {
        type: '律爆',
        name: '第七盏灯',
        desc: '推演出的星图短暂显形，标记全场敌人并造成星律伤害；对生命值低于一半的敌人伤害提升。',
      },
    ],
    constellation: ['第一页档案', '偏移的轨道', '黄铜与镜片', '不在天上的灯', '五城邦之光', '星轨观测者'],
    voices: [
      { context: '初次见面', line: '诺亚，观星台。你的影子比刚才偏了三度，别紧张，只是风。' },
      { context: '闲聊', line: '七盏灯里有一盏是假的。你猜是哪一盏？' },
      { context: '突破', line: '记录更清楚了。离答案又近了一点。' },
    ],
  },
  {
    slug: 'eris',
    name: '艾莉丝',
    en: 'ERIS',
    title: '烬羽之舞',
    faction: '拾烬港 · 焰羽剧院',
    law: 'flame',
    weapon: '单手剑',
    rarity: 5,
    gender: 'female',
    age: '22',
    height: '168 cm',
    birthday: '11月6日',
    outfit: '焰羽舞裙 · 黑丝 · 舞会高跟',
    portrait: 'images/char-eris.jpg',
    closeup: 'images/char-eris-close.jpg',
    quote: '看好了——火也会跳舞。',
    intro: '拾烬港焰羽剧院的首席舞者，用剑和火焰写她的舞谱。',
    story:
      '艾莉丝从小在剧院的幕布后面长大，看惯了用舞台灯光伪造的「星星」。星火之灾后，剧院停了业，她一个人留在空荡的剧场里练舞，直到某个夜晚发现剑锋划过时能擦出真正的火星。于是她把舞步改成了剑步，把每一次旋转都当成一次点燃。她登台从不谢幕，因为她认为火光不需要告别。',
    stats: [
      { label: '生命值', value: '11,640', note: '基础生命' },
      { label: '攻击力', value: '415', note: '基础攻击' },
      { label: '防御力', value: '548', note: '基础防御' },
      { label: '暴击率', value: '30.6%', note: '焰律加成后' },
    ],
    skills: [
      {
        type: '普通攻击',
        name: '烬羽五步',
        desc: '快速五段连斩，每段命中时叠加一层「烬印」，最多五层。',
      },
      {
        type: '律技',
        name: '焰羽回旋',
        desc: '旋身斩出环形火羽，引爆敌人身上的烬印；每引爆一层，恢复少量能量。',
      },
      {
        type: '律爆',
        name: '不谢幕',
        desc: '进入「独舞」状态，连续位移斩击，最后以一次烬爆收束；期间免疫打断。',
      },
    ],
    constellation: ['幕布之后', '第一次火星', '空荡的剧院', '剑步', '不谢幕', '烬羽之舞'],
    voices: [
      { context: '初次见面', line: '焰羽剧院，艾莉丝。别眨眼，我的舞很短。' },
      { context: '闲聊', line: '台下没有人也没关系。火在看。' },
      { context: '突破', line: '舞步更快了。可惜幕布已经烧掉了。' },
    ],
  },
  ...extraCharacters,
]

export interface Nation {
  id: string
  index: string
  name: string
  en: string
  law: LawId
  tagline: string
  desc: string
  image: string
  tags: string[]
}

export const nations: Nation[] = [
  {
    id: 'highlands',
    index: '01',
    name: '苍岚高地',
    en: 'AETHERWIND HIGHLANDS',
    law: 'wind',
    tagline: '风把归途吹得很长。',
    desc: '断崖之上，巡风人守着被遗忘的风哨塔。他们的马蹄声，是高地唯一的地图。',
    image: 'images/nation-highlands.jpg',
    tags: ['断崖高原', '风哨塔', '巡风队'],
  },
  {
    id: 'cinderport',
    index: '02',
    name: '拾烬港',
    en: 'CINDERPORT',
    law: 'flame',
    tagline: '火从未熄灭，只是换了形状。',
    desc: '熔岩与铁砧之城。每一把兵器都记得锻造它的那双手，也记得那双手的主人。',
    image: 'images/nation-cinderport.jpg',
    tags: ['熔岩海港', '九号锻炉', '焰羽剧院'],
  },
  {
    id: 'frostveil',
    index: '03',
    name: '露霜林海',
    en: 'FROSTVEIL WOODS',
    law: 'frost',
    tagline: '雪落下的地方，时间会慢一些。',
    desc: '永霜覆盖的针叶林，守望者在树冠上建起城市，替长夜保管最后一盏灯。',
    image: 'images/nation-frostveil.jpg',
    tags: ['永霜针叶林', '树冠城', '冬之图书馆'],
  },
  {
    id: 'sundrift',
    index: '04',
    name: '沙鸣遗都',
    en: 'SUNDRIFT RUINS',
    law: 'stone',
    tagline: '沙会埋住名字，却埋不住星图。',
    desc: '沉没王朝的残骸散落赤沙之下，观星者仍在破译那场灾变的坐标。',
    image: 'images/nation-sundrift.jpg',
    tags: ['赤沙遗迹', '观星台', '王朝残骸'],
  },
  {
    id: 'tidal',
    index: '05',
    name: '潮汐群岛',
    en: 'TIDAL ISLES',
    law: 'tide',
    tagline: '潮水退去时，海会说实话。',
    desc: '珊瑚环礁与渔歌。领航员相信，海面之下藏着通往星灯的另一条路。',
    image: 'images/nation-isles.jpg',
    tags: ['珊瑚环礁', '领航队', '深海回廊'],
  },
]

export interface NewsItem {
  date: string
  kind: '版本' | '活动' | '角色' | '公告'
  title: string
  desc: string
  href: string
}

export const news: NewsItem[] = [
  {
    date: '2026.11.06',
    kind: '版本',
    title: '「星火之章」正式上线：第七盏灯，不在天上',
    desc: '全新城邦「潮汐群岛」开放探索，主线第三章解锁，星轨系统同步实装。',
    href: '#/',
  },
  {
    date: '2026.10.28',
    kind: '活动',
    title: '限时活动「风哨与归途」开启',
    desc: '协助巡风队点亮三座风哨塔，可获得限定风铃与瑟琳的角色邀约。',
    href: '#/',
  },
  {
    date: '2026.10.15',
    kind: '角色',
    title: '角色档案：艾莉丝 · 烬羽之舞',
    desc: '焰羽剧院的首席舞者登场，焰律单手剑，战斗演示与语音档案公开。',
    href: '#/characters/eris',
  },
  {
    date: '2026.09.30',
    kind: '公告',
    title: '关于跨平台联机测试的说明',
    desc: 'PC 与移动端数据互通测试将于 10 月启动，测试资格与常见问题说明。',
    href: '#/',
  },
]

export const features = [
  {
    index: '01',
    kicker: 'EXPLORATION',
    title: '无界的探索',
    desc: '攀上每一处断崖，潜入每一座沉没的遗迹，点亮熄灭的星灯。地图不在菜单里，而在你的脚步里。',
    note: '无接缝开放世界 · 五城邦 · 垂直探索',
    image: 'images/world.jpg',
    alt: '艾瑟兰大陆全景',
  },
  {
    index: '02',
    kicker: 'COMBAT',
    title: '律与器的战斗',
    desc: '六种律能彼此共鸣，武器与律技自由组合。焰与霜可以同队，岩与潮也可以。',
    note: '六律共鸣 · 三人小队 · 即时切换',
    image: 'images/nation-cinderport.jpg',
    alt: '拾烬港的锻造与战斗',
  },
  {
    index: '03',
    kicker: 'TOGETHER',
    title: '同行的旅途',
    desc: '四人联机，风、焰、霜、潮在同一片天空下交叠。有人负责照亮，有人负责守住。',
    note: '四人联机 · 跨平台 · 共享进度',
    image: 'images/nation-isles.jpg',
    alt: '潮汐群岛的夜色',
  },
]

export const versionInfo = {
  name: '星火之章',
  en: 'CHAPTER OF EMBERLIGHT',
  number: '1.0',
  date: '2026.11.06',
}

export const requirements = {
  minimum: [
    { label: '操作系统', value: 'Windows 10 64-bit' },
    { label: '处理器', value: 'Intel i5-8400 / Ryzen 5 2600' },
    { label: '内存', value: '8 GB RAM' },
    { label: '显卡', value: 'GTX 1060 6GB / RX 580' },
    { label: '存储', value: '45 GB 可用空间' },
  ],
  recommended: [
    { label: '操作系统', value: 'Windows 11 64-bit' },
    { label: '处理器', value: 'Intel i7-10700 / Ryzen 7 3700X' },
    { label: '内存', value: '16 GB RAM' },
    { label: '显卡', value: 'RTX 3060 Ti / RX 6700 XT' },
    { label: '存储', value: '45 GB SSD' },
  ],
}
