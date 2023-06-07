import styled from 'styled-components';
export const Button = styled.button`
  padding: 5px 10px;
  background: #a14545;
  cursor: pointer;
  border: 3px solid #6e1c1c;
  font-size: 20px;
  border-radius: 65px;
  width: 40px;
  &:not(:last-child){
    margin-right: 20px;
  }

  &:hover {
    background: radial-gradient(circle, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%);
    border: 1px solid #6e1c1c;
    transition-duration: 300ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`
