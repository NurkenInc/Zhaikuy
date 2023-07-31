import { createStore } from '@/lib'
import { $api } from '@/shared/api'
import { TaskRequest, Task } from '../types/task'
import { TaskStatus } from '../validators/task'

export interface FiltersType {
  search: string | null
  status: TaskStatus | null
}

export interface TasksSchema {
  data: Task[] | null

  // filters
  filters: FiltersType

  isLoading: boolean
  isError: boolean
  addTask: (task: TaskRequest) => void
  updateTask: (task: Partial<Task>) => void
  getTasks: (filters: FiltersType) => void
  setFilters: (filters: FiltersType) => void
}
// smth wrong with lib ctrl c ctrl v code from example lib to orig
// cant pass props
// make async functions possble or some lib function like thunks in redux and manage in them isLoading, error states
export const useTasks = createStore<TasksSchema>((set) => ({
  setFilters: (filters: FiltersType) => {
    set((state) => {
      return {
        ...state,
        filters,
      }
    })
  },
  addTask: async (task: TaskRequest) => {
    const { data, isError, error } = await $api.post<TaskRequest, Task[]>('/tasks', task);

    set((state) => {
      return {
        ...state,
        data: data,
        isError: isError,
        error: error
      }
    })
  },
  updateTask: async (task: Partial<Task>) => {
    const { data, isError, error } = await $api.patch<Partial<Task>, Task[]>('/tasks', task);

    set((state) => {
      return {
        ...state,
        data: data,
        isError: isError,
        error: error
      }
    })
  },
  getTasks: async (filters: FiltersType) => {
    const response = await $api.get<Task[], FiltersType>('/tasks', filters);
    
    set((state) => {
      return {
        ...state,
        data: response.data,
        isError: response.isError,
      };
    })
  }
}))
