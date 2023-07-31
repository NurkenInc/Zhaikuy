import { createContext } from 'react'

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  CUPCAKE = 'cupcake',
  BUMBLEBEE = 'bumblebee',
  EMERALD = 'emerald',
  CORPORATE = 'corporate',
  SYNTHWAVE = 'synthwave',
  RETRO = 'retro',
  CYBERPUNK = 'cyberpunk',
  VALENTINE = 'valentine',
  HALLOWEEN = 'halloween',
  GARDEN = 'garden',
  FOREST = 'forest',
  AQUA = 'aqua',
  LOFI = 'lofi',
  PASTEL = 'pastel',
  FANTASY = 'fantasy',
  WIREFRAME = 'wireframe',
  BLACK = 'black',
  LUXURY = 'luxury',
  DRACULA = 'dracula',
  CMYK = 'cmyk',
  AUTUMN = 'autumn',
  BUSINESS = 'business',
  ACID = 'acid',
  LEMODA = 'lemonade',
  NIGHT = 'night',
  COFFEE = 'coffee',
  WINTER = 'winter'
}

interface IThemeContext {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const defaultTheme = localStorage.getItem('theme') as Theme || Theme.LIGHT;

export const ThemeContext = createContext<IThemeContext>({
  theme: defaultTheme,
  setTheme: (_) => {},
  toggleTheme: () => {}
});