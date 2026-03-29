export type InterestId =
  | 'pet'
  | 'drone'
  | 'guofeng'
  | 'debate'
  | 'academic'
  | 'football'
  | 'volunteer'
  | 'music'
  | 'photo'

export interface InterestItem {
  id: InterestId
  /** 大类（卡片上行小字） */
  category: string
  /** 兴趣名称（卡片下行主标题） */
  label: string
}

export const INTERESTS: InterestItem[] = [
  { id: 'pet', category: '生活', label: '宠物' },
  { id: 'drone', category: '科技', label: '无人机' },
  { id: 'guofeng', category: '文化', label: '国风' },
  { id: 'debate', category: '思辨', label: '辩论' },
  { id: 'academic', category: '学术', label: '学术' },
  { id: 'football', category: '运动', label: '足球' },
  { id: 'volunteer', category: '公益', label: '志愿' },
  { id: 'music', category: '艺术', label: '音乐' },
  { id: 'photo', category: '艺术', label: '摄影' },
]

/** 卡片背景色（手绘风淡色块，循环使用） */
export const INTEREST_CARD_TINTS = [
  'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)',
  'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
  'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
  'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
  'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
  'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
] as const
