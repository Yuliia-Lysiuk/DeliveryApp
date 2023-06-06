import styled from 'styled-components';

export const Box = styled.div`
padding: 10px ;
  height: 590px;
  overflow-y: scroll;
  scroll-behavior: auto;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin-left: -15px;
  margin-top: -15px;
  padding: 10px ;
`
export const ItemShop = styled.li`
  min-width: 1000px;
  background: rgba(129, 129, 129, 0.52);
display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px -8px 10px 0px #97bdb6;
  padding: 15px 10px;
  &:not(:last-child){
    margin-bottom: 20px;
  };
  //&:hover {
  //  box-shadow: inset 0px -8px 10px 0px #97bdb6, 0px -8px 10px 0px #97bdb6;
  //  color: #8f0000;
  //  scale: 1.05;
  //  transition-duration: 300ms;
  //  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  //}
`
export const CafeName = styled.p`
 font-size: 28px;
  min-height: 80px;
`
export const Price = styled.p`
 font-size: 26px;
  margin-bottom: 20px;
`

export const Image = styled.img`
border: 2px solid black;
 width: 250px;
  height: 250px;
  margin-bottom: 5px;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  color: #363b39;
  text-shadow: #f3c4c4 2px 0 2px;
margin-bottom: 20px;
`
export const BoxFood = styled.div`
min-width: 800px;
`
export const BoxPrice = styled.div`
 display: flex;
  flex-direction: column;
justify-content: space-between;
  width: 240px;
`
export const Button = styled.button`
  padding: 5px 50px;
  background: #a14545;
  cursor: pointer;
  border: 1px solid #6e1c1c;
  font-size: 18px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
    border: 1px solid #6e1c1c;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`
