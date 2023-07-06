import {
  Box,
  CafeName,
  Image,
  ItemShop,
  List,
  Price,
  Weight,
  Title,
  BoxFood,
  BoxPrice,
} from './Menu.styled';
import menu from '../../data_base/menu_list';
import { useDispatch, useSelector } from 'react-redux';
import { increment, remove } from '../../redux/shoppingCartSlice';
import { toast } from 'react-toastify';
import Button from 'components/Button/Button';

export default function Menu() {
  const shop = useSelector(state => state.shop.value);
  const shopping = useSelector(state => state.shoppingCart.items);
  const dispatch = useDispatch();

  function incrementFood(dish) {
    dispatch(increment(dish));
    toast.success('The product has been added to the cart', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  function decrementFood(dish) {
    dispatch(remove(dish));
    toast.success('The product has been remove from the cart', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  }

  return (
    <Box>
      <Title>Menu</Title>
      <List>
        {menu &&
          menu[shop].map(dish => (
            <ItemShop key={dish.name}>
              <Image src={dish.url} alt={dish.name} />
              <BoxFood>
                <CafeName>{dish.name}</CafeName>
                <BoxPrice>
                  <Price>{dish.price} грн</Price>
                  <Weight>{dish.weight} г</Weight>
                </BoxPrice>
              </BoxFood>
              {shopping && !shopping.some(obj => obj.name === dish.name) ? (
                <Button
                  onClick={() => {
                    incrementFood(dish);
                  }}
                  text="Add to cart"
                />
              ) : (
                <Button
                  onClick={() => {
                    decrementFood(dish);
                  }}
                  text="Remove from cart"
                />
              )}
            </ItemShop>
          ))}
      </List>
    </Box>
  );
}
