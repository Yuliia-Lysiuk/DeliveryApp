import { Outlet } from 'react-router-dom';
import {
  MainNav,
  NavItem,
  NavList,
  NavLinks,
  NavTitle,
  Header,
  Icon,
  Count,
} from './AppBar.styled';
import Logo from '../Logo/Logo';
import { useSelector } from 'react-redux';
import { AiFillShop } from 'react-icons/ai';

export function AppBar() {
  const shopping = useSelector(state => state.shoppingCart.items);

  return (
    <>
      <Header>
        <MainNav>
          <NavList>
            <NavItem>
              <NavLinks to="/DeliveryApp">
                <NavTitle>
                  <Logo text={false} size="small" />
                  Home
                </NavTitle>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shops">
                <NavTitle>
                  Shops
                  <AiFillShop />
                </NavTitle>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/shoppingCart">
                <NavTitle>
                  Shopping Cart
                  <Count>{shopping.length}</Count>
                  <Icon />
                </NavTitle>
              </NavLinks>
            </NavItem>
          </NavList>
        </MainNav>
      </Header>
      <Outlet />
    </>
  );
}
