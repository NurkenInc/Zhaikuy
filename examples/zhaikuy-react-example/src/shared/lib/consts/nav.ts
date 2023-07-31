import { DefaultConfig } from '@/shared/lib/types/nav';

export const mainConfig: DefaultConfig = {
  dropdownItems: [
    {
      href: '/dashboard',
      label: 'Dashboard'
    },
    {
      href: '/tasks',
      label: 'Tasks'
    },
    {
      href: '/tasks/create',
      label: 'Create Task'
    },
  ],
  avatarItems: [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/settings',
      label: 'Settings'
    },
    {
      href: '/logout',
      label: 'Sign out'
    },
  ],
  navItems: [],
  sideItems: []
}

export const authConfig: DefaultConfig = {
  dropdownItems: [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/',
      label: 'Home'
    },
  ],
  avatarItems: [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/settings',
      label: 'Settings'
    },
    {
      href: '/logout',
      label: 'Sign out'
    },
  ],
  navItems: [],
  sideItems: []
}

export const errorConfig: DefaultConfig = {
  dropdownItems: [
    {
      href: '/',
      label: 'Home'
    },
  ],
  avatarItems: [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/settings',
      label: 'Settings'
    },
    {
      href: '/logout',
      label: 'Sign out'
    },
  ],
  navItems: [],
  sideItems: []
}

export const tasksConfig: DefaultConfig = {
  dropdownItems: [
    {
      href: '/',
      label: 'Home',
    },
  ],
  avatarItems: [
    {
      href: '/profile',
      label: 'Profile'
    },
    {
      href: '/settings',
      label: 'Settings'
    },
    {
      href: '/logout',
      label: 'Sign out'
    },
  ],
  navItems: [],
  sideItems: []
}