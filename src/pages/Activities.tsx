import { Link } from 'react-router-dom'
import { activities, clubActivityPosts } from '@/data/mock'
import { useProfile } from '@/context/ProfileContext'

export default function Activities() {
  const { openProfileModal } = useProfile()

  return (
    <div className="page activities">
      <header className="page-head">
        <h1 className="page-head__title">活动</h1>
        <p className="page-head__sub">活动信息展示</p>
      </header>

      <ul className="act-list">
        {activities.map((a) => (
          <li key={a.id}>
            <div className="act-card sketch-border">
              <Link to={`/app/activities/${a.id}`} className="act-card__main">
                <div className="act-card__date">
                  <span className="act-card__dot" />
                  {a.time}
                </div>
                <h2 className="act-card__title">{a.title}</h2>
                <p className="act-card__meta">{a.clubName}</p>
                <p className="act-card__place">{a.place}</p>
              </Link>
              <div className="act-card__foot">
                <Link to={`/app/activities/${a.id}`} className="btn-ghost act-card__detail">
                  查看详情
                </Link>
                <button
                  type="button"
                  className="btn-primary act-card__join"
                  onClick={() => openProfileModal('参加活动前请完善资料，便于主办方联系你。')}
                >
                  参加活动
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <section className="club-act-section" aria-labelledby="club-act-heading">
        <h2 id="club-act-heading" className="club-act-section__label">
          活动回顾
        </h2>
        <div className="club-act-stack">
          {clubActivityPosts.map((p, i) => (
            <Link
              key={p.id}
              to={`/app/activities/${p.id}`}
              className={`club-act-card club-act-card--tone-${i % 3}`}
              style={{ zIndex: clubActivityPosts.length - i }}
            >
              <span className="club-act-card__icon" aria-hidden>
                {p.iconEmoji}
              </span>
              <div className="club-act-card__text">
                <span className="club-act-card__club">{p.clubName}</span>
                <span className="club-act-card__sub">
                  {p.activityTitle} - {p.datePart}
                </span>
              </div>
              <span className="club-act-card__mark" aria-hidden>
                ✓
              </span>
            </Link>
          ))}
        </div>
      </section>

      <style>{`
        .page.activities .page-head {
          padding: 16px 16px 0;
        }
        .page-head__title {
          margin: 0 0 4px;
          font-size: 24px;
          font-weight: 800;
        }
        .page-head__sub {
          margin: 0 0 16px;
          font-size: 13px;
          color: var(--muted);
        }
        .act-list {
          list-style: none;
          margin: 0;
          padding: 0 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .act-card {
          border-radius: 18px;
          background: var(--paper);
          overflow: hidden;
        }
        .act-card__main {
          display: block;
          padding: 14px 16px 8px;
          color: inherit;
        }
        .act-card__foot {
          display: flex;
          gap: 10px;
          padding: 0 12px 12px;
        }
        .act-card__detail {
          flex: 1;
          text-align: center;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 12px;
          border-radius: 14px;
        }
        .act-card__join {
          flex: 1;
          font-size: 13px;
          font-weight: 800;
          padding: 10px 12px;
          border-radius: 14px;
        }
        .act-card__date {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          margin-bottom: 8px;
        }
        .act-card__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--lime);
          border: 2px solid var(--line);
        }
        .act-card__title {
          margin: 0 0 6px;
          font-size: 17px;
          font-weight: 800;
        }
        .act-card__meta {
          margin: 0 0 4px;
          font-size: 13px;
          font-weight: 600;
        }
        .act-card__place {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
        }
        .club-act-section {
          margin-top: 8px;
          padding-bottom: 24px;
        }
        .club-act-section__label {
          margin: 0 16px 12px;
          font-size: 13px;
          font-weight: 800;
        }
        .club-act-stack {
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .club-act-card {
          position: relative;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 14px 16px;
          margin-bottom: -12px;
          border-radius: 26px;
          border: 2px solid var(--line);
          text-decoration: none;
          color: var(--ink);
          box-shadow: 0 5px 0 rgba(0, 0, 0, 0.06);
          transition: transform 0.12s ease, filter 0.12s ease;
        }
        .club-act-card:active {
          transform: translateY(1px);
          filter: brightness(0.98);
        }
        .club-act-card--tone-0 {
          background: linear-gradient(145deg, #ffe8f2 0%, #ffd6e8 100%);
        }
        .club-act-card--tone-1 {
          background: linear-gradient(145deg, #fff9e6 0%, #fff0c2 100%);
        }
        .club-act-card--tone-2 {
          background: linear-gradient(145deg, #e8f4ff 0%, #dceeff 100%);
        }
        .club-act-card__icon {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          background: rgba(255, 255, 255, 0.65);
          box-shadow: var(--shadow-sketch);
        }
        .club-act-card__text {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .club-act-card__club {
          font-size: 15px;
          font-weight: 800;
          line-height: 1.2;
        }
        .club-act-card__sub {
          font-size: 12px;
          font-weight: 600;
          color: #3a3a3a;
          line-height: 1.35;
          text-align: left;
        }
        .club-act-card__mark {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          background: rgba(255, 255, 255, 0.85);
          border: 2px solid var(--line);
        }
        .club-act-stack .club-act-card:last-child {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
