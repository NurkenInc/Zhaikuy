import { ReactNode } from 'react';
import { AuthProvider } from '../../AuthProvider';
import { ToastProvider } from '../../ToastProvider';
import { ThemeProvider } from '../../ThemeProvider';

interface ProvidersProps {
  children: ReactNode
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ToastProvider>
      <AuthProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </AuthProvider>
    </ToastProvider>
  )
}