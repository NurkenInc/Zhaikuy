import { useTheme } from '@/shared/lib/hooks/useTheme'
import { Moon, SunMoon } from 'lucide-react';
import { Theme } from '@/app/providers/ThemeProvider';

export const ThemeToggler = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <button className="btn btn-ghost btn-circle" onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <Moon  />
        ) : (
        <SunMoon />
      )}
    </button>
  )
}