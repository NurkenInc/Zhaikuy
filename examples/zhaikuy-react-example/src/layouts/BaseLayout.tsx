import { Navbar } from '@/widgets/Navbar/ui/Navbar'
import { NavItem, DropdownItem } from '@/shared/lib/types/nav'
import { ReactNode } from 'react'

interface BaseLayoutProps {
  children: ReactNode
  navItems: NavItem[]
  dropdownItems: DropdownItem[]
  avatarDropdownItems: DropdownItem[]
}

export const BaseLayout = (props: BaseLayoutProps) => {
  const {
    navItems,
    dropdownItems,
    avatarDropdownItems,
    children,
  } = props;

  return (
    <>
      <Navbar 
        navItems={navItems} 
        dropdownItems={dropdownItems} 
        avatarDropdownItems={avatarDropdownItems}
      />
      {children}
    </>
  )
}