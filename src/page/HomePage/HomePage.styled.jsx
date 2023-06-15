import styled from 'styled-components';
import delivery from '../../image/delivery.jpg';

export const Box = styled.div`
  background-position: center;
  background-image: url(${delivery});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 80vh;
`;

export const Title = styled.h1`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
  text-align: center;
  font-size: 36px;
  margin: 0 auto;
  color: #c76a1d;
  text-shadow: #f3c4c4 2px 0 2px;
  max-width: 800px;
  padding: 30px 0px 0 20px;
`;
