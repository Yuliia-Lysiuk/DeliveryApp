
import { LogoText, LogoImg,  LogoBox, Circle } from './Logo.styled'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/shoppingCartSlice';

export default function Counter({dish}) {
  const shopping = useSelector((state) => state.shoppingCart.items);
  const dispatch = useDispatch();
  function incrementFood(){
    dispatch(increment(dish));
  }

  function decrementFood(){
    dispatch(decrement(dish));
  }

  return (
    <div>
    <button type='button' onClick={() => decrementFood()} disabled={dish.qty < 1}>
      -
    </button>
    <span>{ dish.qty}</span>
    <button type='button' onClick={() => incrementFood()} disabled={dish.qty > 9}>
      +
    </button>
  </div>
)
}
