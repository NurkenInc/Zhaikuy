export type FieldType = 'text' | 'file' | 'textarea' | 'color' | 'email' | 'tel' | 'password' | 'date'

export type Field<T> = {
  name: T
  label: string
  placeholder: string
  description?: string
  type: FieldType
} 