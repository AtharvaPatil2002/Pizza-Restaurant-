import React from 'react';
import {
  SideBarContainer,
  SideBarMenu,
  SideBarRoute,
  SideBtnWrap,
  Links,
  Icon,
  CloseIcon,
} from './sidebarelements';
import './sidebar.css';

export const Sidebar = ({ isopen, toggle }) => {
  return (
    <SideBarContainer className='bgimage' isopen={isopen}>
      <Icon>
        <CloseIcon isopen={isopen} onClick={toggle} />
      </Icon>
      <SideBarMenu>
        <Links>Pizzas</Links>
        <Links>Desserts</Links>
        <Links>Full Menu</Links>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute>Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default Sidebar;
