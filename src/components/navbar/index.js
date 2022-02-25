import React from 'react';
import Pizza from '../pizza.jpg';
import { Nav, NavLink, NavIcon } from './navbar.styled';
import './index.css';


export const Navbar1 = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to='/'>Pizza</NavLink>
      <NavIcon alt='Anything'>
        <h5 className='welcome'>Menu</h5>
        <img onClick={toggle} src={Pizza} alt='' className='img' />
      </NavIcon>
    </Nav>
  );
};

export default Navbar1;
