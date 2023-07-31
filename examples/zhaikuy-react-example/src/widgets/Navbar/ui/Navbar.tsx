import { Link } from 'react-router-dom';
import { Bell, Search, Loader2 } from 'lucide-react';
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { DropdownItem, NavItem } from '@/shared/lib/types/nav';
import { useSession } from '@/shared/lib/hooks/useSession';
import { AvatarDropdown } from '@/shared/ui/Dropdown/AvatarDropdown';
import { ThemeToggler } from '../../ThemeToggler/ui/ThemeToggler';
import { LangSwitcher } from '@/widgets/LangSwitcher/ui/LangSwitcher';

interface NavbarProps {
  navItems: NavItem[]
  dropdownItems: DropdownItem[]
  avatarDropdownItems: DropdownItem[]
}

// kanban app not todo
export const Navbar = (props: NavbarProps) => {
  const { status, user } = useSession();
  const {
    navItems,
    dropdownItems,
    avatarDropdownItems,
  } = props;
  
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Dropdown dropdownItems={[...dropdownItems, ...navItems]} />
      </div>
      <div className="navbar-center">
        <Link 
          className="btn btn-ghost normal-case text-xl"
          to='/' 
        >
          Flowlish
        </Link>
      </div>
      <div className="navbar-end gap-2 mr-4">
        <LangSwitcher />
        <ThemeToggler />
        {status === 'authenticated' ? (
          <>
            <button className="btn btn-ghost btn-circle">
              <Search />
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <Bell />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
            <AvatarDropdown 
              items={avatarDropdownItems}
              src={user?.avatarUrl}
            />
          </>
        ) : status === 'unauthenticated' ? (
          <Link className='btn btn-outline btn-accent' to='/auth'>
            Get Started
          </Link>
          ) : (
          <button className='btn btn-outline btn-accent'>
            <Loader2 className='animate-spin' />
          </button>
        )}
      </div>
    </div>
  )
}