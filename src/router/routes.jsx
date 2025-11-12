import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout.jsx'
import Home from '@/pages/Home.jsx'
import AboutLayout from '@/pages/About.jsx'
import AboutOverview from '@/pages/about/AboutOverview.jsx'
import ProtectedRoute from '@/routes/ProtectedRoute.jsx'
import NotFound from '@/pages/NotFound.jsx'

const Team = lazy(() => import('@/pages/about/Team.jsx'))
const UserProfile = lazy(() => import('@/pages/User.jsx'))
const ProtectedPage = lazy(() => import('@/pages/Protected.jsx'))

export const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <AboutLayout />,
        children: [
          {
            index: true,
            element: <AboutOverview />,
          },
          {
            path: 'team',
            element: <Team />,
          },
        ],
      },
      {
        path: 'users/:id',
        element: <UserProfile />,
      },
      {
        path: 'protected',
        element: <ProtectedRoute />,
        children: [
          {
            index: true,
            element: <ProtectedPage />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes)

