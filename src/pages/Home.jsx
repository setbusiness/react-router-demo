import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="content-card">
      <h1>Bienvenue sur Demo</h1>
      <p>
        Cette application React utilise Vite et intègre React Router pour gérer la
        navigation entre plusieurs pages.
      </p>
      <p>
        Utilisez le menu supérieur pour découvrir l&apos;exemple de page À propos ou
        ajoutez vos propres routes pour construire votre application.
      </p>
      <div className="quick-links">
        <h2>Exemples rapides</h2>
        <ul className="sample-links">
          <li>
            <Link to="/users/1" className="sample-link">
              Voir le profil utilisateur #1
            </Link>
          </li>
          <li>
            <Link to="/users/42" className="sample-link">
              Voir le profil utilisateur #42
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home
