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
  id: number
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
  nickname?: string
  phone?: string
  location?: string
  preferences: PreferenceType[]
}

export type FormRowType = {
  labelText?: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  default?: string
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

export type Preference = {
  id: string,
  label: string,
  checked: boolean
};

export type CategoryType = {
  category_id: string
  category_name: string
}

export type DishType = {
  dish_id: string
  dishname: string
  dish_img: string
  dish_type: string
  restrictions: string;
  dish_price: number
  dish_qty: number
  dish_subtotal: number
}

export type StageToShowType = {
  show_user_info: boolean
  show_table_selection: boolean
  show_order_selection: boolean
  show_booking_summary: boolean
}

export type BookingType = {
  booking_id: string
  user_id: number
  table_id: number
  order: number[]
  date_hour: string
  num_people: number
}