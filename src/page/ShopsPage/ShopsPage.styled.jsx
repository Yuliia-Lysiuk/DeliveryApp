import styled from '@emotion/styled';

export const Box = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-column-gap: 20px;
  justify-content: center;
  padding: 50px 200px;
`;

export const MenuBox = styled.div`
  background: #2c7c75;
  border-radius: 20px;
  border: medium inset #6b98a6;
`;

export const ShopsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8ec5b6;
  border-radius: 20px;
  border: medium inset lightblue;
  padding: 20px 5px 20px;
`;
