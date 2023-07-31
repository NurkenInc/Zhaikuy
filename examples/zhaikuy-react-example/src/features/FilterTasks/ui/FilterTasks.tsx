import { Dropdown } from '@/shared/ui/Dropdown/Dropdown';
import { TasksSchema, useTasks } from '@/entities/Task/model/slices/tasksSlice'
import { filtersDropdown } from '../model/consts/filter';
import { TaskStatus } from '@/entities/Task/model/validators/task';
import { useTranslation } from 'react-i18next';

export const FilterTasks = () => {
  const setFilters = useTasks<TasksSchema['setFilters']>(state => state.setFilters);
  const filters = useTasks<TasksSchema['filters']>(state => state.filters);
  const { t } = useTranslation();

  const handleStatusChange = (status: TaskStatus | null) => {
    setFilters({
      search: filters?.search,
      status,
    })
  }

  const handleSearchChange = (search: string) => {
    setFilters({
      search,
      status: filters?.status,
    })
  }

  return (
    <div className="join py-4">
      <div>
        <div>
          <input className="input input-bordered join-item focus:outline-none" placeholder="Search"/>
        </div>
      </div>
      <div className='join-item'>
        <Dropdown 
          dropdownItems={filtersDropdown(handleStatusChange)}
          trigger={(
            <button className='btn btn-outline rounded-l-none' tabIndex={0}>
              {t(filters?.status ?? 'All')}
            </button>
          )}
        />
      </div>
    </div>
  )
}