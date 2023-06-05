import styled from 'styled-components'
import delivery from '../../image/delivery.jpg'

export const Box = styled.div`
    background-image: url(${delivery});
    background-size: cover;
    background-repeat: no-repeat;
  min-height: 88.7vh;
`

export const Title = styled.h1`
  @media only screen and (max-width: 480px) {

    font-size: 14px;
  }
  text-align: center;
  font-size: 56px;
  margin: 0 auto;
  color: #363b39;
  text-shadow: #f3c4c4 2px 0 2px;
  max-width: 800px;
  padding: 30px 0px 0 20px;

`

