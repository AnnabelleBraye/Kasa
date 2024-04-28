import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const classes = (location: string) => {
    return `navButton ${pathname === location ? 'selected' : ''}`
  }

  return (
    <header>
      <div className="logo-img"></div>
      <nav>
        <Link to='/' className={classes('/')}>Accueil</Link>
        <Link to='/about' className={classes('/about')}>A propos</Link>
      </nav>
    </header>
  )
}

export default Header;