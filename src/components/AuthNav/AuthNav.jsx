import { NavItem, Wrap } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Wrap>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">Login</NavItem>
    </Wrap>
  );
}
