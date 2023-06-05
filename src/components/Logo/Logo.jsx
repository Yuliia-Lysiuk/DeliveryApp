import logo from '../../image/logo.png'
import { LogoText, LogoImg,  LogoBox, Circle } from './Logo.styled'

export default function Logo({text = true, size}) {
  return(
      <LogoBox>
        <Circle $size={size}> <LogoImg src={logo} alt="logo" $size={size}/></Circle>
        {text && <LogoText>Delivery Food</LogoText>}
      </LogoBox>

  )
}
