import { useState } from 'react'
import { ThemeContext } from './contexts/theme.context'
import { ETHEME } from './enums/theme.enum'
import { Footer, Header } from './pages'

const App = () => {
  const [theme, setTheme] = useState<ETHEME>(ETHEME.LIGHT)
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header></Header>
      <Footer></Footer>
    </ThemeContext.Provider>
  )
}

export default App