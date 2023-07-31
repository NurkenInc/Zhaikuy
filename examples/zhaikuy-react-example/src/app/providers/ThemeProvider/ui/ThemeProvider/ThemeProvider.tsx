import { ReactNode, useState } from 'react'
import { defaultTheme, Theme, ThemeContext } from '../../config/context'

interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: Theme
}

export const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    initialTheme
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  const onChange = (theme: Theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  const toggleTheme = () => {
    switch (theme) {
      case Theme.LIGHT:
        return onChange(Theme.DARK)
      case Theme.DARK:
        return onChange(Theme.LIGHT)
      default:
        return onChange(Theme.LIGHT)
    }
  }

  return (
    <ThemeContext.Provider value={{
      theme: theme,
      setTheme: onChange,
      toggleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
}