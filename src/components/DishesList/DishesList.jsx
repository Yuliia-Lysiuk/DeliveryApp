import {
  CafeName,
  Image,
  ItemShop,
  List,
  Price,
  BoxPrice,
} from './DishesList.styled';
import Counter from '../Counter/Counter';

export default function DishesList({ shopping, counter = false }) {
  console.log(shopping);
  return (
    shopping && (
      <List>
        {shopping.map(dish => (
          <ItemShop key={dish.name}>
            <Image src={dish.url} alt={dish.name} />
            <BoxPrice>
              <CafeName>{dish.name}</CafeName>
              <Price>
                {dish.qty} * {dish.price} грн
              </Price>
              {counter && <Counter dish={dish} />}
            </BoxPrice>
          </ItemShop>
        ))}
      </List>
    )
  );
}
