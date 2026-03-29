import { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

/** 负责人认证申请（次要入口，轻量弹窗） */
export function LeaderApplyModal({ open, onClose }: Props) {
  const [note, setNote] = useState('')

  if (!open) return null

  function submit() {
    try {
      localStorage.setItem(
        'club_match_leader_apply_pending',
        JSON.stringify({ note, at: Date.now() }),
      )
    } catch {
      /* ignore */
    }
    onClose()
    setNote('')
  }

  return (
    <div className="lam-root" role="dialog" aria-modal="true" aria-labelledby="lam-title">
      <button type="button" className="lam-backdrop" onClick={onClose} aria-label="关闭" />
      <div className="lam-card sketch-border">
        <button type="button" className="lam-close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        <h2 id="lam-title" className="lam-title">
          申请负责人认证
        </h2>
        <p className="lam-desc">提交后由学校团委或社团联审核，结果将通过消息通知（示意）。</p>
        <label className="lam-label" htmlFor="lam-note">
          补充说明（选填）
        </label>
        <textarea
          id="lam-note"
          className="lam-ta sketch-border--thin"
          rows={3}
          placeholder="如：意向社团、任职经历等"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="button" className="btn-primary lam-btn" onClick={submit}>
          提交申请
        </button>
      </div>
      <style>{`
        .lam-root {
          position: fixed;
          inset: 0;
          z-index: 55;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .lam-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
        }
        .lam-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 320px;
          padding: 22px 18px 18px;
          background: var(--paper);
        }
        .lam-close {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 2px solid var(--line);
          background: var(--paper);
          font-weight: 800;
          line-height: 1;
        }
        .lam-title {
          margin: 0 0 8px;
          font-size: 17px;
          font-weight: 800;
          padding-right: 28px;
        }
        .lam-desc {
          margin: 0 0 12px;
          font-size: 13px;
          color: var(--muted);
          line-height: 1.45;
        }
        .lam-label {
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 6px;
          display: block;
        }
        .lam-ta {
          width: 100%;
          padding: 10px 12px;
          border-radius: 12px;
          border: 2px solid var(--line);
          font: inherit;
          resize: vertical;
          margin-bottom: 14px;
        }
        .lam-btn {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
