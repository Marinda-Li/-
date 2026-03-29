import { useMemo, type ReactNode } from 'react'

/** 气泡位：百分比定位 + 直径 + 层级（大球图文，小球纯字） */
type BubbleLayout = {
  top: string
  left: string
  size: number
  variant: 'lg' | 'md' | 'sm'
  z: number
}

const LAYOUTS: BubbleLayout[] = [
  { top: '20%', left: '28%', size: 76, variant: 'lg', z: 5 },
  { top: '16%', left: '58%', size: 64, variant: 'md', z: 4 },
  { top: '46%', left: '12%', size: 58, variant: 'md', z: 3 },
  { top: '50%', left: '48%', size: 72, variant: 'lg', z: 6 },
  { top: '66%', left: '72%', size: 56, variant: 'md', z: 3 },
  { top: '70%', left: '28%', size: 48, variant: 'sm', z: 2 },
  { top: '30%', left: '78%', size: 44, variant: 'sm', z: 2 },
  { top: '80%', left: '52%', size: 46, variant: 'sm', z: 2 },
  { top: '26%', left: '42%', size: 40, variant: 'sm', z: 1 },
  { top: '60%', left: '88%', size: 38, variant: 'sm', z: 1 },
]

function Ico({ children, size = 22 }: { children: ReactNode; size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={size} height={size} aria-hidden>
      {children}
    </svg>
  )
}

/** 按词条猜一个简笔小图（文字在上、图形在下） */
function DoodleUnderLabel({ text }: { text: string }) {
  const t = text.toLowerCase()
  let node: ReactNode
  if (t.includes('无人机') || t.includes('飞控')) {
    node = (
      <Ico size={24}>
        <rect x="9" y="11" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 9L4 7M18 9l2-2M6 15l-2 2M18 15l2 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="6" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="9" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="6" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="15" r="1.6" stroke="currentColor" strokeWidth="1.4" />
      </Ico>
    )
  } else if (t.includes('摄影') || t.includes('拍')) {
    node = (
      <Ico size={24}>
        <rect x="5" y="7" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="12.5" r="3" stroke="currentColor" strokeWidth="1.4" />
      </Ico>
    )
  } else if (t.includes('音乐') || t.includes('舞') || t.includes('街舞')) {
    node = (
      <Ico size={24}>
        <path d="M14 5v11M14 5l4-1.5v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <ellipse cx="9" cy="17" rx="4" ry="3" stroke="currentColor" strokeWidth="1.4" />
      </Ico>
    )
  } else if (t.includes('足球') || t.includes('球')) {
    node = (
      <Ico size={24}>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 6v12M7 10h10M8 14h8" stroke="currentColor" strokeWidth="1.2" />
      </Ico>
    )
  } else if (t.includes('辩论') || t.includes('讲')) {
    node = (
      <Ico size={24}>
        <rect x="6" y="8" width="12" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 11h6M9 14h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </Ico>
    )
  } else if (t.includes('志愿') || t.includes('心')) {
    node = (
      <Ico size={24}>
        <path
          d="M12 19s-7-4.2-7-9a4 4 0 017-2 4 4 0 017 2c0 4.8-7 9-7 9z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </Ico>
    )
  } else if (t.includes('科技') || t.includes('编程') || t.includes('机械') || t.includes('组装')) {
    node = (
      <Ico size={24}>
        <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 9h6v6H9z M3 9h1.5M3 12h1.5M19.5 9H21M19.5 12H21" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </Ico>
    )
  } else if (t.includes('宠物') || t.includes('猫') || t.includes('狗')) {
    node = (
      <Ico size={24}>
        <ellipse cx="12" cy="14" rx="7" ry="5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="15" cy="11" r="2" stroke="currentColor" strokeWidth="1.4" />
      </Ico>
    )
  } else if (t.includes('国风') || t.includes('汉服')) {
    node = (
      <Ico size={24}>
        <path d="M12 6l4 14H8l4-14z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 14h6" stroke="currentColor" strokeWidth="1.2" />
      </Ico>
    )
  } else {
    node = (
      <Ico size={24}>
        <path d="M12 3l1.8 5.5h5.8l-4.7 3.4 1.8 5.5L12 15.8 7.3 17.4l1.8-5.5L4.4 8.5h5.8L12 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </Ico>
    )
  }
  return <span className="interest-sphere__doodle">{node}</span>
}

/**
 * 兴趣气泡云：重叠圆 + 上字下图（参考交互稿构成规则），配色沿用发现页深色玻璃风
 */
export function InterestWordSphere({ words, compact }: { words: string[]; compact?: boolean }) {
  const list = useMemo(() => {
    const src = words.length ? words : ['科技', '组装', '社团']
    return LAYOUTS.map((_, i) => src[i % src.length])
  }, [words])

  const areaH = compact ? 248 : 280
  const scale = compact ? 0.92 : 1

  return (
    <div className={`interest-sphere${compact ? ' interest-sphere--compact' : ''}`}>
      <div className="interest-sphere__cloud" style={{ height: `${areaH}px` }} aria-hidden>
        {LAYOUTS.map((lay, i) => {
          const text = list[i]
          const showGraphic = lay.variant === 'lg' || lay.variant === 'md'
          const fs = lay.variant === 'lg' ? 11 : lay.variant === 'md' ? 10 : 9
          const tone = i % 3
          return (
            <div
              key={`${text}-${i}`}
              className={`interest-sphere__bubble interest-sphere__bubble--${lay.variant} interest-sphere__bubble--tone-${tone}`}
              style={{
                top: lay.top,
                left: lay.left,
                width: Math.round(lay.size * scale),
                height: Math.round(lay.size * scale),
                zIndex: lay.z,
              }}
            >
              <span className="interest-sphere__bubble-text" style={{ fontSize: `${fs}px` }}>
                {text}
              </span>
              {showGraphic ? <DoodleUnderLabel text={text} /> : null}
            </div>
          )
        })}
      </div>
      <p className="interest-sphere__cap">根据你的兴趣 · 匹配推荐</p>
      <style>{`
        .interest-sphere {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6px 0 4px;
          overflow: visible;
        }
        .interest-sphere--compact {
          padding: 8px 0 0;
        }
        .interest-sphere__cloud {
          position: relative;
          width: 100%;
          max-width: ${compact ? 260 : 300}px;
          margin: 0 auto;
          box-sizing: border-box;
        }
        .interest-sphere__bubble {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          padding: 6px 8px;
          text-align: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.11);
          border: 1.5px solid rgba(255, 255, 255, 0.28);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            0 6px 18px rgba(0, 0, 0, 0.22);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          line-height: 1.15;
        }
        .interest-sphere__bubble--sm {
          padding: 4px 6px;
          gap: 0;
        }
        .interest-sphere__bubble-text {
          display: block;
          font-weight: 800;
          letter-spacing: 0.02em;
          max-width: 95%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .interest-sphere__bubble--tone-0 .interest-sphere__bubble-text {
          color: #e8deff;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }
        .interest-sphere__bubble--tone-1 .interest-sphere__bubble-text {
          color: #c8f5e0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }
        .interest-sphere__bubble--tone-2 .interest-sphere__bubble-text {
          color: #ffd0ef;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }
        .interest-sphere__bubble--tone-0 .interest-sphere__doodle {
          color: rgba(232, 222, 255, 0.92);
        }
        .interest-sphere__bubble--tone-1 .interest-sphere__doodle {
          color: rgba(200, 245, 224, 0.92);
        }
        .interest-sphere__bubble--tone-2 .interest-sphere__doodle {
          color: rgba(255, 208, 239, 0.92);
        }
        .interest-sphere__doodle {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          opacity: 0.95;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.25));
        }
        .interest-sphere__bubble--sm .interest-sphere__bubble-text {
          white-space: normal;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.2;
          max-height: 2.4em;
        }
        .interest-sphere__cap {
          margin: 10px 0 0;
          font-size: ${compact ? '10px' : '11px'};
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(255, 255, 255, 0.72);
          text-transform: uppercase;
        }
        .interest-sphere--compact .interest-sphere__cap {
          margin-top: 6px;
        }
      `}</style>
    </div>
  )
}
