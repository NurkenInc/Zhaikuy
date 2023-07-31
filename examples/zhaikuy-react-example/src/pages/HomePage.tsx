import { mainConfig } from '@/shared/lib/consts/nav'
import { BaseLayout } from '@/layouts/BaseLayout'
import { CreateTask } from '@/features/CreateTask'
import { RouteGuard } from '@/app/providers/RouterProvider'

export const HomePage = () => {
  return (
    <RouteGuard to='/auth'>
      <BaseLayout
        avatarDropdownItems={mainConfig.avatarItems}
        dropdownItems={mainConfig.dropdownItems}
        navItems={mainConfig.navItems}
      >
        <CreateTask />
        <div>Home</div>
      </BaseLayout>
    </RouteGuard>
  )
}