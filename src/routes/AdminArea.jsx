import { Navigate, Outlet } from 'react-router-dom'

const AdminArea = () => {
  if (window.localStorage.getItem('tokenA')) 
  return <Outlet />
  
  return <Navigate to='/' />
}

export default AdminArea