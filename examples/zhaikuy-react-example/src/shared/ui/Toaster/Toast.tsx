import { ReactNode, useState } from 'react';
import { useTimeout } from '@/shared/lib/hooks/useTimeout';

export type Variant = 'success' | 'info' | 'warning' | 'error'

export interface ToastProps {
  variant?: Variant
  children: ReactNode
  timeout: number
  close: () => void
}

export const Toast = (props: ToastProps) => {
  const {
    variant = 'info',
    children,
    close,
    timeout
  } = props;
  const [isClosing, setIsClosing] = useState(false);
  useTimeout(close, timeout);

  useTimeout(() => setIsClosing(true), timeout - 400);

  return (
    <div className={`alert alert-${variant} ${isClosing && 'translate-x-96'} transition-all duration-200`}>
      {children}
    </div>
  )
}