import { Box, CafeName, Image, ItemShop, List, Title } from './Shops.styled';
import shops from '../../data_base/shops_list';
import { useDispatch, useSelector } from 'react-redux';
import { chooseShop } from '../../redux/shopSlice';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { reset } from 'redux/shoppingCartSlice';

export default function Shops() {
  const [indexShop, setIndexShop] = useState(0);
  const [open, setOpen] = useState(false);
  const [activeShop, setActiveShop] = useState(null);
  const dispatch = useDispatch();
  const shopping = useSelector(state => state.shoppingCart.items);
  const shop = useSelector(state => state.shop.value);

  const handleClose = () => {
    setOpen(false);
  };

  function changeShop(name, ind) {
    if (shopping.length > 0 && name !== shop) {
      setOpen(true);
      setActiveShop({ name, ind });
    } else {
      dispatch(chooseShop(name));
      setIndexShop(ind);
    }
  }

  function removeShoppingCart() {
    dispatch(chooseShop(activeShop.name));
    setIndexShop(activeShop.ind);
    dispatch(reset());
    handleClose();
  }

  return (
    <Box>
      <Title>Shops</Title>
      <List>
        {shops &&
          shops.map(({ name, img }, index) => (
            <ItemShop
              $color={index === indexShop}
              key={name}
              onClick={() => changeShop(name, index)}
            >
              <Image src={img} alt={name} />
              <CafeName>{name}</CafeName>
            </ItemShop>
          ))}
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Do you want to remove products from shopping cart?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you change shop all products in shopping cart will be remove. Are
            you sure that you want to shange shop?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={removeShoppingCart} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
