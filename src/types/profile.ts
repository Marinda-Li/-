export type UserProfile = {
  school: string
  grade: string
  name: string
  studentId: string
  gender: string
}

export type WishItem = {
  id: string
  clubName: string
  title: string
}

export type LeadershipRole = {
  clubName: string
  role: '团长' | '副团长'
}

export const emptyProfile = (): UserProfile => ({
  school: '',
  grade: '',
  name: '',
  studentId: '',
  gender: '',
})
