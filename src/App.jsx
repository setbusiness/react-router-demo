import { Route, Routes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import AboutLayout from '@/pages/About.jsx'
import AboutOverview from '@/pages/about/AboutOverview.jsx'
import Team from '@/pages/about/Team.jsx'
import UserProfile from '@/pages/User.jsx'
import NotFound from '@/pages/NotFound.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route index element={<AboutOverview />} />
          <Route path="team" element={<Team />} />
        </Route>
        <Route path="users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
