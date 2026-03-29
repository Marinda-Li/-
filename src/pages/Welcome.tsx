import { Link, Navigate } from 'react-router-dom'
import { isOnboardingDone } from '@/lib/storage'

/** 居中错行词云 */
const CLOUD_ROWS: string[][] = [
  ['宠物', '无人机', '国风'],
  ['辩论', '学术'],
  ['足球', '志愿'],
  ['音乐', '摄影'],
  ['搭子'],
]

const TONES = ['purple', 'pink', 'blue', 'mint', 'rose', 'sky'] as const

export default function Welcome() {
  if (isOnboardingDone()) {
    return <Navigate to="/app/discover" replace />
  }

  let toneIndex = 0

  return (
    <div className="welcome">
      <div className="welcome__hero">
        <h1 className="welcome__title">来社团找到你的搭子！</h1>
      </div>

      <div className="welcome__cloud" aria-hidden>
        <div className="welcome__cloud-inner">
          {CLOUD_ROWS.map((row, ri) => (
            <div key={ri} className="welcome__cloud-row">
              {row.map((label) => {
                const tone = TONES[toneIndex % TONES.length]
                toneIndex += 1
                return (
                  <span key={`${ri}-${label}`} className={`welcome__tag welcome__tag--${tone}`}>
                    {label}
                  </span>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="welcome__footer">
        <Link to="/interests" className="btn-primary welcome__cta">
          点击选择你的兴趣
        </Link>
      </div>

      <style>{`
        .welcome {
          min-height: 100vh;
          min-height: 100dvh;
          display: grid;
          grid-template-rows: auto 1fr;
          padding: 0 0 calc(100px + env(safe-area-inset-bottom));
          box-sizing: border-box;
        }
        .welcome__hero {
          position: relative;
          text-align: center;
          min-height: clamp(300px, 48vh, 460px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;
          padding: 12px 16px clamp(22px, 5vh, 36px);
          box-sizing: border-box;
          background-color: var(--paper);
          background-image: url('/welcome-hero-lineart.png');
          background-repeat: no-repeat;
          background-position: center bottom;
          background-size: min(100%, min(420px, 92vw)) auto;
        }
        .welcome__title {
          margin: 0;
          position: relative;
          z-index: 1;
          max-width: 20em;
          font-size: clamp(20px, 5.2vw, 26px);
          font-weight: 800;
          line-height: 1.35;
          letter-spacing: 0.02em;
          text-shadow:
            0 0 12px rgba(255, 255, 255, 0.95),
            0 0 2px rgba(255, 255, 255, 0.9),
            0 1px 0 rgba(255, 255, 255, 0.85);
        }
        .welcome__cloud {
          min-height: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px 16px;
          box-sizing: border-box;
        }
        .welcome__cloud-inner {
          width: 100%;
          max-width: 430px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: clamp(18px, 4vh, 28px);
          padding: clamp(8px, 2vh, 20px) 4px;
        }
        .welcome__cloud-row {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: clamp(11px, 2.8vw, 16px);
          width: 100%;
        }
        .welcome__tag {
          display: inline-flex;
          align-items: center;
          padding: clamp(11px, 2.2vw, 14px) clamp(18px, 4vw, 24px);
          border-radius: 999px;
          font-size: clamp(15px, 4.2vw, 18px);
          font-weight: 700;
          color: var(--ink);
          border: 2px solid var(--line);
          box-shadow: var(--shadow-sketch);
        }
        .welcome__tag--purple {
          background: linear-gradient(180deg, #ebe4ff 0%, #d4c4f8 100%);
        }
        .welcome__tag--pink {
          background: linear-gradient(180deg, #ffe8f4 0%, #ffd0e8 100%);
        }
        .welcome__tag--blue {
          background: linear-gradient(180deg, #e4f0ff 0%, #c8e0fc 100%);
        }
        .welcome__tag--mint {
          background: linear-gradient(180deg, #e8fdf2 0%, #c8f5dd 100%);
        }
        .welcome__tag--rose {
          background: linear-gradient(180deg, #ffeef5 0%, #ffd6ea 100%);
        }
        .welcome__tag--sky {
          background: linear-gradient(180deg, #e8f4ff 0%, #d4e8fc 100%);
        }
        .welcome__footer {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          padding: 16px 20px calc(20px + env(safe-area-inset-bottom));
          background: linear-gradient(to top, var(--paper) 88%, transparent);
        }
        .welcome__cta {
          display: block;
          width: 100%;
          text-align: center;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}
