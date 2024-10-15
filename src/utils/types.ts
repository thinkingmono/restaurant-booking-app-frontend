
export type PreferenceType = {
  id: string
  label: string
  checked: boolean
}

export type UserType = {
  name: string
  email: string
  password: string
  location?: string
  isMember?: boolean
  showPreferences?: boolean
  preferences: PreferenceType[]
}

export type UserUpdateType = {
  name: string
  email: string
  location: string
  preferences: PreferenceType[]
}