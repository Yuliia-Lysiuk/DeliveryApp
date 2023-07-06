import styled from '@emotion/styled';
import image from '../../image/image.png';

export const Box = styled.div`
  background-position: center;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 87vh;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
`;

export const Title = styled.h1`
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
  text-align: center;
  font-size: 66px;

  color: #c76a1d;
  text-shadow: #f3c4c4 2px 0 2px;
  max-width: 800px;
  padding: 150px 0px 0 120px;
  margin: 0;
`;
