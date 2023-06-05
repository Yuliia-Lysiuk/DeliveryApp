import styled from 'styled-components';

export const Box = styled.div`
padding: 25px 10px;
`

export const List = styled.ul`
  display: flex;
  padding-top: 40px;
  padding-right: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 590px;
  overflow-y: scroll;
  scroll-behavior: auto;
`
export const ItemShop = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
&:not(:last-child){
  padding-bottom: 15px;
}
  &:hover img, &:hover p{
    color: red;
    cursor: pointer;
    scale: 1.2;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const CafeName = styled.p`
 font-size: 18px;
`

export const Image = styled.img`
border: 2px solid black;
 width: 70px;
  height: 70px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  color: #363b39;
  text-shadow: #f3c4c4 2px 0 2px;

`
