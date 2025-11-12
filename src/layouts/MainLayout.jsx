import { NavLink, Outlet } from 'react-router-dom'
import '@/App.css'

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            À propos
          </NavLink>
          <NavLink
            to="/users/1"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            Utilisateurs
          </NavLink>
        </nav>
      </header>
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

