import { Navigate, Outlet, useLocation } from 'react-router'

export default function PrivateRoute(){
  const location = useLocation()
  const authed = localStorage.getItem('auth') === 'true'
  if(!authed){
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return <Outlet />
}
