import { Link, Location, useLocation } from "react-router-dom";

const Header = () => {
  const location: Location = useLocation();
  const pathname: string = location.pathname;

  const classes = (location: string): string => {
    return `navButton ${pathname === location ? 'selected' : ''}`
  }

  return (
    <header>
      <Link to='/'>
        <img src='/src/assets/svg/logo_header.svg' alt="Logo Header" />
      </Link>
      <nav>
        <Link to='/' className={classes('/')}>Accueil</Link>
        <Link to='/about' className={classes('/about')}>A propos</Link>
      </nav>
    </header>
  )
}

export default Header;