import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { BaseLayout } from '@/layouts/BaseLayout'
import { errorConfig } from '@/shared/lib/consts/nav'

interface PageUnavailaibleProps {
  title: string
  description?: string
  action?: ReactNode
}

export const PageUnavailaible = (props: PageUnavailaibleProps) => {
  const {
    title,
    description,
    action
  } = props;

  return (
    <BaseLayout
      avatarDropdownItems={errorConfig.avatarItems}
      dropdownItems={errorConfig.dropdownItems}
      navItems={errorConfig.navItems}
    >
      <div className="mockup-browser border bg-base-300 h-[calc(100vh-70px)]">
        <div className="mockup-browser-toolbar">
          <div className="input">https://zhaikuy-example.dev</div>
        </div>
        <div className="flex justify-center px-4 py-16 bg-base-200 h-full">
          <div className='flex flex-col gap-4'>
            <h1 className='font-bold'>{title}</h1>
            <p>{description}</p>
            <div className='btn-group'>
              <Link className='btn btn-outline btn-accent w-max mx-auto px-16' to='/'>Home</Link>
              {action}
            </div>
          </div>
        </div>
        </div>
    </BaseLayout>
  )
}