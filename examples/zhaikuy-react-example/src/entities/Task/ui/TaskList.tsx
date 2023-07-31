import { useState } from 'react'
import { DndContext, DragEndEvent, UniqueIdentifier, rectIntersection } from '@dnd-kit/core'
import { cn } from '@/shared/lib/utils/classes'
import { Task } from '../model/types/task'
import { TaskStatus } from '../model/validators/task'
import { TaskListColumn } from './TaskListColumn'
// import { DragEndEvent } from '@/shared/lib/types/dnd'
import { DndTask } from '../model/types/dnd'
import { TasksSchema, useTasks } from '../model/slices/tasksSlice'

interface TaskListProps {
  tasks: Task[] | null
}

// make nice app, make lib, man up, no fp-u!
export const TaskList = (props: TaskListProps) => {
  const { tasks } = props;
  const updateTask = useTasks<TasksSchema['updateTask']>(state => state.updateTask)

  if (!tasks) return <div>You do not have any tasks</div>

  const initialData: Record<Exclude<TaskStatus, 'cancelled' | 'backlog'>, Task[]> = {
    'todo': [],
    'in progress': [],
    'in review': [],
    'done': []
  }

  const groupedData = tasks.reduce((acc, item) => {
    if (item.status === 'backlog' || item.status === 'cancelled' || !item.status) return acc;

    acc[item.status].push(item);
    return acc;
  }, initialData);

  const filteredColumns = Object.entries(groupedData);

  const handleDragEnd = (e: DragEndEvent) => {
    const container = e.over?.id as TaskStatus;
    const data = e.active.data.current;

    if (container === data?.status) return;

    updateTask({ id: data?.id ,status: container })
  }

  return (
    <DndContext onDragEnd={handleDragEnd} collisionDetection={rectIntersection}>
      <div className="flex lg:flex-row flex-col gap-4 px-4">
        {filteredColumns.map(([columnKey, columnData], columnIndex) => {
          const id = Object.keys(initialData).find(key => key === columnKey);
          return (
            <TaskListColumn 
              items={columnData}
              key={columnIndex}
              id={id!}
            />
          )
        })}
      </div>
    </DndContext>
  )
}