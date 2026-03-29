import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { BottomNav } from '@/components/BottomNav'
import { CompleteProfileModal } from '@/components/CompleteProfileModal'
import { SESSION_FIRST_PROFILE, useProfile } from '@/context/ProfileContext'
import { isOnboardingDone } from '@/lib/storage'

export default function MainLayout() {
  const { profileModalOpen, closeProfileModal, openProfileModal } = useProfile()

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_FIRST_PROFILE) === '1') {
        sessionStorage.removeItem(SESSION_FIRST_PROFILE)
        openProfileModal('欢迎加入！建议先完善资料，方便后续报名与匹配。')
      }
    } catch {
      /* ignore */
    }
  }, [openProfileModal])

  if (!isOnboardingDone()) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="main-layout">
      <div className="main-layout__scroll">
        <Outlet />
      </div>
      <BottomNav />
      <CompleteProfileModal open={profileModalOpen} onClose={closeProfileModal} />
      <style>{`
        .main-layout {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        .main-layout__scroll {
          flex: 1;
          padding-bottom: calc(72px + env(safe-area-inset-bottom));
        }
      `}</style>
    </div>
  )
}
