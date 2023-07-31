import { notFoundResponse } from '@/shared/lib/consts/reponse';
import { createTaskController, getTasksController, updateTaskController } from './tasks'
import { loginController, logoutController, registerController } from './auth';

export enum Router {
  TASKS = 'tasks',
  LOGIN = 'login',
  REGISTER = 'register',
  LOGOUT = 'logout',
}

export const routeHandler = () => {
  const get = <T, RT>(route: string, body?: T) => {
    switch (route) {
      case Router.TASKS: 
        return getTasksController<T, RT>(body);
      default:
        return notFoundResponse;
      }
    }

  const post = <T, RT>(route: string, body: T) => {
    switch (route) {
      case Router.TASKS:
        return createTaskController<T, RT>(body)
      case Router.LOGIN:
        return loginController<T, RT>(body)
      case Router.REGISTER:
        return registerController<T, RT>(body)
      case Router.LOGOUT:
        return logoutController<T, RT>()
      default:
        return notFoundResponse;
    }
  }

  const patch = <T, RT>(route: string, body: T) => {
    switch (route) {
      case Router.TASKS:
        return updateTaskController<T, RT>(body)
      default:
        return notFoundResponse;
    }
  }  

  return {
    get,
    post,
    patch,
  }
}