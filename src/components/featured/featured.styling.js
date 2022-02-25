import styled from 'styled-components';
import donut from './donut.jpg';
import donut1 from './donut1.jpg';

export const FeaturedContainer = styled.div`
  background-color: black;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${donut1});
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;
`;

export const FeaturedButton = styled.button`
  font-size: 1.4rem;
  padding: 0.6rem 3rem;
  border: none;
  background-color: #000;
  color: #e31837;
  transition: 0.2s ease-out;
  font-weight: 500;
  margin-bottom: 4px;

  &:hover {
    background: #ff6a00;
    transform: scale(0.95);
    transition: 0.5s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const FeatuerdItems = styled.div`
  background-color: rgba(256, 256, 256, 0.5);
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${donut});
  height: 500px;
  width: 183px;
  margin-top: 10px;
  margin-bottom: 0px;
  border: 3px solid black;
`;

export const Donut = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
`;

export const DonutP = styled.p`
  font-size: clamp(1rem, 3vw, 2rem);
  margin-bottom: 1rem;
`;
