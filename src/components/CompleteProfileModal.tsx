import { useProfile } from '@/context/ProfileContext'
import { ProfileFormFields } from '@/components/ProfileFormFields'

type Props = {
  open: boolean
  onClose: () => void
}

export function CompleteProfileModal({ open, onClose }: Props) {
  const { profile, setProfileField, saveProfileNow, profileModalHint } = useProfile()

  if (!open) return null

  function handleSave() {
    saveProfileNow()
    onClose()
  }

  return (
    <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="profile-modal-title">
      <button type="button" className="modal-backdrop" onClick={onClose} aria-label="关闭" />
      <div className="modal-card sketch-border">
        <button type="button" className="modal-close" onClick={onClose} aria-label="关闭">
          ✕
        </button>
        <h2 id="profile-modal-title" className="modal-title">
          完善资料
        </h2>
        {profileModalHint ? <p className="modal-desc">{profileModalHint}</p> : null}
        <p className="modal-desc modal-desc--muted">
          学校、年级、姓名、学号与性别将用于报名与身份核验（示意）。
        </p>
        <div className="modal-form">
          <ProfileFormFields profile={profile} onChange={setProfileField} idPrefix="modal-pf" />
        </div>
        <button type="button" className="btn-primary modal-cta" onClick={handleSave}>
          保存
        </button>
      </div>
      <style>{`
        .modal-root {
          position: fixed;
          inset: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }
        .modal-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.25);
          border: none;
          cursor: pointer;
        }
        .modal-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 340px;
          max-height: min(90vh, 640px);
          overflow-y: auto;
          padding: 24px 20px 20px;
          background: var(--paper);
        }
        .modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid var(--line);
          background: var(--paper);
          font-weight: 800;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-title {
          margin: 0 0 8px;
          padding-right: 36px;
          font-size: 20px;
          font-weight: 800;
        }
        .modal-desc {
          margin: 0 0 10px;
          color: var(--ink);
          font-size: 14px;
          line-height: 1.45;
        }
        .modal-desc--muted {
          color: var(--muted);
          font-size: 13px;
        }
        .modal-form {
          margin-bottom: 16px;
        }
        .modal-cta {
          width: 100%;
        }
      `}</style>
    </div>
  )
}
