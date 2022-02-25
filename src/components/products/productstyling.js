import styled from 'styled-components';

export const ProductsContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
  border-top: 10px solid black;
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(8px);
`;

export const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 10px;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  margin-bottom: 10px;
  line-height: 2;
  width: 300px;
  border: 5px solid black;
  background-color: rgba(80, 80, 80, 0.4);
  backdrop-filter: blur(8px);
`;

export const ProductImg = styled.img`
  height: 225px;
  min-width: 300px;
  max-width: 100%;
  width: 300px;

  &:hover {
    transition: ease-out 0.3s;
    box-shadow: 2px 2px #fdc500;
    transform:scaleZ(1.5);
  }
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  font-weight: bolder;
  line-height: 1;
  width: 250px;
  text-transform: uppercase;
  padding: 1rem 4rem;
  border: none;
  background: #000;
  color: #e31837;
  transition: 0.2s ease-out;

  &:hover {
    background: #ff6a00;
    transform: scale(0.95);
    transition: 0.5s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
