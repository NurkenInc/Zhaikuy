import { useRef } from 'react';
import { UniqueIdentifier } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities'
import { Task } from '../model/types/task'
import { cn } from '@/shared/lib/utils/classes';
import { useTranslation } from 'react-i18next';

interface TaskListItemPros {
  task: Task
  id: UniqueIdentifier
  parent: string
  index: number
}

const colors = {
  'todo': 'bg-secondary',
  'done': 'bg-primary',
  'in progress': 'bg-warning',
  'in review': 'bg-accent',
  'cancelled': 'bg-accent',
  'backlog': 'bg-neutral'
}

// habitica react-dndkit
export const TaskListItem = (props: TaskListItemPros) => {
  const { 
    task, 
    id, 
    parent,
    index 
  } = props;
  const { t } = useTranslation();
  const pRef = useRef<HTMLDivElement>(null);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({ 
    id,
    data: {
      title: task.title,
      status: task.status,
      id: task.id,
      index,
      parent
    }
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div 
      className="card card-side bg-base-100 shadow-xl my-4 h-max w-full focus:outline-none" 
      ref={setNodeRef} 
      style={style}
      {...listeners} 
      {...attributes}>
      <div className={cn('basis-1/12', colors[task.status])} />
      <div className="card-body w-full basis-11/12">
        <h2 className="card-title">{task.title}</h2>
        <div className='relative text-sm max-h-40 overflow-clip' ref={pRef}>
          <pre className='break-all overflow-hidden w-full'>{task.description}</pre>
          {pRef.current?.clientHeight === 160 && (
            <div className='absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-base-100 to-transparent' />
          )}
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary capitalize">{t('info')}</button>
        </div>
      </div>
    </div>
  )
}