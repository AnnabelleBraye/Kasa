import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <p>Oups! La page que <br className="break-text" />
      vous demandez n'existe pas.</p>
      <Link className='error-container__link' to='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}

export default Error;