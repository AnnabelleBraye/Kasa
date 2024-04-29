import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const classes = (location: string) => {
    return `navButton ${pathname === location ? 'selected' : ''}`
  }

  return (
    <header>
      <img src='./src/assets/svg/logo_header.svg' alt="Logo Header" />
      <nav>
        <Link to='/' className={classes('/')}>Accueil</Link>
        <Link to='/about' className={classes('/about')}>A propos</Link>
      </nav>
    </header>
  )
}

export default Header;