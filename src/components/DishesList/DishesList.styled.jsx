import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  margin-left: -15px;
  margin-top: -15px;
  padding: 10px;
  overflow-y: scroll;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    background-color: #2c7c75;
    border-radius: 100%;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 100%;
    background: linear-gradient(180deg, #00b1a8, #8ec5b6);
  }
`;
export const ItemShop = styled.li`
  min-width: 1000px;
  background: rgba(129, 129, 129, 0.52);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px -8px 10px 0px #97bdb6;
  padding: 15px 20px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const CafeName = styled.p`
  font-size: 24px;
  min-height: 70px;
`;
export const Price = styled.p`
  font-size: 26px;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  border: 2px solid black;
  width: 150px;
  height: 150px;
  margin-bottom: 5px;
`;

export const BoxPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  background: #a14545;
  cursor: pointer;
  border: 3px solid #6e1c1c;
  font-size: 20px;
  border-radius: 65px;

  &:hover {
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    border: 3px solid #6e1c1c;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
