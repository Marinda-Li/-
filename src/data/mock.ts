export interface ActivityItem {
  id: string
  title: string
  clubName: string
  time: string
  place: string
}

export const activities: ActivityItem[] = [
  {
    id: 'a1',
    title: '社团开放日',
    clubName: '校团委',
    time: '10月12日 14:00',
    place: '中央广场',
  },
  {
    id: 'a2',
    title: '无人机试飞体验',
    clubName: '无人机协会',
    time: '10月15日 16:30',
    place: '操场东侧',
  },
]

/** 各社团负责人发布的活动动态（列表卡片 + 深色详情页） */
export interface ClubActivityPost {
  id: string
  clubName: string
  activityTitle: string
  /** 第二行「活动名 - 日期」中的日期部分 */
  datePart: string
  body: string
  imageUrls: string[]
  publishedAt: string
  organizerName: string
  organizerAvatarUrl: string
  iconEmoji: string
}

export const clubActivityPosts: ClubActivityPost[] = [
  {
    id: 'c1',
    clubName: '无人机协会',
    activityTitle: '秋季试飞开放日',
    datePart: '10月15日 16:30',
    body:
      '本周开放实机体验与模拟器试玩，欢迎携带校园卡签到。现场提供护目镜与基础讲解，试飞区请遵守安全员指引。活动结束后可领取试飞体验电子证明。',
    imageUrls: [
      'https://picsum.photos/seed/cap1/400/300',
      'https://picsum.photos/seed/cap2/400/300',
      'https://picsum.photos/seed/cap3/400/300',
      'https://picsum.photos/seed/cap4/400/300',
      'https://picsum.photos/seed/cap5/400/300',
      'https://picsum.photos/seed/cap6/400/300',
    ],
    publishedAt: '10月12日 09:20',
    organizerName: '李航',
    organizerAvatarUrl: 'https://picsum.photos/seed/uavp/64/64',
    iconEmoji: '🛸',
  },
  {
    id: 'c2',
    clubName: '国风社',
    activityTitle: '汉服雅集',
    datePart: '10月18日 19:00',
    body:
      '本月雅集以「秋日诗词」为主题，可自备汉服或试穿协会服装。笛箫体验区需提前在群内接龙，现场提供茶点与摄影志愿者协助留念。',
    imageUrls: [
      'https://picsum.photos/seed/cbp1/400/300',
      'https://picsum.photos/seed/cbp2/400/300',
      'https://picsum.photos/seed/cbp3/400/300',
      'https://picsum.photos/seed/cbp4/400/300',
      'https://picsum.photos/seed/cbp5/400/300',
      'https://picsum.photos/seed/cbp6/400/300',
    ],
    publishedAt: '10月11日 21:05',
    organizerName: '苏婉',
    organizerAvatarUrl: 'https://picsum.photos/seed/gfp/64/64',
    iconEmoji: '🎐',
  },
  {
    id: 'c3',
    clubName: '摄影协会',
    activityTitle: '人像外拍联展',
    datePart: '10月20日 14:00',
    body: '集合地点：图书馆南门。阴天顺延至下周，请关注群公告。请携带已签署的设备借用协议，外拍全程需两人以上同行。',
    imageUrls: [
      'https://picsum.photos/seed/ccp1/400/300',
      'https://picsum.photos/seed/ccp2/400/300',
      'https://picsum.photos/seed/ccp3/400/300',
      'https://picsum.photos/seed/ccp4/400/300',
      'https://picsum.photos/seed/ccp5/400/300',
      'https://picsum.photos/seed/ccp6/400/300',
    ],
    publishedAt: '10月10日 18:40',
    organizerName: '林可',
    organizerAvatarUrl: 'https://picsum.photos/seed/php/64/64',
    iconEmoji: '📷',
  },
]

export interface ChatThread {
  id: string
  name: string
  last: string
  time: string
  kind: 'group' | 'dm'
  /** 联系人头像单字（如「辩」），默认「私」 */
  avatarChar?: string
  /** 头像底层叠图 */
  avatarBgUrl?: string
}

export const threads: ChatThread[] = [
  { id: 'g1', name: '无人机协会 · 新生群', last: '下周试飞报名链接已发', time: '昨天', kind: 'group' },
  { id: 'g2', name: '国风社', last: '雅集排练在周五晚', time: '周一', kind: 'group' },
  {
    id: 'd1',
    name: '辩论队队长-张明',
    last: '好的，资料我收到了',
    time: '10:24',
    kind: 'dm',
    avatarChar: '辩',
    avatarBgUrl: 'https://picsum.photos/seed/debateavatar/120/120',
  },
]
