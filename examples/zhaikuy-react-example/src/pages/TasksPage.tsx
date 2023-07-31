import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TaskList } from '@/entities/Task'
import { RouteGuard } from '@/app/providers/RouterProvider'
import { BaseLayout } from '@/layouts/BaseLayout'
import { tasksConfig } from '@/shared/lib/consts/nav'
import { TasksSchema, useTasks } from '@/entities/Task/model/slices/tasksSlice'
import { FilterTasks } from '@/features/FilterTasks'

export const TasksPage = () => {
  const tasks = useTasks<TasksSchema['data']>((state) => state.data);
  const filters = useTasks<TasksSchema['filters']>((state) => state.filters);
  const getTasks = useTasks<TasksSchema['getTasks']>((state) => state.getTasks);

  useEffect(() => {
    getTasks(filters);
  }, [getTasks, filters])

  return (
    <RouteGuard 
      title='Forbidden'
      description='You must be logged in to see this page'
      action={(
        <Link 
          to='/auth' 
          className='btn btn-outline btn-error basis-1/2'
        >
          Login
        </Link>
      )}
    >
      <BaseLayout 
        avatarDropdownItems={tasksConfig.avatarItems}
        dropdownItems={tasksConfig.dropdownItems}
        navItems={tasksConfig.navItems}
      >
        <FilterTasks />
        <TaskList tasks={tasks} />
      </BaseLayout>
    </RouteGuard>
  )
}