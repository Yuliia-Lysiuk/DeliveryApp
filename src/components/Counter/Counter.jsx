import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/shoppingCartSlice';
import { Button } from './Counter.styled';

export default function Counter({ dish }) {
  const dispatch = useDispatch();

  return (
    <div>
      <Button
        type="button"
        onClick={() => dispatch(decrement(dish))}
        disabled={dish.qty < 1}
      >
        -
      </Button>
      <Button
        type="button"
        onClick={() => dispatch(increment(dish))}
        disabled={dish.qty > 9}
      >
        +
      </Button>
    </div>
  );
}
