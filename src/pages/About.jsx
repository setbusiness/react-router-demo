import { NavLink, Outlet } from 'react-router-dom'

function AboutLayout() {
  return (
    <section className="content-card about-layout">
      <header className="about-header">
        <h1>À propos de l&apos;application</h1>
        <p>
          Cette section démontre l&apos;utilisation de routes imbriquées avec la balise
          `Outlet`. Sélectionnez un onglet pour afficher le contenu correspondant.
        </p>
        <nav className="about-nav">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? 'nested-link active' : 'nested-link')}
          >
            Présentation
          </NavLink>
          <NavLink
            to="team"
            className={({ isActive }) => (isActive ? 'nested-link active' : 'nested-link')}
          >
            Équipe
          </NavLink>
        </nav>
      </header>
      <div className="about-content">
        <Outlet />
      </div>
    </section>
  )
}

export default AboutLayout

