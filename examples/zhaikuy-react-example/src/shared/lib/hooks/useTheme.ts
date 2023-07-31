import { useContext } from 'react';
import { ThemeContext } from '@/app/providers/ThemeProvider';

export function useTheme() {
  return useContext(ThemeContext);
}