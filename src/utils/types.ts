export type AvailabilityType = {
  year: number
  month: number
  day: number
  hours: string[]
}

export type TableType = {
  table_id: number,
  book_zone: string,
  book_date: string,
  book_hour: string,
  guests: number,
  status: string
}

export type FiltersType = {
  filter_date: string
  filter_hour: string,
  filter_zone: string,
  guests: number,
  status: string
}

export type PreferenceType = {
  id: string
  label: string
  checked: boolean
}

export type UserType = {
  name: string
  email: string
  nickname?: string
  phone?: string
  password: string
  location?: string
  isMember?: boolean
  showPreferences?: boolean
  preferences: PreferenceType[]
}

export type UserUpdateType = {
  name: string
  email: string
  nickname: string
  phone: string
  location: string
  preferences: PreferenceType[]
}

export type FormRowType = {
  labelText?: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

export type FormRowNumberType = {
  labelText?: string
  name: string
  value: number
  min: string
  max: string
  step: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type FormRowSelectType = {
  labelText: string
  name: string
  value: number | string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  list: number[] | string[]
  disabled?: boolean
}

export type FormRowDateType = {
  labelText: string
  name: string
  value: string
  min?: string,
  max?: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export type CategoryType = {
  category_id: string
  category_name: string
}

export type DishType = {
  dish_id: string
  dish_name: string
  dish_img: string
  dish_category: string
  dish_price: number
}