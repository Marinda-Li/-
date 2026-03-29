import { useState } from 'react'
import { LeaderApplyModal } from '@/components/LeaderApplyModal'
import { ProfileFormFields } from '@/components/ProfileFormFields'
import { useProfile } from '@/context/ProfileContext'

export default function Profile() {
  const {
    profile,
    setProfileField,
    saveProfileNow,
    wishlist,
    removeWish,
    leadership,
  } = useProfile()

  const [leaderOpen, setLeaderOpen] = useState(false)

  const displayName = profile.name.trim() || '新同学'

  return (
    <div className="profile">
      <div className="profile__avatar-block">
        <div className="profile__avatar sketch-border" aria-hidden>
          {displayName.slice(0, 1)}
        </div>
        <h1 className="profile__name">{displayName}</h1>
      </div>

      <section className="profile__section sketch-border--thin">
        <h2 className="profile__h2">我的认证</h2>
        {leadership.length === 0 ? (
          <p className="profile__empty">暂无负责人身份认证</p>
        ) : (
          <div className="profile__bubble-row" role="list">
            {leadership.map((r, i) => (
              <span key={`${r.clubName}-${i}`} className="pill pill--active profile__role-pill" role="listitem">
                {r.clubName}
                {r.role}
              </span>
            ))}
          </div>
        )}
        <p className="profile__leader-foot">
          <button type="button" className="profile__leader-apply" onClick={() => setLeaderOpen(true)}>
            申请负责人认证
          </button>
        </p>
      </section>

      <LeaderApplyModal open={leaderOpen} onClose={() => setLeaderOpen(false)} />

      <section className="profile__section sketch-border--thin">
        <div className="profile__section-head">
          <h2 className="profile__h2">意愿清单</h2>
        </div>
        <div
          className="profile__wish-intent-row"
          role={wishlist.length > 0 ? 'list' : undefined}
          aria-hidden={wishlist.length === 0 ? true : undefined}
          aria-label={wishlist.length > 0 ? '感兴趣的社团意愿' : undefined}
        >
          {wishlist.length > 0
            ? wishlist.map((w) => (
                <button
                  key={w.id}
                  type="button"
                  className="profile__intent-pill"
                  role="listitem"
                  onClick={() => removeWish(w.id)}
                  title="点击移除"
                >
                  <span className="profile__intent-pill-text">{w.clubName}</span>
                  <span className="profile__intent-pill-check" aria-hidden>
                    ✓
                  </span>
                </button>
              ))
            : ['视频', '音乐', '运动'].map((label) => (
                <span key={label} className="profile__intent-pill profile__intent-pill--ghost">
                  <span className="profile__intent-pill-text">{label}</span>
                  <span className="profile__intent-pill-check" aria-hidden>
                    ✓
                  </span>
                </span>
              ))}
        </div>
        {wishlist.length === 0 ? (
          <p className="profile__empty">暂无意愿，去逛逛招募吧～</p>
        ) : null}
      </section>

      <section className="profile__section sketch-border--thin">
        <div className="profile__section-head">
          <h2 className="profile__h2">资料</h2>
        </div>
        <ProfileFormFields profile={profile} onChange={setProfileField} idPrefix="page-pf" />
        <button
          type="button"
          className="btn-primary profile__save"
          onClick={() => {
            saveProfileNow()
          }}
        >
          保存资料
        </button>
      </section>

      <style>{`
        .profile {
          padding: 20px 16px 28px;
        }
        .profile__avatar-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-bottom: 20px;
        }
        .profile__avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 800;
          background: linear-gradient(145deg, rgba(197, 180, 243, 0.55), var(--paper));
          margin-bottom: 10px;
        }
        .profile__name {
          margin: 0;
          font-size: 20px;
          font-weight: 800;
        }
        .profile__section {
          padding: 14px 14px 16px;
          border-radius: 18px;
          border: 2px solid var(--line);
          margin-bottom: 14px;
          background: var(--paper);
        }
        .profile__section-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 10px;
          flex-wrap: wrap;
        }
        .profile__h2 {
          margin: 0;
          font-size: 15px;
          font-weight: 800;
        }
        .profile__wish-intent-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          height: 30px;
          margin-bottom: 10px;
        }
        .profile__intent-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          max-width: 100%;
          height: 30px;
          box-sizing: border-box;
          padding: 0 10px 0 12px;
          border-radius: 999px;
          border: 2px solid var(--line);
          background: linear-gradient(180deg, #8a78b8 0%, #6e5c9a 100%);
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          line-height: 1;
          cursor: pointer;
          box-shadow: var(--shadow-sketch);
          font: inherit;
        }
        .profile__intent-pill:hover {
          filter: brightness(1.05);
        }
        .profile__intent-pill:active {
          transform: translate(1px, 1px);
          box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.08);
        }
        .profile__intent-pill-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          max-width: 160px;
        }
        .profile__intent-pill-check {
          flex-shrink: 0;
          font-size: 11px;
          font-weight: 800;
          opacity: 0.95;
          line-height: 1;
        }
        .profile__intent-pill--ghost {
          cursor: default;
          pointer-events: none;
          opacity: 0.38;
        }
        .profile__empty {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.5;
        }
        .profile__bubble-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .profile__role-pill {
          font-size: 12px;
          font-weight: 700;
        }
        .profile__leader-foot {
          margin: 12px 0 0;
          font-size: 12px;
          color: var(--muted);
          text-align: center;
        }
        .profile__leader-apply {
          border: none;
          background: none;
          padding: 0;
          font-size: 12px;
          font-weight: 700;
          color: #5a4fcf;
          text-decoration: underline;
          cursor: pointer;
          font: inherit;
        }
        .profile__save {
          width: 100%;
          margin-top: 14px;
        }
      `}</style>
    </div>
  )
}
