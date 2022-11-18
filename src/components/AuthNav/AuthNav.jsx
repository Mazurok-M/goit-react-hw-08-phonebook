import { NavLink } from 'react-router-dom';
import { NavItem, Wrap } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Wrap>
      <NavItem to="/register">Реєстрація</NavItem>
      <NavItem to="/login">Логін</NavItem>
    </Wrap>
  );
}
