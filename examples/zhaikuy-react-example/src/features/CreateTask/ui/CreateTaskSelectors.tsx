import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import { prioritySelector, statusSelector } from '../model/consts/selector'

interface CreateTaskSelectorsProps {
  onStatusChange: (status: string) => void
  onPriorityChange: (priority: string) => void
  status: string
  priority: string
}

export const CreateTaskSelectors = (props: CreateTaskSelectorsProps) => {
  const {
    onStatusChange,
    onPriorityChange,
    status,
    priority
  } = props;

  return (
    <>
      <Dropdown 
        dropdownItems={statusSelector(onStatusChange)}
        trigger={status}
      />
      <Dropdown 
        dropdownItems={prioritySelector(onPriorityChange)}
        trigger={priority}
      />
    </>
  )
}