import { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

function Home() {
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name')

  useEffect(() => {
    if (!name) {
      setSearchParams({ name: 'John Doe' }, { replace: true })
    }
  }, [name, setSearchParams])

  return (
    <section className="content-card">
      <h1>Bienvenue sur Demo {name ?? ''}</h1>
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
