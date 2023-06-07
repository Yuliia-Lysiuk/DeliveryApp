import { Box, CafeName, Image, ItemShop, List, Price, Title,  BoxPrice} from './ShoppingCart.styled';

import { useSelector } from 'react-redux';
import Counter from '../Counter/Counter';


export default function ShoppingCart() {
  const shopping = useSelector((state) => state.shoppingCart.items);
  const total = shopping.reduce((acc, dish) => acc + dish.price*dish.qty, 0);


  return(
    <Box>
      {shopping.length > 0 ? <>
        <Title>Shopping Cart</Title>
      <List>
      { shopping.map((dish)=>(
        <ItemShop key={dish.name}>
          <Image src={dish.url} alt={dish.name}/>
          <BoxPrice>
            <CafeName>{dish.name}</CafeName>
            <Price>{dish.qty} * {dish.price} грн</Price>
            <Counter dish={dish}/>
            </BoxPrice>
        </ItemShop>
      ))}
      </List>
      <Title>Total price: {total} грн</Title>
      </> : <Title>Shopping Cart is empty</Title>}
    </Box>
  )
}
