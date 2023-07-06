import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

export const Header = styled.header`
  background-color: ${props => (props.$theme ? '#267486' : '#12a8ff')};
  box-shadow: inset 0px -8px 10px 0px #c8d6cb;
  min-height: 8vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MainNav = styled.nav``;

export const NavList = styled.ul`
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
  font-size: 30px;
  color: #074110;
  text-shadow: #91ff00 1px 0 4px;
  display: flex;
`;

export const NavItem = styled.li`
  @media (max-width: 480px) {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
  @media (min-width: 481px) {
    &:not(:last-child) {
      margin-right: 50px;
    }
  }
`;
export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;

  &:hover {
    color: #ce6e14;
    scale: 1.1;
  }

  &.active {
    color: #ce6e14;
    font-weight: bold;
  }
`;

export const NavTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 3px;
  position: relative;
`;

export const Icon = styled(GiShoppingCart)`
  width: 45px;
  height: 45px;

  display: block;
`;

export const Count = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #026677;
  box-shadow: 0px 0px 10px 0px #97bdb6;
`;
