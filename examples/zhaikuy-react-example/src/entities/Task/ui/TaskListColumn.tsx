import { useDroppable } from '@dnd-kit/core'
import { TaskListItem } from './TaskListItem'
import { Task } from '../model/types/task'
import { useTranslation } from 'react-i18next'

interface TaskListColumnProps {
  items: Task[]
  id: string
}

export const TaskListColumn = (props: TaskListColumnProps) => {
  const {
    items,
    id
  } = props;
  const { t } = useTranslation();  
  const { setNodeRef, isOver } = useDroppable({
    id
  })
  const style = {
    opacity: isOver ? 0.5 : 1
  }
  
  return (
    <div ref={setNodeRef} style={style} className='w-full bg-base-300 rounded-2xl px-2 py-2 h-max'>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title capitalize">{t(id)}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary capitalize">{t(`add ${id}`)}</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-grow gap-4">
        {items.map((item, index) => (
          <TaskListItem 
            parent={id} 
            task={item} 
            key={item.id} 
            index={index}
            id={item.id} 
          />
        ))}
      </div>
    </div>
  )
}