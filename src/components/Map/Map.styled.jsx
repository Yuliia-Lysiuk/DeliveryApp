import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  display: block;
  min-width: 176px;
  padding: 13px 25px;
  background: #a14545;
  color: white;
  border: 3px solid #6e1c1c;
  outline: none;
  border-radius: 30px;
  font-family: 'Verdana';
  font-weight: 700;
  font-size: 14px;
  text-transform: none;
  transition-property: transform;
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

export const BoxMap = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  height: 480px;
`;

export const BoxDistance = styled.div`
  padding: 10px 50px;
  display: flex;
  justify-content: space-between;
`;

export const BoxCalculate = styled.div`
  padding: 10px 50px;
  display: flex;
  flex-direction: column;
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Origin = styled.p``;

export const BoxButton = styled.div`
  margin: auto;
`;
