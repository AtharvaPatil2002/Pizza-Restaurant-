import styled from 'styled-components';


export const Nav = styled.div`
  background: black;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled.div`
  background-color: black;
  color: #c30000;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: relative;
    top: 25px;
  }

  &:hover {
    transform: scale(1.2);
    transition: 0.5s ease-in-out;
    cursor: pointer;
  }

`;

export const NavIcon = styled.div`
  z-index: 999;
  display: block;
  position: absolute;
  margin-bottom: 50px;
  right: 0;
  cursor: pointer;
  color: #c30000;

  &:hover {
    transform: scale(0.98);
  }
`;
