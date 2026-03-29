import { useMemo, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { INTERESTS, INTEREST_CARD_TINTS, type InterestId } from '@/data/interests'
import { InterestDoodle } from '@/components/InterestDoodle'
import { SESSION_FIRST_PROFILE } from '@/context/ProfileContext'
import { isOnboardingDone, setOnboardingDone } from '@/lib/storage'

const STORAGE_KEY = 'club_match_interests'

function loadSaved(): Set<InterestId> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    const arr = JSON.parse(raw) as InterestId[]
    return new Set(arr.filter((id) => INTERESTS.some((x) => x.id === id)))
  } catch {
    return new Set()
  }
}

function save(ids: Set<InterestId>) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...ids]))
  } catch {
    /* ignore */
  }
}

export default function InterestSelect() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<Set<InterestId>>(() => loadSaved())

  const count = selected.size
  const canEnter = count >= 1

  const toggle = (id: InterestId) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      save(next)
      return next
    })
  }

  const hint = useMemo(
    () => (canEnter ? '进入社团圈子' : '请至少选择一项兴趣'),
    [canEnter],
  )

  function goHome() {
    if (!canEnter) return
    setOnboardingDone()
    try {
      sessionStorage.setItem(SESSION_FIRST_PROFILE, '1')
    } catch {
      /* ignore */
    }
    navigate('/app/discover', { replace: true })
  }

  if (isOnboardingDone()) {
    return <Navigate to="/app/discover" replace />
  }

  return (
    <div className="interest-page">
      <header className="interest-page__head">
        <Link to="/" className="interest-page__back">
          ← 返回
        </Link>
        <h1 className="interest-page__title">选择兴趣</h1>
        <p className="interest-page__sub">点击「+」添加；至少选一项即可进入。</p>
      </header>

      <ul className="interest-grid">
        {INTERESTS.map((item, index) => {
          const on = selected.has(item.id)
          const tint = INTEREST_CARD_TINTS[index % INTEREST_CARD_TINTS.length]
          return (
            <li key={item.id} className="interest-grid__cell">
              <button
                type="button"
                className={`interest-card sketch-border--thin ${on ? 'interest-card--on' : ''}`}
                style={{ background: tint }}
                onClick={() => toggle(item.id)}
                aria-pressed={on}
              >
                <span className="interest-card__icon" aria-hidden>
                  <InterestDoodle id={item.id} size={44} />
                </span>
                <span className="interest-card__text">
                  <span className="interest-card__cat">{item.category}</span>
                  <span className="interest-card__name">{item.label}</span>
                </span>
                <span className={`interest-card__plus ${on ? 'interest-card__plus--on' : ''}`} aria-hidden>
                  {on ? '✓' : '+'}
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      <div className="interest-page__bar">
        <button
          type="button"
          className={`interest-page__tab ${canEnter ? 'interest-page__tab--on' : ''}`}
          disabled={!canEnter}
          onClick={goHome}
        >
          {hint}
        </button>
      </div>

      <style>{`
        .interest-page {
          padding: 16px 12px calc(96px + env(safe-area-inset-bottom));
          min-height: 100%;
          background: linear-gradient(180deg, #faf8ff 0%, #fff 28%, #fffefb 100%);
        }
        .interest-page__head {
          margin-bottom: 14px;
          padding: 0 4px;
        }
        .interest-page__back {
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
        }
        .interest-page__title {
          margin: 12px 0 6px;
          font-size: 22px;
          font-weight: 800;
        }
        .interest-page__sub {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }
        .interest-grid {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .interest-grid__cell {
          min-width: 0;
        }
        .interest-card {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 8px 10px 10px;
          border-radius: 16px;
          border: 2px solid var(--line);
          font: inherit;
          text-align: left;
          cursor: pointer;
          box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.06);
          transition: transform 0.12s, box-shadow 0.12s;
        }
        .interest-card:active {
          transform: scale(0.98);
        }
        .interest-card--on {
          border-color: var(--line);
          box-shadow: 3px 4px 0 rgba(90, 79, 207, 0.2);
          outline: 2px solid rgba(197, 180, 243, 0.9);
          outline-offset: 0;
        }
        .interest-card__icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.75);
          border: 2px solid var(--line);
        }
        .interest-card__text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .interest-card__cat {
          font-size: 10px;
          font-weight: 700;
          color: #6b6b6b;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .interest-card__name {
          font-size: 15px;
          font-weight: 800;
          color: var(--ink);
          line-height: 1.2;
        }
        .interest-card__plus {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 10px;
          border: 2px solid var(--line);
          background: rgba(255, 255, 255, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
          line-height: 1;
          color: var(--ink);
        }
        .interest-card__plus--on {
          background: var(--lavender);
          border-color: var(--line);
          color: var(--ink);
          font-size: 14px;
        }
        .interest-page__bar {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          padding: 12px 16px calc(16px + env(safe-area-inset-bottom));
          background: var(--paper);
          border-top: 2px solid var(--line);
        }
        .interest-page__tab {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: 2px solid var(--line);
          font-weight: 800;
          font-size: 15px;
          background: var(--grey-fill);
          color: var(--muted);
        }
        .interest-page__tab--on {
          background: var(--lavender);
          color: var(--ink);
          box-shadow: var(--shadow-sketch);
        }
        .interest-page__tab:disabled {
          opacity: 0.9;
        }
      `}</style>
    </div>
  )
}
