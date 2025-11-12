import { Navigate, Outlet, useLocation } from 'react-router-dom'

function ProtectedRoute({ tokenKey = 'token', redirectTo = '/' }) {
  const location = useLocation()
  const hasToken =
    typeof window !== 'undefined' ? Boolean(window.localStorage.getItem(tokenKey)) : false

  if (!hasToken) {
    return (
      <Navigate
        to={redirectTo}
        replace
        state={{
          from: location.pathname,
          reason: 'missing_token',
        }}
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute

