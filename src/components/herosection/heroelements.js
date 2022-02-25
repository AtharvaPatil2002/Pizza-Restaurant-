import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtn,
  HeroItems,
} from './heroelementsstyling';
import './heroelements.css';
import { useState } from 'react';
import { Navbar1 } from '../navbar/index.js';
import { Sidebar } from '../sidebar/index.js';
import Navbar from '../navbar';

export const Hero = () => {
  const [isopen, setisopen] = useState(false);

  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <HeroContainer className='Container'>
      <Navbar1 toggle={toggle} />
      <Navbar />
      <Sidebar isopen={isopen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 4 mins</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};
