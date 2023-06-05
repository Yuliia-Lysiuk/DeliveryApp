import styled from 'styled-components';
export const LogoText = styled.p`
  @media only screen and (max-width: 480px)
  {
    font-size: 20px;
  }
  font-size: 76px;
  color: #be7756;
  text-shadow: #645e5e 4px 1px 2px, #161616 6px 3px 2px ;

`
export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`

export const LogoImg = styled.img`
  @media only screen and (max-width: 480px)
  {
    height: 10px;
    width: 10px;
  }
  height: ${props => props.$size? "50px" : "70px"};
  width: ${props => props.$size? "50px" : "70px"};

`
export const Circle = styled.div`
  @media only screen and (max-width: 480px)
  {
    height: 20px;
    width: 20px;
  }
  height: ${props => props.$size? "50px" : "80px"};
  width: ${props => props.$size? "50px" : "80px"};
  background-color:#be7756;
  box-shadow: 3px 0px 1px 1px #504b49, 6px 3px 2px 2px #161616;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`
