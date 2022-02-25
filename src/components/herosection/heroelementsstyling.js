import styled from 'styled-components';
import ImgBg from './ImgBg.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url (${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh -80px);
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: rgb(253, 229, 14);
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1 = styled.div`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 10px 5px #fc0000;
  letter-spacing: 3px;
  transition: 2s;
  animation-name: mymoveback;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  &:hover {
    animation-name: mymove;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  @keyframes mymove {
    from {
      box-shadow: 10px 5px #fc0000;
    }
    to {
      transition: 2s;
      color: #ff0808;
      transform: translateX(20%);
      box-shadow: -20px 13px rgb(253, 229, 14, 0.7);
      background-color: rgb(0,0,0,0.7);
    }
  }

  @keyframes mymoveback {
    from {
      transition: 2s;
      color: #ff0808;
      transform: translateX(20%);
      box-shadow: -20px 13px rgb(253, 229, 14);
      background-color: black;
    }
    to {
      box-shadow: 3px 5px #fc0000;
    }
  }
`;

export const HeroP = styled.div`
  font-size: clamp(2rem, 2.5rem, 3rem);
  margin-bottom: 2rem;
  animation-name: mymoveback1;
  animation-duration: 2s;
  animation-fill-mode: forwards;

  @keyframes mymove1 {
    from {
      transform: translateX(0%);
    }
    to {
      transition: 0.5s linear;
      transform: translateX(25%);
      box-shadow: -20px 13px #fc0000;
    }
  }

  @keyframes mymoveback1 {
    from {
      transition: 0.5s linear;
      transform: translateX(25%);
      box-shadow: -20px 13px #fc0000;
    }
    to {
      transform: translateX(0%);
    }
  }

  &:hover {
    animation-name: mymove1;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
`;

export const HeroBtn = styled.div`
  text-align: center;
  width: 200px;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #000000;
  color: rgb(255, 0, 0);
  transition: 0.2s width ease-out;
  margin-bottom: 15px;

  &:hover {
    background: #ff6600;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    color: #000;
    transform: scale(0.95);
  }
`;
