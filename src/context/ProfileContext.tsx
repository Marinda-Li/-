import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { LeadershipRole, UserProfile, WishItem } from '@/types/profile'
import { emptyProfile } from '@/types/profile'

const KEY_PROFILE = 'club_match_profile'
const KEY_WISH = 'club_match_wishlist'
const KEY_LEAD = 'club_match_leadership'

function loadProfile(): UserProfile {
  try {
    const raw = localStorage.getItem(KEY_PROFILE)
    if (!raw) return emptyProfile()
    const p = JSON.parse(raw) as Partial<UserProfile>
    return { ...emptyProfile(), ...p }
  } catch {
    return emptyProfile()
  }
}

function saveProfile(p: UserProfile) {
  try {
    localStorage.setItem(KEY_PROFILE, JSON.stringify(p))
  } catch {
    /* ignore */
  }
}

function loadWishlist(): WishItem[] {
  try {
    const raw = localStorage.getItem(KEY_WISH)
    if (!raw) return []
    const arr = JSON.parse(raw) as WishItem[]
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

function saveWishlist(w: WishItem[]) {
  try {
    localStorage.setItem(KEY_WISH, JSON.stringify(w))
  } catch {
    /* ignore */
  }
}

function loadLeadership(): LeadershipRole[] {
  try {
    const raw = localStorage.getItem(KEY_LEAD)
    if (!raw) return []
    const arr = JSON.parse(raw) as LeadershipRole[]
    return Array.isArray(arr) ? arr : []
  } catch {
    return []
  }
}

export const SESSION_FIRST_PROFILE = 'club_match_prompt_profile_first'

type Ctx = {
  profile: UserProfile
  setProfileField: (key: keyof UserProfile, value: string) => void
  saveProfileNow: () => void
  wishlist: WishItem[]
  addWish: (item: WishItem) => void
  removeWish: (id: string) => void
  leadership: LeadershipRole[]
  profileModalOpen: boolean
  profileModalHint: string | null
  openProfileModal: (hint?: string) => void
  closeProfileModal: () => void
}

const ProfileContext = createContext<Ctx | null>(null)

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(() => loadProfile())
  const [wishlist, setWishlist] = useState<WishItem[]>(() => loadWishlist())
  const [leadership] = useState<LeadershipRole[]>(() => loadLeadership())
  const [profileModalOpen, setProfileModalOpen] = useState(false)
  const [profileModalHint, setProfileModalHint] = useState<string | null>(null)

  useEffect(() => {
    saveProfile(profile)
  }, [profile])

  useEffect(() => {
    saveWishlist(wishlist)
  }, [wishlist])

  const setProfileField = useCallback((key: keyof UserProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [key]: value }))
  }, [])

  const saveProfileNow = useCallback(() => {
    saveProfile(profile)
  }, [profile])

  const addWish = useCallback((item: WishItem) => {
    setWishlist((prev) => {
      if (prev.some((w) => w.id === item.id)) return prev
      return [...prev, item]
    })
  }, [])

  const removeWish = useCallback((id: string) => {
    setWishlist((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const openProfileModal = useCallback((hint?: string) => {
    setProfileModalHint(hint ?? null)
    setProfileModalOpen(true)
  }, [])

  const closeProfileModal = useCallback(() => {
    setProfileModalOpen(false)
    setProfileModalHint(null)
  }, [])

  const value = useMemo(
    () => ({
      profile,
      setProfileField,
      saveProfileNow,
      wishlist,
      addWish,
      removeWish,
      leadership,
      profileModalOpen,
      profileModalHint,
      openProfileModal,
      closeProfileModal,
    }),
    [
      profile,
      setProfileField,
      saveProfileNow,
      wishlist,
      addWish,
      removeWish,
      leadership,
      profileModalOpen,
      profileModalHint,
      openProfileModal,
      closeProfileModal,
    ],
  )

  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfile() {
  const ctx = useContext(ProfileContext)
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider')
  return ctx
}
