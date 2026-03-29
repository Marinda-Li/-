import type { InterestId } from '@/data/interests'

const stroke = { stroke: '#000', strokeWidth: 2, fill: 'none', strokeLinecap: 'round' as const }

/** 简约线稿小图：与兴趣 id 对应 */
export function InterestDoodle({ id, size = 72 }: { id: InterestId; size?: number }) {
  const s = size
  const common = { width: s, height: s, viewBox: '0 0 64 64' }

  switch (id) {
    case 'pet':
      return (
        <svg {...common} aria-hidden>
          <ellipse cx="32" cy="38" rx="18" ry="14" {...stroke} />
          <circle cx="22" cy="28" r="6" {...stroke} />
          <circle cx="42" cy="28" r="6" {...stroke} />
          <path d="M26 44 Q32 48 38 44" {...stroke} />
          <path d="M18 36 L14 30 M46 36 L50 30" {...stroke} />
        </svg>
      )
    case 'drone':
      return (
        <svg {...common} aria-hidden>
          <rect x="20" y="28" width="24" height="12" rx="3" {...stroke} />
          <circle cx="14" cy="22" r="5" {...stroke} />
          <circle cx="50" cy="22" r="5" {...stroke} />
          <circle cx="14" cy="46" r="5" {...stroke} />
          <circle cx="50" cy="46" r="5" {...stroke} />
          <path d="M18 22 L26 28 M46 22 L38 28 M18 46 L26 40 M46 46 L38 40" {...stroke} />
        </svg>
      )
    case 'guofeng':
      return (
        <svg {...common} aria-hidden>
          <path d="M20 44 Q32 20 44 44" {...stroke} />
          <path d="M26 38 L38 38" {...stroke} />
          <circle cx="32" cy="30" r="4" {...stroke} />
          <path d="M18 48 L46 48" {...stroke} />
        </svg>
      )
    case 'debate':
      return (
        <svg {...common} aria-hidden>
          <rect x="14" y="18" width="36" height="28" rx="4" {...stroke} />
          <path d="M22 28 H42 M22 36 H38" {...stroke} />
          <path d="M32 46 L32 52 M26 52 H38" {...stroke} />
        </svg>
      )
    case 'academic':
      return (
        <svg {...common} aria-hidden>
          <path d="M20 22 L44 22 L44 46 L20 46 Z" {...stroke} />
          <path d="M24 30 H40 M24 36 H38 M24 42 H36" {...stroke} />
          <path d="M22 18 L42 18" {...stroke} />
        </svg>
      )
    case 'football':
      return (
        <svg {...common} aria-hidden>
          <circle cx="32" cy="34" r="16" {...stroke} />
          <path d="M32 22 L38 30 L32 38 L26 30 Z" {...stroke} />
          <path d="M22 34 H42 M32 24 V44" {...stroke} />
        </svg>
      )
    case 'volunteer':
      return (
        <svg {...common} aria-hidden>
          <path d="M32 18 C24 18 18 26 18 34 C18 44 32 52 32 52 C32 52 46 44 46 34 C46 26 40 18 32 18 Z" {...stroke} />
          <path d="M26 32 L30 36 L40 26" {...stroke} />
        </svg>
      )
    case 'music':
      return (
        <svg {...common} aria-hidden>
          <path d="M38 18 V40 M38 18 L48 14 V36" {...stroke} />
          <ellipse cx="24" cy="44" rx="10" ry="8" {...stroke} />
          <ellipse cx="46" cy="38" rx="8" ry="6" {...stroke} />
        </svg>
      )
    case 'photo':
      return (
        <svg {...common} aria-hidden>
          <rect x="14" y="20" width="36" height="28" rx="4" {...stroke} />
          <circle cx="32" cy="34" r="8" {...stroke} />
          <circle cx="44" cy="26" r="3" fill="#f766c3" stroke="#000" strokeWidth="1.5" />
        </svg>
      )
    default:
      return (
        <svg {...common} aria-hidden>
          <rect x="16" y="16" width="32" height="32" rx="6" {...stroke} />
        </svg>
      )
  }
}
