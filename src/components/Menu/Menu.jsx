import { Box, CafeName, Image, ItemShop, List, Price, Weight, Title, BoxFood, BoxPrice, Button } from './Menu.styled';
import menu from '../../data_base/menu_list'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../redux/shoppingCartSlice';
import { toast } from 'react-toastify';

export default function Menu() {
  const shop = useSelector((state) => state.shop.value);
  const dispatch = useDispatch();

  function incrementFood(dish, index){
    dispatch(increment(dish));
  }


  return(
    <Box>
      <Title>Menu</Title>
      <List>
      {menu && menu[shop].map((dish, index)=>(
        <ItemShop key={dish.name}>
          <Image src={dish.url} alt={dish.name}/>
          <BoxFood>
          <CafeName>{dish.name}</CafeName>
            <BoxPrice>
          <Price>{dish.price} грн</Price>
          <Weight>{dish.weight} г</Weight>
          </BoxPrice>
            </BoxFood>
          <Button type='button' onClick={()=> {
            incrementFood(dish, index);
            toast.success('The product has been added to the cart', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }}>Add to cart</Button>
        </ItemShop>
      ))}
      </List>
    </Box>
  )
}
