import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

function Home() {
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const name = searchParams.get('name')

  const [hasToken, setHasToken] = useState(() => {
    if (typeof window === 'undefined') return false
    return Boolean(window.localStorage.getItem('token'))
  })

  const [authMessage, setAuthMessage] = useState(
    () => location.state?.reason === 'missing_token',
  )

  useEffect(() => {
    if (!name) {
      setSearchParams({ name: 'John Doe' }, { replace: true })
    }
  }, [name, setSearchParams])

  useEffect(() => {
    if (location.state?.reason === 'missing_token') {
      setAuthMessage(true)
      if (typeof window !== 'undefined') {
        window.history.replaceState(null, '', location.pathname + location.search)
      }
    } else {
      setAuthMessage(false)
    }
  }, [location])

  useEffect(() => {
    if (hasToken && authMessage) {
      setAuthMessage(false)
    }
  }, [authMessage, hasToken])

  const handleCreateToken = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('token', 'demo-token')
      setHasToken(true)
    }
  }, [])

  const handleRemoveToken = useCallback(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('token')
      setHasToken(false)
    }
  }, [])

  const protectedStatus = useMemo(
    () => (hasToken ? 'Un token est stocké.' : 'Aucun token détecté.'),
    [hasToken],
  )

  return (
    <section className="content-card">
      <h1>Bienvenue sur Demo {name ?? ''}</h1>
      {authMessage ? (
        <div className="banner warning">
          Vous devez être authentifié pour accéder à la page protégée.
        </div>
      ) : null}
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
          <li>
            <Link to="/protected" className="sample-link emphasis">
              Accéder à la page protégée
            </Link>
          </li>
        </ul>
      </div>
      <div className="auth-demo">
        <h2>Démo d&apos;authentification</h2>
        <p>{protectedStatus}</p>
        <div className="auth-actions">
          <button type="button" className="primary-button" onClick={handleCreateToken}>
            Générer un token
          </button>
          <button
            type="button"
            className="secondary-button"
            onClick={handleRemoveToken}
            disabled={!hasToken}
          >
            Supprimer le token
          </button>
        </div>
      </div>
    </section>
  )
}

export default Home
