import { Box, Title, Button, Icon, BoxForm } from './ShoppingCart.styled';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import FormDelivery from '../Form/Form';
import Map from 'components/Map/Map';
import DishesList from 'components/DishesList/DishesList';

export default function ShoppingCart() {
  const shopping = useSelector(state => state.shoppingCart.items);
  const total = shopping.reduce((acc, dish) => acc + dish.price * dish.qty, 0);
  const [userForm, setUserForm] = useState(false);
  const [address, setAddress] = useState();

  return (
    <>
      {!userForm ? (
        <Box>
          {shopping.length > 0 ? (
            <>
              <Title>Shopping Cart</Title>
              <DishesList shopping={shopping} counter={true} />
              <Title>Total price: {total} грн</Title>
              <Button type="button" onClick={() => setUserForm(true)}>
                Confirm
              </Button>
            </>
          ) : (
            <>
              <Title>Shopping Cart is empty</Title>
              <Icon />
            </>
          )}
        </Box>
      ) : (
        <BoxForm>
          <Map setAddress={setAddress} />
          <FormDelivery address={address} />
        </BoxForm>
      )}
    </>
  );
}
