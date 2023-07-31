import { Link } from 'react-router-dom'
import { RouteGuard } from '@/app/providers/RouterProvider'
import { authConfig } from '@/shared/lib/consts/nav'
import { BaseLayout } from '@/layouts/BaseLayout'
import { AuthTabs } from '@/widgets/Auth'

export const AuthPage = () => {
  return (
    <RouteGuard 
      unauthenticatedOnly 
      title='Forbidden'
      description='You need to logout to be able to login again'
      action={(
        <Link 
          to='/logout' 
          className='btn btn-outline btn-error basis-1/2'
        >
          Logout
        </Link>
      )}
    >
      <BaseLayout
        avatarDropdownItems={authConfig.avatarItems}
        dropdownItems={authConfig.dropdownItems}
        navItems={authConfig.navItems}
      >
        <AuthTabs />
      </BaseLayout>
    </RouteGuard>
  )
}