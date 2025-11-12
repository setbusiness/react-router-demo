import { useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const MOCK_USERS = {
  1: {
    id: 1,
    name: 'Camille Martin',
    role: 'Product Designer',
    bio: 'Conçoit des expériences utilisateur intuitives et modernes.',
  },
  42: {
    id: 42,
    name: 'Jean Dupont',
    role: 'Développeur React',
    bio: 'Passionné par les architectures modulaires, React Router et Vite.',
  },
}

function UserProfile() {
  const { id } = useParams()
  const navigate = useNavigate()

  const user = useMemo(() => MOCK_USERS[id], [id])

  if (!user) {
    return (
      <section className="content-card">
        <h1>Utilisateur introuvable</h1>
        <p>L&apos;identifiant {id} ne correspond à aucun utilisateur de démonstration.</p>
        <div className="user-actions">
          <button type="button" className="back-home-link" onClick={() => navigate(-1)}>
            Retour
          </button>
          <Link to="/users/1" className="sample-link">
            Charger l&apos;utilisateur #1
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="content-card user-profile">
      <header className="user-header">
        <div className="user-avatar" aria-hidden="true">
          {user.name
            .split(' ')
            .map((part) => part.charAt(0))
            .join('')
            .slice(0, 2)
            .toUpperCase()}
        </div>
        <div>
          <h1>{user.name}</h1>
          <p className="user-role">{user.role}</p>
        </div>
      </header>
      <p>{user.bio}</p>
      <dl className="user-meta">
        <div>
          <dt>Identifiant</dt>
          <dd>#{user.id}</dd>
        </div>
        <div>
          <dt>Route</dt>
          <dd>
            <code>/users/{user.id}</code>
          </dd>
        </div>
      </dl>
      <footer className="user-actions">
        <Link to="/" className="back-home-link">
          Retour à l&apos;accueil
        </Link>
        <div className="user-switcher">
          <span>Essayer :</span>
          <Link to="/users/1" className="sample-link">
            #1
          </Link>
          <Link to="/users/42" className="sample-link">
            #42
          </Link>
        </div>
      </footer>
    </article>
  )
}

export default UserProfile

