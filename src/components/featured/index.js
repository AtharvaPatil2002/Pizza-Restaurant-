import React from 'react'
import { FeaturedContainer, FeaturedButton,FeatuerdItems, Donut, DonutP } from './featured.styling';

const featured = () => {
  return (
    <FeaturedContainer>
        <FeatuerdItems></FeatuerdItems>
      <Donut>Donut of the day</Donut>
      <DonutP>Truffle alfreda sauce topped with 24 carat gold dust</DonutP>
      <FeaturedButton>Order Now</FeaturedButton>
      
    </FeaturedContainer>
  )
}

export default featured;