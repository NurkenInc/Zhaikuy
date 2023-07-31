import { createContext, ReactNode } from 'react';
import { Variant } from '@/shared/ui/Toaster/Toast';

interface IToastContext {
  open: (content: ReactNode, timeout: number, variant: Variant) => void
}

export const ToastContext = createContext<IToastContext>({
  open: () => {}
});