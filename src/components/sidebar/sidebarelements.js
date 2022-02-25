import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';


export const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  display: grid;
  align-items: center;
  margin-left: 925px;
  top: 0;
  transition: 0.7s ease-in-out;
  right: ${({ isopen }) => ( isopen ? '0' : '-1000px') };

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`

export const CloseIcon = styled(FaTimes)`
    color: #fc0000;
    background-color: black;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  font-size: 2rem;
  cursor: pointer;
  outline: navy;
`

export const SideBarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fc0000;
  cursor: pointer;
  background: rgba(80,80,80,0.4);
  backdrop-filter: blur(8px);

&:hover {
  color: #e31837;
  transition: 0.2s ease-in-out;
  transform: scale(1.05);
}
`
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const SideBarRoute = styled.div`
  background: rgba(80,80,80,0.5);
  white-space: nowrap;
  padding: 16px 64px;
  color: red;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;


 &:hover {
  transition: 0.2s ease-in-out;
  transform: scale(1.1);
}
`
