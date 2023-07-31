import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { TasksPage } from '@/pages/TasksPage';

import App from '@/app/App'
import { AuthPage } from '@/pages/AuthPage';
import { LogoutPage } from '@/pages/LogoutPage';

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
      {
        path: '/logout',
        element: <LogoutPage />
      },
      {
        path: '/tasks',
        element: <TasksPage />
      },
    ]
  }
])