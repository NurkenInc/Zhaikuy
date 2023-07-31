import { ReactNode } from 'react'
import { useSession } from '@/shared/lib/hooks/useSession';
import { PageUnavailaible } from '@/pages/shared/PageUnavailaible';
import { Navigate } from 'react-router-dom';

interface RouteGuardProps {
  children: ReactNode
  unauthenticatedOnly?: boolean
  title?: string
  description?: string
  action?: ReactNode
  to?: string
}

export const RouteGuard = (props: RouteGuardProps) => {
  const {
    children,
    unauthenticatedOnly,
    description,
    title,
    action,
    to
  } = props;
  const { status } = useSession();

  // if route only availaible to unauthenticated users
  // such as auth route but user authenticated 
  // or only availaible to unauthenticated users but
  // user authenticated redirect them
  const forbidden = 
    unauthenticatedOnly && 
    status === 'authenticated'
    || !unauthenticatedOnly &&
    status === 'unauthenticated';

  if (forbidden && to) return <Navigate to={to} />

  return forbidden ? 
    <PageUnavailaible 
      action={action} 
      title={title} 
      description={description} 
    />
    : children
}