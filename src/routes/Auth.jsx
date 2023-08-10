import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  if (window.localStorage.getItem('token')) 
    return <Navigate to= '/' />
  
    return <Outlet />
};

export default Auth;