import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { INTERESTS, type InterestId } from '@/data/interests'

const STORAGE_KEY = 'club_match_interests'

function loadIds(): InterestId[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const arr = JSON.parse(raw) as InterestId[]
    return arr.filter((id) => INTERESTS.some((x) => x.id === id))
  } catch {
    return []
  }
}

/** 根据本地勾选兴趣生成词云词条；无勾选时用默认推荐词（随路由刷新重读） */
export function useInterestLabels(): string[] {
  const { pathname } = useLocation()
  return useMemo(() => {
    const ids = loadIds()
    const fromUser = ids
      .map((id) => INTERESTS.find((x) => x.id === id)?.label)
      .filter(Boolean) as string[]
    if (fromUser.length > 0) {
      const extra = ['科技', '组装', '机械', '编程', '飞控', '传感', '入社']
      return [...fromUser, ...extra].slice(0, 18)
    }
    return [
      '宠物',
      '无人机',
      '国风',
      '辩论',
      '学术',
      '足球',
      '志愿',
      '音乐',
      '摄影',
      '科技',
      '组装',
      '机械',
      '社团',
      '编舞',
      '律动',
    ]
  }, [pathname])
}
