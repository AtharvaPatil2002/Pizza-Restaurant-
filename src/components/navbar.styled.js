import styled from 'styled-components';

export const NavbarTitle = styled.div`
  font-weight: 700;
  font-style: italic;
  font-size: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;


export const NavbarHome = styled.div`
    font-weight: 700;
    position: relative; 
    top:2px;
    font-size: large;

    &:hover {
        transform: scale(1.05);
    }
`

export const NavbarMenu = styled.div`
    font-weight: 700;
    position: relative; 
    top: 2px;
    font-size: large;

    &:hover {
        transform: scale(1.05);
    }
`

export const MenuDropdown = styled.div`
    font-weight: 900;
    font-size: small;
    margin: 2px;

    &:hover {
        transform: scale(1.05);
    }
`
