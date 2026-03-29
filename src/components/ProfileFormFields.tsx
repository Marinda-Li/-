import type { UserProfile } from '@/types/profile'

const GRADES = ['大一', '大二', '大三', '大四', '硕士', '博士', '其他']
const GENDERS = [
  { v: '男', l: '男' },
  { v: '女', l: '女' },
  { v: '不便透露', l: '不便透露' },
]

type Props = {
  profile: UserProfile
  onChange: (key: keyof UserProfile, value: string) => void
  idPrefix?: string
}

export function ProfileFormFields({ profile, onChange, idPrefix = 'pf' }: Props) {
  return (
    <div className="pf">
      <label className="pf__row" htmlFor={`${idPrefix}-school`}>
        <span className="pf__label">学校</span>
        <input
          id={`${idPrefix}-school`}
          className="pf__input sketch-border--thin"
          placeholder="选择或填写学校"
          value={profile.school}
          onChange={(e) => onChange('school', e.target.value)}
          autoComplete="organization"
        />
      </label>
      <label className="pf__row" htmlFor={`${idPrefix}-grade`}>
        <span className="pf__label">年级</span>
        <select
          id={`${idPrefix}-grade`}
          className="pf__input sketch-border--thin"
          value={profile.grade}
          onChange={(e) => onChange('grade', e.target.value)}
        >
          <option value="">请选择</option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </label>
      <label className="pf__row" htmlFor={`${idPrefix}-name`}>
        <span className="pf__label">姓名</span>
        <input
          id={`${idPrefix}-name`}
          className="pf__input sketch-border--thin"
          placeholder="真实姓名"
          value={profile.name}
          onChange={(e) => onChange('name', e.target.value)}
          autoComplete="name"
        />
      </label>
      <label className="pf__row" htmlFor={`${idPrefix}-sid`}>
        <span className="pf__label">学号</span>
        <input
          id={`${idPrefix}-sid`}
          className="pf__input sketch-border--thin"
          placeholder="学号"
          inputMode="numeric"
          value={profile.studentId}
          onChange={(e) => onChange('studentId', e.target.value)}
        />
      </label>
      <div className="pf__row pf__row--gender">
        <span className="pf__label">性别</span>
        <div className="pf__pills" role="group" aria-label="性别">
          {GENDERS.map(({ v, l }) => (
            <button
              key={v}
              type="button"
              className={`pill ${profile.gender === v ? 'pill--active' : ''}`}
              onClick={() => onChange('gender', v)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
      <style>{`
        .pf {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .pf__row {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pf__row--gender {
          gap: 8px;
        }
        .pf__label {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
        }
        .pf__input {
          width: 100%;
          padding: 12px 14px;
          border-radius: 14px;
          border: 2px solid var(--line);
          font: inherit;
          background: var(--paper);
        }
        .pf__input::placeholder {
          color: #b0b0b0;
        }
        .pf__pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
      `}</style>
    </div>
  )
}
