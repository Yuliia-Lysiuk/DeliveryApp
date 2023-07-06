import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Btn = styled(Button)`
  display: block;
  min-width: 200px;
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
