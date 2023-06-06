import { Box, CafeName, Image, ItemShop, List, Title } from './Shops.styled';
import shops from '../../data_base/shops_list'
import { useDispatch } from 'react-redux'
import { chooseShop } from '../../redux/shopSlice';
import { useState } from 'react';

export default function Shops() {
  const [indexShop, setIndexShop] = useState(0)
  const dispatch = useDispatch()

  function changeShop (name, ind) {
    dispatch(chooseShop(name))
    setIndexShop(ind);
  }
  return(
    <Box>
      <Title>Shops</Title>
      <List>
      {shops && shops.map(({name, img}, index)=>(
        <ItemShop $color={index === indexShop} key={name} onClick={()=>changeShop (name, index)}>
          <Image src={img} alt={name}/>
          <CafeName>{name}</CafeName>
        </ItemShop>
      ))}
      </List>
    </Box>
  )
}
