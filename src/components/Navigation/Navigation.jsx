import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Nav, NavItem } from './Navigation.styled';

const { NavLink, Link } = require('react-router-dom');

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      {isLoggedIn && <NavItem to="/contacts">Contacts</NavItem>}
    </Nav>
    // <nav>
    //   <NavLink to="/">Головна</NavLink>
    //   {isLoggedIn && <NavLink to="/contacts">Контакти</NavLink>}
    // </nav>
  );
}
