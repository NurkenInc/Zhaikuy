import { Task } from '@/entities/Task/model/types/task';
import { defaultResponse } from '@/shared/lib/consts/reponse';
import { Response } from '@/shared/lib/types/network';
import { HttpStatusCode } from '@/shared/lib/types/network';
import { errorHandler } from '@/shared/lib/utils/error';
import { v4 } from 'uuid';

const baseTasksUrl = 'tasks';

export const getTasksController = <T, RT>(body: any): Response<RT> => {
  try {
    const data = JSON.parse(localStorage.getItem(baseTasksUrl)!) as Task[];

    if (!data) return defaultResponse

    const status = body?.status ?? '';
    const search = body?.search ?? '';

    const result = data.filter((task) => 
      task.status?.includes(status) &&
      task.title.includes(search)
    )

    return { 
      ...defaultResponse, 
      data: result as RT
    };
  } catch (error) {
    return errorHandler(error);
  }
}

export const createTaskController = <T, RT>(body: T): Response<RT> => {
  try {
    const result = localStorage.getItem(baseTasksUrl);
    
    let data: T | T[] = [];

    if (result) {
      data = JSON.parse(result);
    }

    const newTask = { ...body, id: v4() }

    const newData: T[] = Array.isArray(data) ? [...data, newTask] : [newTask];

    localStorage.setItem(baseTasksUrl, JSON.stringify(newData));
    
    return {
      data: newData as RT,
      isError: false,
      status: HttpStatusCode.OK,
      error: null
    };
  } catch (error) {
    return errorHandler(error);
  }
}

export const updateTaskController = <T, RT>(body: any): Response<RT> => {
  try {
    const result = localStorage.getItem(baseTasksUrl);
    
    const data = JSON.parse(result!) as Task[];

    const existedTask = data.find(task => task.id === body.id)
    const updatedData = data.filter(task => task.id !== body.id)

    const newTask = { ...existedTask, ...body }

    const newData: T[] = Array.isArray(data) ? [...updatedData, newTask] : [newTask];

    localStorage.setItem(baseTasksUrl, JSON.stringify(newData));
    
    return {
      data: newData as RT,
      isError: false,
      status: HttpStatusCode.OK,
      error: null
    };
  } catch (error) {
    return errorHandler(error);
  }
}