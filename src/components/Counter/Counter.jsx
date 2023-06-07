
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../redux/shoppingCartSlice';
import { Button } from './Counter.styled';

export default function Counter({dish}) {
  const dispatch = useDispatch();
  function incrementFood(){
    dispatch(increment(dish));
  }

  function decrementFood(){
    dispatch(decrement(dish));
  }

  return (
    <div>
    <Button type='button' onClick={() => decrementFood()} disabled={dish.qty < 1}>
      -
    </Button>
    <Button type='button' onClick={() => incrementFood()} disabled={dish.qty > 9}>
      +
    </Button>
  </div>
)
}
