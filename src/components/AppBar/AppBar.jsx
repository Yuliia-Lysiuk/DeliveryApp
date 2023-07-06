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
import { useDispatch, useSelector } from 'react-redux';
import { AiFillShop } from 'react-icons/ai';
import FormControlLabel from '@mui/material/FormControlLabel';
import { MaterialUISwitch } from './SwitchTheme';
import { changeTheme } from 'redux/themeSlice';
import { BsCardChecklist } from 'react-icons/bs';

export function AppBar() {
  const shopping = useSelector(state => state.shoppingCart.items);
  const theme = useSelector(state => state.theme.value);
  const dispatch = useDispatch();

  return (
    <>
      <Header $theme={theme}>
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
            <NavItem>
              <NavLinks to="/history">
                <NavTitle>
                  History
                  <BsCardChecklist />
                </NavTitle>
              </NavLinks>
            </NavItem>
          </NavList>
        </MainNav>
        <FormControlLabel
          control={
            <MaterialUISwitch
              sx={{ m: 1 }}
              defaultChecked
              onChange={() => dispatch(changeTheme())}
            />
          }
        />
      </Header>
      <Outlet />
    </>
  );
}
