import React, { ReactNode } from 'react';

export type NavItem = {
  label: string
  href?: string
}

export type DropdownItem = NavItem & {
  value?: string
  onClick?: () => void
  icon?: ReactNode
};

export type SidebarItem = NavItem & {
  icon: React.SVGProps<SVGSVGElement>
}

export interface DefaultConfig {
  navItems: NavItem[]
  sideItems: SidebarItem[]
  dropdownItems: DropdownItem[]
  avatarItems: DropdownItem[]
}
