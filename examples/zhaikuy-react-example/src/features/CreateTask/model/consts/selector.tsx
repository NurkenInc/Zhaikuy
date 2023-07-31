import {
  CheckCircle2,
  CircleDashed,
  Target,
  Circle,
  BarChart,
  BarChart2,
  BarChart3,
  AlertOctagon,
  XCircle,
} from 'lucide-react';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { DropdownItem } from '@/shared/lib/types/nav';
import { TaskPriority, TaskStatus } from '@/entities/Task/model/validators/task';
import { User } from '@/shared/lib/validators/user';

export const statusSelector: 
  (onChange: (value: TaskStatus) => void) => 
  DropdownItem[] = (onChange: (value: TaskStatus) => void) => 
[
  {
    label: 'todo',
    onClick: () => onChange('todo'),
    icon: <Circle className='h-5 w-5 text-gray-500' />
  },
  {
    label: 'in progress',
    onClick: () => onChange('in progress'),
    icon: <CircleDashed className='h-5 w-5 text-yellow-500' />
  },
  {
    label: 'in review',
    onClick: () => onChange('in review'),
    icon: <Target className='h-5 w-5 text-green-700' />
  },
  {
    label: 'done',
    onClick: () => onChange('done'),
    icon: <CheckCircle2 className='h-5 w-5 text-purple-700' />
  },
  {
    label: 'cancelled',
    onClick: () => onChange('cancelled'),
    icon: <XCircle className='h-5 w-5 text-gray-500' />
  },
  {
    label: 'backlog',
    onClick: () => onChange('backlog'),
    icon: <XCircle className='h-5 w-5 text-gray-500' />
  },
]

export const prioritySelector: 
  (onChange: (value: TaskPriority) => void) => 
  DropdownItem[] = (onChange: (value: TaskPriority) => void) => 
[
  {
    label: 'normal',
    onClick: () => onChange('normal'),
    icon: <BarChart className='h-5 w-5 text-gray-500' />
  },
  {
    label: 'low',
    onClick: () => onChange('low'),
    icon: <BarChart2 className='h-5 w-5 text-gray-500' />
  },
  {
    label: 'high',
    onClick: () => onChange('high'),
    icon: <BarChart3 className='h-5 w-5 text-gray-500' />
  },
  {
    label: 'urgent',
    onClick: () => onChange('urgent'),
    icon: <AlertOctagon className='h-5 w-5 text-orange-700' />
  },
]

// todo: refactor
export const assigneeSelector: 
  (onChange: (value: string) => void, users: User[]) => 
  DropdownItem[] = (onChange: (value: string) => void, users: User[]) => {
    return users.map((user) => ({
      label: user?.email,
      icon: <Avatar 
              src={user?.avatarUrl ?? 'https://github.com/shadcn.png'}
              alt={user?.email}
            />,
      onClick: () => onChange(user.email)
    }))
  }
