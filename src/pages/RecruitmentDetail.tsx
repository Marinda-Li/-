import { Link, useParams } from 'react-router-dom'
import { clubRecruitments, statusLabel } from '@/data/clubRecruitments'
import { useProfile } from '@/context/ProfileContext'

export default function RecruitmentDetail() {
  const { id } = useParams()
  const { openProfileModal } = useProfile()
  const r = clubRecruitments.find((x) => x.id === id)

  if (!r) {
    return (
      <div className="cd-empty">
        <p>未找到该社团招募。</p>
        <Link to="/app/discover">返回发现</Link>
        <style>{`
          .cd-empty {
            padding: 24px;
          }
        `}</style>
      </div>
    )
  }

  const ended = r.status === 'ended'
  const st = statusLabel(r.status)

  return (
    <div className="club-detail">
      <div className="club-detail__scroll">
        <Link to="/app/discover" className="club-detail__back">
          ← 返回发现
        </Link>

        <div className="club-detail__hero">
          <img src={r.detailHeroUrl} alt="" className="club-detail__hero-img" loading="lazy" />
          <div className="club-detail__hero-cap">
            <span className="club-detail__badge">{st}</span>
            <h1 className="club-detail__h1">{r.clubName}</h1>
            <p className="club-detail__sub">{r.title}</p>
          </div>
        </div>

        <section className="club-detail__block sketch-border--thin">
          <h2 className="club-detail__h2">社团介绍</h2>
          <p className="club-detail__p">{r.detailIntro}</p>
        </section>

        <section className="club-detail__block sketch-border--thin">
          <h2 className="club-detail__h2">招募要求</h2>
          <p className="club-detail__p club-detail__pre">{r.requirements}</p>
        </section>

        <div className="club-detail__spacer" aria-hidden />
      </div>

      <div className="club-detail__bar">
        <button
          type="button"
          className="btn-primary club-detail__apply"
          disabled={ended}
          onClick={() => {
            if (!ended) openProfileModal('提交申请前请确认资料已填写完整。')
          }}
        >
          {ended ? '招募已结束' : '立即申请'}
        </button>
      </div>

      <style>{`
        .club-detail {
          min-height: 100%;
          position: relative;
        }
        .club-detail__scroll {
          padding: 12px 16px 0;
          padding-bottom: calc(120px + env(safe-area-inset-bottom));
        }
        .club-detail__back {
          display: inline-block;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--muted);
        }
        .club-detail__hero {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          border: 2px solid var(--line);
          margin-bottom: 14px;
          background: var(--grey-fill);
        }
        .club-detail__hero-img {
          width: 100%;
          display: block;
          aspect-ratio: 16 / 9;
          object-fit: cover;
        }
        .club-detail__hero-cap {
          padding: 12px 14px 14px;
          background: var(--paper);
        }
        .club-detail__badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 800;
          padding: 4px 10px;
          border-radius: 8px;
          border: 2px solid var(--line);
          margin-bottom: 8px;
          background: rgba(197, 180, 243, 0.35);
        }
        .club-detail__h1 {
          margin: 0 0 4px;
          font-size: 22px;
          font-weight: 800;
          line-height: 1.2;
        }
        .club-detail__sub {
          margin: 0;
          font-size: 14px;
          color: var(--muted);
          font-weight: 600;
        }
        .club-detail__block {
          padding: 14px;
          border-radius: 16px;
          border: 2px solid var(--line);
          margin-bottom: 12px;
          background: var(--paper);
        }
        .club-detail__h2 {
          margin: 0 0 8px;
          font-size: 15px;
          font-weight: 800;
        }
        .club-detail__p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: #333;
        }
        .club-detail__pre {
          white-space: pre-wrap;
        }
        .club-detail__spacer {
          height: 8px;
        }
        .club-detail__bar {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          bottom: calc(72px + env(safe-area-inset-bottom));
          width: 100%;
          max-width: 430px;
          padding: 10px 16px;
          background: linear-gradient(to top, var(--paper) 70%, rgba(255, 255, 255, 0));
          border-top: 2px solid var(--line);
          z-index: 25;
          box-sizing: border-box;
        }
        .club-detail__apply {
          width: 100%;
        }
        .club-detail__apply:disabled {
          opacity: 0.55;
          cursor: not-allowed;
          filter: grayscale(0.2);
        }
      `}</style>
    </div>
  )
}
