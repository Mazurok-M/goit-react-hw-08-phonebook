import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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

export const Wrap = styled.div`
  display: flex;
  gap: 30px;
`;
