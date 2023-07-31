import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AlignLeft } from 'lucide-react';
import { DropdownItem } from '@/shared/lib/types/nav';

interface DropdownProps {
  dropdownItems: DropdownItem[]
  trigger?: ReactNode
  variant?: string
}

export const Dropdown = (props: DropdownProps) => {
  const {
    dropdownItems,
    trigger,
    variant,
  } = props;
  const { t } = useTranslation();

  return (
    <div className={`dropdown ${variant}`}>
      {trigger ?? (
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <AlignLeft />
        </label>)}
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-max">
        {dropdownItems.map((item, index) => {
          const content = item.href ? (
            <li key={item.href}>
              <Link to={item.href}>
                {t(item.label)}
              </Link>
            </li>
          ) : (
            <li key={item.label ?? index} onClick={item.onClick}>
              <button className='lowercase justify-start bg-transparent hover:bg-transparent' type='button'>
                <div className='flex items-center gap-2'>
                  {item.icon}
                  {t(item.label)}
                </div>
              </button>
            </li>
          )

          return content;
        })}
      </ul>
    </div>
  )
}