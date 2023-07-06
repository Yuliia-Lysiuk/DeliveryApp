import styled from '@emotion/styled';

export const Box = styled.div`
  height: 70vh;
  overflow-y: scroll;
  scroll-behavior: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #8ec5b6;
    border-radius: 100%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100%;
    background: linear-gradient(180deg, #00b1a8, #045245);
  }
`;

export const List = styled.ul`
  display: flex;
  padding-top: 40px;
  padding-right: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 560px;
`;

export const ItemShop = styled.li`
  padding: 12px 0;
  min-height: 100px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: ${props => (props.$color ? '0px 0px 8px 0px red' : '')};
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  &:hover img {
    color: red;
    cursor: pointer;
    scale: 1.25;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover p {
    color: red;
    cursor: pointer;
    transition-duration: 400ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const CafeName = styled.p`
  font-size: 18px;
`;

export const Image = styled.img`
  border: 2px solid black;
  width: 100px;
  height: 100px;
  margin-bottom: 7px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 26px;
  color: #363b39;
  text-shadow: #f3c4c4 2px 0 2px;
  margin-bottom: 120px;
`;
