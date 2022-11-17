import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export default function PublicRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to="/contacts" replace />;
  }
  return <Outlet />;
}
