/** 招募状态：即将截止优先置顶 2 条；其余与进行中混排；已结束沉底置灰 */

export type RecruitmentStatus = 'ongoing' | 'endingSoon' | 'ended'

export interface ClubRecruitment {
  id: string
  clubName: string
  title: string
  tags: string[]
  /** 一句话简介（卡片内底部） */
  introOneLine: string
  coverUrl: string
  logoUrl: string
  recruiterName: string
  recruiterAvatar: string
  status: RecruitmentStatus
  progressCurrent: number
  progressTotal: number
  /** 详情页顶部图文 */
  detailHeroUrl: string
  detailIntro: string
  requirements: string
}

export const clubRecruitments: ClubRecruitment[] = [
  {
    id: 'c1',
    clubName: '无人机协会',
    title: '秋季招新 · 飞手与创客',
    tags: ['无人机', '学术'],
    introOneLine: '零基础友好，提供模拟器与实飞体验。',
    coverUrl: 'https://picsum.photos/seed/uav400/400/260',
    logoUrl: 'https://picsum.photos/seed/uav80/80/80',
    recruiterName: '李航',
    recruiterAvatar: 'https://picsum.photos/seed/uavp/64/64',
    status: 'endingSoon',
    progressCurrent: 18,
    progressTotal: 25,
    detailHeroUrl: 'https://picsum.photos/seed/uav800/800/420',
    detailIntro:
      '无人机协会聚集飞手、创客与视觉爱好者。日常开展模拟器训练、编队拍摄与赛事备赛，并与本地企业合作开展科普志愿。',
    requirements: '1）对无人机或机器人有热情；2）能参加每周一次例会；3）飞手岗需通过安全笔试（可培训后考核）。',
  },
  {
    id: 'c2',
    clubName: '国风社',
    title: '汉服与民乐体验周',
    tags: ['国风', '志愿'],
    introOneLine: '雅集排练与汉服出行，欢迎乐器与妆造同好。',
    coverUrl: 'https://picsum.photos/seed/gf400/400/260',
    logoUrl: 'https://picsum.photos/seed/gf80/80/80',
    recruiterName: '苏婉',
    recruiterAvatar: 'https://picsum.photos/seed/gfp/64/64',
    status: 'endingSoon',
    progressCurrent: 22,
    progressTotal: 30,
    detailHeroUrl: 'https://picsum.photos/seed/gf800/800/420',
    detailIntro:
      '国风社以汉服、民乐与诗词雅集为主线，每学期举办开放日与校际联谊，并参与校庆与文化节演出。',
    requirements: '1）尊重传统文化与团队协作；2）民乐岗需自备乐器或参加零基础笛箫班；3）能配合晚间排练（每周 1～2 次）。',
  },
  {
    id: 'c3',
    clubName: '辩论队',
    title: '新生队内选拔',
    tags: ['辩论'],
    introOneLine: '表达力与逻辑训练，校赛名额向新生开放。',
    coverUrl: 'https://picsum.photos/seed/db400/400/260',
    logoUrl: 'https://picsum.photos/seed/db80/80/80',
    recruiterName: '周言',
    recruiterAvatar: 'https://picsum.photos/seed/dbp/64/64',
    status: 'ongoing',
    progressCurrent: 11,
    progressTotal: 25,
    detailHeroUrl: 'https://picsum.photos/seed/db800/800/420',
    detailIntro:
      '辩论队侧重立论、质询与临场反应训练，定期与兄弟院校友谊赛，并承办校内新生赛。',
    requirements: '1）普通话清晰；2）每周参加队训与模辩；3）需通过队内选拔轮次（含立论与交叉质询）。',
  },
  {
    id: 'c4',
    clubName: '足球社',
    title: '院际联赛队员招募',
    tags: ['足球', '志愿'],
    introOneLine: '体能与团队配合训练，院队与兴趣组双线招新。',
    coverUrl: 'https://picsum.photos/seed/fb400/400/260',
    logoUrl: 'https://picsum.photos/seed/fb80/80/80',
    recruiterName: '陈野',
    recruiterAvatar: 'https://picsum.photos/seed/fbp/64/64',
    status: 'ongoing',
    progressCurrent: 9,
    progressTotal: 22,
    detailHeroUrl: 'https://picsum.photos/seed/fb800/800/420',
    detailIntro:
      '足球社下设院队与兴趣组，提供体能训练、战术课与友谊赛机会，并参与校园联赛。',
    requirements: '1）体检无运动禁忌；2）院队需参加试训；3）兴趣组以快乐足球为主，需购买基础护具。',
  },
  {
    id: 'c5',
    clubName: '摄影协会',
    title: '人像与风光创作组',
    tags: ['摄影'],
    introOneLine: '外拍、暗房体验与作品联展，设备可借用。',
    coverUrl: 'https://picsum.photos/seed/ph400/400/260',
    logoUrl: 'https://picsum.photos/seed/ph80/80/80',
    recruiterName: '林可',
    recruiterAvatar: 'https://picsum.photos/seed/php/64/64',
    status: 'endingSoon',
    progressCurrent: 14,
    progressTotal: 20,
    detailHeroUrl: 'https://picsum.photos/seed/ph800/800/420',
    detailIntro:
      '摄影协会组织外拍、后期工作坊与学期联展，提供相机与灯光借用（需完成设备培训）。',
    requirements: '1）自备或借用协会设备需签署协议；2）参加至少 2 次外拍；3）提交 3 张作品作为入社作业。',
  },
  {
    id: 'c6',
    clubName: '志愿者总队',
    title: '社区服务与支教项目',
    tags: ['志愿', '学术'],
    introOneLine: '工时认证与大型活动志愿岗位开放。',
    coverUrl: 'https://picsum.photos/seed/vo400/400/260',
    logoUrl: 'https://picsum.photos/seed/vo80/80/80',
    recruiterName: '赵宁',
    recruiterAvatar: 'https://picsum.photos/seed/vop/64/64',
    status: 'ongoing',
    progressCurrent: 40,
    progressTotal: 60,
    detailHeroUrl: 'https://picsum.photos/seed/vo800/800/420',
    detailIntro:
      '志愿者总队统筹校内外服务岗位，包括社区助老、支教与大型赛事保障，统一记录志愿工时。',
    requirements: '1）完成线上安全培训；2）每学期至少参与 2 次活动；3）支教岗需额外面试。',
  },
  {
    id: 'c7',
    clubName: 'ACM 程序设计',
    title: '算法集训队纳新',
    tags: ['学术'],
    introOneLine: 'XCPC 备赛与周赛，需有一定编程基础。',
    coverUrl: 'https://picsum.photos/seed/ac400/400/260',
    logoUrl: 'https://picsum.photos/seed/ac80/80/80',
    recruiterName: '吴码',
    recruiterAvatar: 'https://picsum.photos/seed/acp/64/64',
    status: 'ended',
    progressCurrent: 25,
    progressTotal: 25,
    detailHeroUrl: 'https://picsum.photos/seed/ac800/800/420',
    detailIntro:
      'ACM 集训队面向算法竞赛，组织周赛、假期集训与校队选拔，历年多次获得区域赛奖项。',
    requirements: '本期招募已截止。可关注下学期开放日。',
  },
  {
    id: 'c8',
    clubName: '音乐剧社',
    title: '年度大戏演员与幕后',
    tags: ['音乐', '志愿'],
    introOneLine: '声乐、舞蹈与舞美幕后同步招新。',
    coverUrl: 'https://picsum.photos/seed/mu400/400/260',
    logoUrl: 'https://picsum.photos/seed/mu80/80/80',
    recruiterName: '唐诗',
    recruiterAvatar: 'https://picsum.photos/seed/mup/64/64',
    status: 'ended',
    progressCurrent: 30,
    progressTotal: 30,
    detailHeroUrl: 'https://picsum.photos/seed/mu800/800/420',
    detailIntro:
      '音乐剧社每年排演一部大戏，下设演员、声乐、乐队与舞美组，学期末汇报演出。',
    requirements: '本期招募已截止。欢迎下学期关注 audition 通知。',
  },
  {
    id: 'c9',
    clubName: '街舞社',
    title: 'Breaking · 齐舞队招新',
    tags: ['街舞', '志愿'],
    introOneLine: 'Breaking、Hip-hop 与齐舞队训，演出与校赛名额。',
    coverUrl: 'https://picsum.photos/seed/st400/400/260',
    logoUrl: 'https://picsum.photos/seed/st80/80/80',
    recruiterName: '阿凯',
    recruiterAvatar: 'https://picsum.photos/seed/stp/64/64',
    status: 'ongoing',
    progressCurrent: 12,
    progressTotal: 28,
    detailHeroUrl: 'https://picsum.photos/seed/st800/800/420',
    detailIntro:
      '街舞社下设 Breaking、Hip-hop 与齐舞队，定期队训、作品拍摄与校内外展演，每学期参与社团文化节与街舞联赛。',
    requirements: '1）有节奏感与体能基础更佳；2）每周参加队训；3）公演与比赛前需参加联排。',
  },
]

function interleave<T>(a: T[], b: T[]): T[] {
  const out: T[] = []
  const n = Math.max(a.length, b.length)
  for (let i = 0; i < n; i++) {
    if (i < a.length) out.push(a[i])
    if (i < b.length) out.push(b[i])
  }
  return out
}

export function sortForDiscover(list: ClubRecruitment[]): ClubRecruitment[] {
  const endingSoon = list.filter((x) => x.status === 'endingSoon')
  const ongoing = list.filter((x) => x.status === 'ongoing')
  const ended = list.filter((x) => x.status === 'ended')
  const pinned = endingSoon.slice(0, 2)
  const restEnding = endingSoon.slice(2)
  const middle = interleave(ongoing, restEnding)
  return [...pinned, ...middle, ...ended]
}

export function statusLabel(s: RecruitmentStatus): string {
  switch (s) {
    case 'ongoing':
      return '正在进行'
    case 'endingSoon':
      return '即将截止'
    case 'ended':
      return '已结束'
    default:
      return ''
  }
}
