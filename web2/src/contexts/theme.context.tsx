import { createContext } from 'react'
import { ETHEME } from '../enums/theme.enum'

export const ThemeContext = createContext({
  theme: ETHEME.LIGHT, 
  setTheme: (theme: ETHEME) => {}, 
})