import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { statusLabel, type ClubRecruitment } from '@/data/clubRecruitments'

type Props = {
  r: ClubRecruitment
  onWish: () => void
}

export function ClubRecruitCard({ r, onWish }: Props) {
  const ended = r.status === 'ended'
  const st = statusLabel(r.status)

  const memberAvatars = useMemo(
    () => [1, 2, 3, 4, 5, 6].map((i) => `https://picsum.photos/seed/${r.id}mem${i}/64/64`),
    [r.id],
  )

  return (
    <article className={`club-card ${ended ? 'club-card--ended' : ''}`}>
      <Link to={`/app/discover/recruitment/${r.id}`} className="club-card__link">
        <div className="club-card__visual sketch-border--thin">
          <img className="club-card__cover" src={r.coverUrl} alt="" loading="lazy" />
          <span className={`club-card__st club-card__st--${r.status}`}>
            {r.status === 'endingSoon' ? (
              <svg className="club-card__st-ico" viewBox="0 0 24 24" width="12" height="12" aria-hidden>
                <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M12 7v6l4 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : null}
            {st}
          </span>
          <span className="club-card__prog">
            <span className="club-card__prog-cur">{r.progressCurrent}</span>
            <span className="club-card__prog-sep">/</span>
            <span className="club-card__prog-max">{r.progressTotal}</span>
          </span>
          <div className="club-card__footer">
            <div className="club-card__members-row" aria-hidden>
              {memberAvatars.slice(0, 4).map((url, i) => (
                <img key={url} src={url} alt="" className="club-card__member-ava" loading="lazy" style={{ zIndex: 4 - i }} />
              ))}
              <span className="club-card__members-more">…</span>
            </div>
            <p className="club-card__line">{r.introOneLine}</p>
          </div>
        </div>
      </Link>
      <button
        type="button"
        className="club-card__wish"
        onClick={(e) => {
          e.preventDefault()
          onWish()
        }}
        aria-label="加入意愿"
      >
        ♡
      </button>
      <div className="club-card__below">
        <div className="club-card__club">{r.clubName}</div>
        <div className="club-card__who">
          <img src={r.recruiterAvatar} alt="" className="club-card__ava" loading="lazy" />
          <span className="club-card__rn">{r.recruiterName}</span>
        </div>
      </div>
    </article>
  )
}
