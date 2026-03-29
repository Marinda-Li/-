import { threads } from '@/data/mock'

export default function Messages() {
  const groups = threads.filter((t) => t.kind === 'group')
  const dms = threads.filter((t) => t.kind === 'dm')

  return (
    <div className="page messages">
      <header className="page-head">
        <h1 className="page-head__title">消息</h1>
        <p className="page-head__sub">社团群聊与联系人</p>
      </header>

      <section className="msg-section">
        <h2 className="msg-section__label">已加入的社团群聊</h2>
        <ul className="msg-list">
          {groups.map((t) => (
            <li key={t.id}>
              <button type="button" className="msg-row sketch-border--thin">
                <span className="msg-avatar" aria-hidden>
                  群
                </span>
                <div className="msg-body">
                  <div className="msg-top">
                    <span className="msg-name">{t.name}</span>
                    <span className="msg-time">{t.time}</span>
                  </div>
                  <p className="msg-last">{t.last}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="msg-section">
        <h2 className="msg-section__label">联系人消息</h2>
        <ul className="msg-list">
          {dms.map((t) => (
            <li key={t.id}>
              <button type="button" className="msg-row msg-row--dm sketch-border--thin">
                {t.avatarBgUrl ? (
                  <span className="msg-avatar msg-avatar--dm msg-avatar--stacked" aria-hidden>
                    <span
                      className="msg-avatar__bg"
                      style={{ backgroundImage: `url(${t.avatarBgUrl})` }}
                    />
                    <span className="msg-avatar__char">{t.avatarChar ?? '私'}</span>
                  </span>
                ) : (
                  <span className="msg-avatar msg-avatar--dm" aria-hidden>
                    {t.avatarChar ?? '私'}
                  </span>
                )}
                <div className="msg-body">
                  <div className="msg-top">
                    <span className="msg-name">{t.name}</span>
                    <span className="msg-time msg-time--accent">{t.time}</span>
                  </div>
                  <p className="msg-last">{t.last}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
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
        .messages {
          padding: 16px 16px 8px;
        }
        .msg-section {
          margin-bottom: 20px;
        }
        .msg-section__label {
          margin: 0 0 10px;
          font-size: 13px;
          font-weight: 800;
        }
        .msg-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .msg-row {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 12px;
          border-radius: 16px;
          border: 2px solid var(--line);
          background: var(--paper);
          font: inherit;
          text-align: left;
        }
        .msg-row--dm {
          background: rgba(247, 102, 195, 0.08);
        }
        .msg-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 2px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 800;
          background: rgba(197, 180, 243, 0.4);
        }
        .msg-avatar--dm {
          background: rgba(247, 102, 195, 0.35);
        }
        .msg-avatar--stacked {
          position: relative;
          overflow: hidden;
          background: rgba(247, 102, 195, 0.2);
        }
        .msg-avatar__bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.55;
        }
        .msg-avatar__char {
          position: relative;
          z-index: 1;
          font-size: 15px;
          font-weight: 800;
          color: var(--ink);
          text-shadow:
            0 0 2px rgba(255, 255, 255, 0.95),
            0 1px 2px rgba(255, 255, 255, 0.9);
        }
        .msg-body {
          flex: 1;
          min-width: 0;
        }
        .msg-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 4px;
        }
        .msg-name {
          font-weight: 800;
          font-size: 15px;
        }
        .msg-time {
          font-size: 11px;
          color: var(--muted);
          flex-shrink: 0;
        }
        .msg-time--accent {
          color: var(--pink);
          font-weight: 700;
        }
        .msg-last {
          margin: 0;
          font-size: 13px;
          color: var(--muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </div>
  )
}
