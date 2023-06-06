import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  background-color: #267486;
  box-shadow: inset 0px -8px 10px 0px #97bdb6;
  position: fixed;
min-width: 100vw;
  min-height: 11vh;
`

export const MainNav = styled.nav`
@media only screen and (max-width: 480px)
{
   padding: 0 5px;
}
max-width: 900px;
margin: auto;
  display:flex;
  justify-content: space-between;
  /* padding: 15px 20px; */
align-items:center;
  height:10vh;
`

export const NavList = styled.ul`
  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
  font-size: 30px;
  color: #ee5252;
  display: flex;
`

export const NavItem = styled.li`
@media  (max-width: 480px)
{
   &:not(:last-child) {
      margin-right:5px;
  }
}
@media  (min-width: 481px)
{
  &:not(:last-child) {
      margin-right:50px;
  }
}


`
export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;

  &.active {
    color: #761515;
    font-weight: bold;
  }
`

export const NavTitle = styled.span`
 display: flex;
 margin-left: 3px;

`

