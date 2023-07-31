import { useState, useMemo, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { v4 as uuidv4 } from 'uuid';
import { Variant, Toast } from '@/shared/ui/Toaster/Toast';
import { ToastContext } from '../../config/context';

interface IToast {
  content: ReactNode
  id: string
  timeout: number
  variant?: Variant
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider = (props: ToastProviderProps) => {
  const { children } = props;

  const [toasts, setToasts] = useState<IToast[]>([])

  const open = (content: ReactNode, timeout: number = 2000, variant: Variant) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: uuidv4(), content, timeout, variant }
    ])
  }

  const close = (id: string) => {
    setToasts((currentToasts) => 
      currentToasts.filter(toast => toast.id !== id)
    )
  }
  
  const contextValue = useMemo(() => ({ open }), [])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}

      {createPortal(
        <div className='toast toast-top toast-end'>
          {toasts.map((toast) => (
            <Toast key={toast.id} close={() => close(toast.id)} timeout={toast.timeout} variant={toast.variant}>
              {toast.content}
            </Toast>
          ))}
        </div>,
        document.body
      )}
    </ToastContext.Provider>
  )
}