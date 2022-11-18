import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled(NavLink)`
  color: #ffffff;

  &.active {
    color: #b9a5ce;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #b9a5ce;
  }
`;
