import { Outlet } from "react-router-dom";
import { MainNav, NavItem, NavList, NavLinks, NavTitle, Header } from "./AppBar.styled";
import Logo from '../Logo/Logo';


export function AppBar() {

    return ( <>
        <Header>
            <MainNav>
                < NavList>
                    <NavItem>
                        <NavLinks to="/DeliveryApp">
                            <NavTitle ><Logo text={false} size="small"/></NavTitle>
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/shops">
                            <NavTitle>Shops</NavTitle>
                        </NavLinks>
                    </NavItem>
                  <NavItem>
                    <NavLinks to="/shoppingCart">
                      <NavTitle>Shopping Cart</NavTitle>
                    </NavLinks>
                  </NavItem>
                </ NavList>
              </MainNav>
        </Header>
         <Outlet />
    </>)
}
