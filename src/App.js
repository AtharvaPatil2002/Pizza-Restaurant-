import './App.css';
import Navbar1 from './components/index';
import Navbar from './components/navbar';
import {
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroItems,
  HeroH1,
  HeroP,
} from './heroelements';
import './heroelements.css';
function App() {
  return (
    <>
      <Navbar1 />
      <Navbar />
      <HeroContainer>
        <HeroContent>
          <HeroItems>
            <HeroP>Ready in 5 mins</HeroP>
            
            <HeroBtn>Go Get A Life</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
      <div>
      <HeroH1>HeroH1</HeroH1>
      </div>
    </>
  );
}

export default App;
