import { Navigate, Route, Routes } from 'react-router-dom'
import { ProfileProvider } from './context/ProfileContext'
import MainLayout from './layouts/MainLayout'
import Welcome from './pages/Welcome'
import InterestSelect from './pages/InterestSelect'
import Discover from './pages/Discover'
import RecruitmentDetail from './pages/RecruitmentDetail'
import Activities from './pages/Activities'
import ActivityDetail from './pages/ActivityDetail'
import Messages from './pages/Messages'
import Profile from './pages/Profile'

export default function App() {
  return (
    <ProfileProvider>
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/interests" element={<InterestSelect />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Navigate to="discover" replace />} />
          <Route path="discover" element={<Discover />} />
          <Route path="discover/recruitment/:id" element={<RecruitmentDetail />} />
          <Route path="activities" element={<Activities />} />
          <Route path="activities/:id" element={<ActivityDetail />} />
          <Route path="messages" element={<Messages />} />
          <Route path="me" element={<Profile />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
    </ProfileProvider>
  )
}
