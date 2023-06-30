import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import {ThemeContext} from "./utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const themes=useContext(ThemeContext)
  return (
    <nav className={"bar "+ themes.theme}>
      <div>
        <Link to='/'>Home</Link>
        <Link to='Contact'>Contacto</Link>
        <Link to='Favs'>Favoritos</Link>
      </div>
      
      
      <button onClick={themes.toggleTheme} className={themes.theme}>Change theme</button>
    </nav>
  )
}

export default Navbar