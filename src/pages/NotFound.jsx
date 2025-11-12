import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="content-card">
      <h1>Page introuvable</h1>
      <p>
        La page que vous recherchez n&apos;existe pas. Utilisez le menu ou revenez à
        l&apos;accueil pour continuer votre navigation.
      </p>
      <Link to="/" className="back-home-link">
        Retour à l&apos;accueil
      </Link>
    </section>
  )
}

export default NotFound

