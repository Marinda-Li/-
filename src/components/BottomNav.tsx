import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/app/discover', label: '发现', icon: DiscoverIcon },
  { to: '/app/activities', label: '活动', icon: CalendarIcon },
  { to: '/app/messages', label: '消息', icon: MessageIcon },
  { to: '/app/me', label: '个人', icon: UserIcon },
]

export function BottomNav() {
  return (
    <nav className="bottom-nav" aria-label="主导航">
      {tabs.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) => `bottom-nav__item ${isActive ? 'bottom-nav__item--active' : ''}`}
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
      <style>{`
        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 430px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 8px 8px calc(8px + env(safe-area-inset-bottom));
          background: var(--paper);
          border-top: 2px solid var(--line);
          z-index: 20;
        }
        .bottom-nav__item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 6px 4px;
          font-size: 11px;
          font-weight: 600;
          color: var(--muted);
          border-radius: 12px;
          transition: background 0.15s, color 0.15s;
        }
        .bottom-nav__item svg {
          opacity: 0.7;
        }
        .bottom-nav__item--active {
          color: var(--ink);
          background: rgba(197, 180, 243, 0.35);
        }
        .bottom-nav__item--active svg {
          opacity: 1;
        }
      `}</style>
    </nav>
  )
}

function DiscoverIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M16 16 L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 10 H21 M8 3 V7 M16 3 V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function MessageIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 6 C4 5 5 4 6 4 H18 C19 4 20 5 20 6 V14 C20 15 19 16 18 16 H10 L6 20 V16 H6 C5 16 4 15 4 14 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="9" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M6 20 C6 16 9 14 12 14 C15 14 18 16 18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
