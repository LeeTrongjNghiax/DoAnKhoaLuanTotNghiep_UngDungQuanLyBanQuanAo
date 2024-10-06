import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
import { ETHEME } from "../../enums/theme.enum";
import './Header.css';

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleThemeChange = () => {
    setTheme(theme === ETHEME.LIGHT ? ETHEME.DARK : ETHEME.LIGHT)
    document.body.setAttribute('data-theme', theme + '');
  }

  return (
    <header>
      <button onClick={handleThemeChange}>Change theme</button>
    </header>
  )
}

export default Header