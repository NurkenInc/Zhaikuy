import { Avatar } from '../Avatar/Avatar'
import { Dropdown } from './Dropdown'
import { DropdownItem } from '@/shared/lib/types/nav'

interface AvatarDropdownProps {
  src?: string
  alt?: string
  items: DropdownItem[]
}

export const AvatarDropdown = (props: AvatarDropdownProps) => {
  const {
    src = 'https://github.com/shadcn.png',
    alt = 'avatar',
    items
  } = props;

  return (
    <Dropdown 
      variant="dropdown-end"
      dropdownItems={items} 
      trigger={<Avatar src={src} alt={alt} />}
    />
  )
}