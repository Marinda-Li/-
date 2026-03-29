const ONBOARDING = 'club_match_onboarding_done'

export function isOnboardingDone(): boolean {
  try {
    return localStorage.getItem(ONBOARDING) === '1'
  } catch {
    return false
  }
}

export function setOnboardingDone(): void {
  try {
    localStorage.setItem(ONBOARDING, '1')
  } catch {
    /* ignore */
  }
}
