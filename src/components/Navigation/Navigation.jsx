import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const { NavLink } = require('react-router-dom');

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/">Головна</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    </nav>
  );
}
