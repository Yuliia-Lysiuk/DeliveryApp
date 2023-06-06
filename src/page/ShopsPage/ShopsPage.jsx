
import { Box, ShopsBox, MenuBox} from './ShopsPage.styled'
import Shops from '../../components/Shops/Shops';
import Menu from '../../components/Menu/Menu';

export default function ShopsPage() {
  return(
<Box>
 <ShopsBox><Shops/></ShopsBox>
  <MenuBox><Menu/></MenuBox>
</Box>
  )
}
