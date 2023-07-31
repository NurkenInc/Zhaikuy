import { TaskStatus } from '@/entities/Task/model/validators/task'
import { DropdownItem } from '@/shared/lib/types/nav'

export const filtersDropdown: 
  (onChange: (status: TaskStatus | null) => void) => DropdownItem[] 
  = (onChange: (status: TaskStatus | null) => void) => [
  {
    label: 'done',
    onClick: () => onChange('done')
  },
  {
    label: 'todo',
    onClick: () => onChange('todo')
  },
  {
    label: 'in review',
    onClick: () => onChange('in review')
  },
  {
    label: 'in progress',
    onClick: () => onChange('in progress')
  },
  {
    label: 'all',
    onClick: () => onChange(null)
  },
]