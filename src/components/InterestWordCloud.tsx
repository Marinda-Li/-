import { useMemo, type CSSProperties, type ReactElement, type ReactNode } from 'react'

const BANNED = new Set(['匹配', '推荐', '同好', '搭子', '新番', '社团'])

const FALLBACK_RING = [
  '科技',
  '组装',
  '机械',
  '焊接',
  '传感',
  '编程',
  '飞控',
  '编舞',
  '队形',
  '律动',
  '硬件',
  '开源',
  '视觉',
  '电机',
  '结构',
  '声学',
]

type Pos = { t: string; l: string }

/** 外圈文字：避开中心 spotlight 区 */
const LABEL_POS: Pos[] = [
  { t: '7%', l: '52%' },
  { t: '12%', l: '78%' },
  { t: '24%', l: '90%' },
  { t: '40%', l: '94%' },
  { t: '58%', l: '88%' },
  { t: '74%', l: '76%' },
  { t: '86%', l: '52%' },
  { t: '14%', l: '14%' },
  { t: '28%', l: '8%' },
  { t: '46%', l: '6%' },
  { t: '66%', l: '12%' },
  { t: '82%', l: '28%' },
]

/** 同色系（琥珀/金）不同色阶，用于高亮圆底 */
const HOT_BG = ['#ffcc33', '#f5b041', '#e8a317', '#ffd966', '#f0c85c', '#e6b422', '#ffdb4d', '#d4a017'] as const

function buildRingLabels(words: string[]): string[] {
  const filtered = words.filter((w) => w.trim() && !BANNED.has(w))
  const merged = [...filtered, ...FALLBACK_RING]
  const seen = new Set<string>()
  const out: string[] = []
  for (const w of merged) {
    if (seen.has(w)) continue
    seen.add(w)
    out.push(w)
    if (out.length >= 12) break
  }
  while (out.length < 12) out.push(FALLBACK_RING[out.length % FALLBACK_RING.length])
  return out.slice(0, 12)
}

function Ico({ children, className }: { className?: string; children: ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden width={20} height={20}>
      {children}
    </svg>
  )
}

function IconFlask() {
  return (
    <Ico>
      <path
        d="M9 2h6v3.2l3 6.4V19a2 2 0 01-2 2H8a2 2 0 01-2-2v-7.4L9 5.2V2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Ico>
  )
}

function IconMegaphone() {
  return (
    <Ico>
      <path
        d="M4 10v4l4 2V8L4 10zm4-2l8-3v12l-8-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M16 17l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Ico>
  )
}

function IconChart() {
  return (
    <Ico>
      <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 15l3-6 3 3 4-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </Ico>
  )
}

function IconDrone() {
  return (
    <Ico>
      <rect x="9" y="11" width="6" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 9L4 7M18 9l2-2M6 15l-2 2M18 15l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="9" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="6" cy="15" r="1.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="15" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </Ico>
  )
}

function IconDance() {
  return (
    <Ico>
      <circle cx="12" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 8.5v4.5M9 20l3-5 3 5M8 12.5l2-2 4 2 2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Ico>
  )
}

function IconGear() {
  return (
    <Ico>
      <path
        d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7zM12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8l1.8-1.8M18 6l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </Ico>
  )
}

function IconChip() {
  return (
    <Ico>
      <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6v6H9z M2 9h2M2 12h2M2 15h2M20 9h2M20 12h2M20 15h2M9 2v2M12 2v2M15 2v2M9 20v2M12 20v2M15 20v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </Ico>
  )
}

function IconWrench() {
  return (
    <Ico>
      <path
        d="M14.7 6.3a4 4 0 00-5.6 5.6L5 16l3 3 4.1-4.1a4 4 0 005.6-5.6l-2.1 2.1-1.4-1.4 2.1-2.1z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Ico>
  )
}

function IconBike() {
  return (
    <Ico>
      <circle cx="7.5" cy="16.5" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.5" cy="16.5" r="2.8" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10.5 16.5L8 10h3l2.5 6.5M11 10l3-2 3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Ico>
  )
}

function IconDoc() {
  return (
    <Ico>
      <path d="M7 3h7l3 3v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </Ico>
  )
}

function IconMoon() {
  return (
    <Ico>
      <path
        d="M18 14.5A7.5 7.5 0 019.2 4.5 6 6 0 1018 14.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Ico>
  )
}

function IconBulb() {
  return (
    <Ico>
      <path
        d="M12 3a5 5 0 015 5c0 2-1.5 3.5-2 5H9c-.5-1.5-2-3-2-5a5 5 0 015-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </Ico>
  )
}

function IconDollar() {
  return (
    <Ico>
      <path
        d="M12 3v18M15 7.5A3.5 3.5 0 009 7.5 6 6 0 0015 16.5 3.5 3.5 0 019 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Ico>
  )
}

function IconPencil() {
  return (
    <Ico>
      <path
        d="M4 20l4-1 11-11a2 2 0 000-3l-2-2a2 2 0 00-3 0L3 15l1 5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </Ico>
  )
}

type HotItem = { Icon: () => ReactElement; t: string; l: string; bg: string }

const HOT_LAYOUT: Omit<HotItem, 'bg'>[] = [
  { Icon: IconDrone, t: '16%', l: '20%' },
  { Icon: IconDance, t: '18%', l: '76%' },
  { Icon: IconFlask, t: '8%', l: '44%' },
  { Icon: IconMegaphone, t: '30%', l: '12%' },
  { Icon: IconChart, t: '72%', l: '22%' },
  { Icon: IconGear, t: '68%', l: '70%' },
  { Icon: IconChip, t: '52%', l: '14%' },
  { Icon: IconWrench, t: '78%', l: '48%' },
]

type IcoItem = { Icon: () => ReactElement; t: string; l: string }

const ICO_LAYOUT: IcoItem[] = [
  { Icon: IconDoc, t: '11%', l: '34%' },
  { Icon: IconBike, t: '54%', l: '8%' },
  { Icon: IconBulb, t: '62%', l: '56%' },
  { Icon: IconMoon, t: '26%', l: '58%' },
  { Icon: IconDollar, t: '38%', l: '82%' },
  { Icon: IconPencil, t: '48%', l: '38%' },
  { Icon: IconDoc, t: '82%', l: '62%' },
  { Icon: IconBike, t: '20%', l: '64%' },
  { Icon: IconBulb, t: '56%', l: '92%' },
  { Icon: IconMoon, t: '90%', l: '18%' },
  { Icon: IconPencil, t: '36%', l: '26%' },
  { Icon: IconDollar, t: '64%', l: '38%' },
]

const DOTS: { t: string; l: string; kind: 'w' | 'y' | 'a' }[] = [
  { t: '6%', l: '30%', kind: 'w' },
  { t: '10%', l: '68%', kind: 'y' },
  { t: '18%', l: '92%', kind: 'w' },
  { t: '42%', l: '4%', kind: 'a' },
  { t: '50%', l: '96%', kind: 'y' },
  { t: '76%', l: '8%', kind: 'w' },
  { t: '88%', l: '72%', kind: 'y' },
  { t: '92%', l: '40%', kind: 'a' },
  { t: '32%', l: '72%', kind: 'w' },
  { t: '58%', l: '28%', kind: 'y' },
]

/** 参考「气泡圈 + 散落图标」的兴趣匹配推荐区；中心突出无人机协会 / 街舞社 */
export function InterestWordCloud({ words, compact }: { words: string[]; compact?: boolean }) {
  const labels = useMemo(() => buildRingLabels(words), [words])

  const hotItems = useMemo(
    () => HOT_LAYOUT.map((h, i) => ({ ...h, bg: HOT_BG[i % HOT_BG.length] })),
    [],
  )

  return (
    <div className={`discover-match${compact ? ' discover-match--compact' : ''}`}>
      <div className="discover-match__stage">
        <div className="discover-match__bubble-wrap">
          <div className="discover-match__bubble" role="img" aria-label="兴趣匹配推荐可视化">
            {DOTS.map((d, i) => (
              <span
                key={`dot-${i}`}
                className={`discover-match__dot discover-match__dot--${d.kind}`}
                style={{ top: d.t, left: d.l }}
              />
            ))}

            {labels.map((text, i) => (
              <span key={`${text}-${i}`} className="discover-match__label" style={{ top: LABEL_POS[i].t, left: LABEL_POS[i].l }}>
                {text}
              </span>
            ))}

            <div className="discover-match__spotlight">
              <span className="discover-match__spotlight-pill">无人机协会</span>
              <span className="discover-match__spotlight-pill discover-match__spotlight-pill--2">街舞社</span>
            </div>

            {hotItems.map(({ Icon, t, l, bg }, i) => (
              <div
                key={`hot-${i}`}
                className="discover-match__hot"
                style={
                  {
                    top: t,
                    left: l,
                    '--hot-bg': bg,
                    '--hot-tail': bg,
                  } as CSSProperties
                }
              >
                <Icon />
              </div>
            ))}

            {ICO_LAYOUT.map(({ Icon, t, l }, i) => (
              <div key={`ico-${i}`} className="discover-match__ico" style={{ top: t, left: l }}>
                <Icon />
              </div>
            ))}
          </div>
        </div>

        <div className="discover-match__brand">
          <p className="discover-match__brand-title">MATCH</p>
          <p className="discover-match__brand-sub">寻找你的兴趣社团</p>
        </div>
      </div>

      <style>{`
        .discover-match {
          position: relative;
          flex: 1;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4px 0 8px;
          overflow: visible;
        }
        .discover-match__stage {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .discover-match__bubble-wrap {
          position: relative;
          width: min(88vw, 300px);
          padding-bottom: 18px;
        }
        .discover-match__bubble {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.22);
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            0 12px 40px rgba(0, 0, 0, 0.25);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .discover-match__bubble::after {
          content: '';
          position: absolute;
          bottom: -13px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 14px solid transparent;
          border-right: 14px solid transparent;
          border-top: 15px solid rgba(255, 255, 255, 0.12);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
        }
        .discover-match__spotlight {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 4;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          pointer-events: none;
          text-align: center;
        }
        .discover-match__spotlight-pill {
          display: inline-block;
          padding: 5px 11px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #1a1420;
          background: linear-gradient(145deg, #fff2a8 0%, #ffcc33 55%, #e8a317 100%);
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow:
            0 2px 10px rgba(0, 0, 0, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.5);
          white-space: nowrap;
        }
        .discover-match__spotlight-pill--2 {
          background: linear-gradient(145deg, #ffe8a8 0%, #f5b041 55%, #d49812 100%);
        }
        .discover-match__label {
          position: absolute;
          z-index: 2;
          transform: translate(-50%, -50%);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: rgba(255, 255, 255, 0.95);
          text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
          pointer-events: none;
          white-space: nowrap;
        }
        .discover-match__hot {
          position: absolute;
          z-index: 3;
          transform: translate(-50%, -50%);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--hot-bg, #ffcc33);
          color: #1a1a1a;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .discover-match__hot::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 7px solid var(--hot-tail, #ffcc33);
        }
        .discover-match__ico {
          position: absolute;
          z-index: 2;
          transform: translate(-50%, -50%);
          color: rgba(255, 255, 255, 0.9);
          filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.35));
        }
        .discover-match__dot {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }
        .discover-match__dot--w {
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.88);
        }
        .discover-match__dot--y {
          width: 4px;
          height: 4px;
          background: #ffdb4d;
        }
        .discover-match__dot--a {
          width: 4px;
          height: 4px;
          background: #f0c85c;
          opacity: 0.95;
        }
        .discover-match__brand {
          text-align: center;
          margin-top: 10px;
          padding: 0 12px;
        }
        .discover-match__brand-title {
          margin: 0;
          font-size: clamp(20px, 6.2vw, 26px);
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #fff;
          text-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
        }
        .discover-match__brand-sub {
          margin: 6px 0 0;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
          letter-spacing: 0.06em;
        }

        .discover-match--compact {
          min-height: 210px;
          padding-top: 0;
        }
        .discover-match--compact .discover-match__bubble-wrap {
          width: min(72vw, 220px);
          padding-bottom: 14px;
        }
        .discover-match--compact .discover-match__bubble::after {
          border-left-width: 11px;
          border-right-width: 11px;
          border-top-width: 12px;
          bottom: -11px;
        }
        .discover-match--compact .discover-match__label {
          font-size: 8px;
        }
        .discover-match--compact .discover-match__spotlight-pill {
          padding: 4px 8px;
          font-size: 9px;
        }
        .discover-match--compact .discover-match__hot {
          width: 28px;
          height: 28px;
        }
        .discover-match--compact .discover-match__hot svg {
          width: 17px;
          height: 17px;
        }
        .discover-match--compact .discover-match__ico svg {
          width: 16px;
          height: 16px;
        }
        .discover-match--compact .discover-match__brand-title {
          font-size: clamp(17px, 5vw, 22px);
          letter-spacing: 0.1em;
        }
        .discover-match--compact .discover-match__brand-sub {
          font-size: 11px;
          margin-top: 4px;
        }
        .discover-match--compact .discover-match__stage {
          gap: 4px;
        }
      `}</style>
    </div>
  )
}
