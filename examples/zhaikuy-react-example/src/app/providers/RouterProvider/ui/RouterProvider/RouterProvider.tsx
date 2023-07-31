import { Suspense } from 'react'
import { RouterProvider as ExternalRouterProvider } from 'react-router-dom'
import { routerConfig } from '../../config/config'
import { Loader } from '@/shared/ui/Loader/Loader'

export const RouterProvider = () => {
  return (
    <Suspense fallback={<Loader />}>
      <ExternalRouterProvider router={routerConfig} />
    </Suspense>
  )
}

