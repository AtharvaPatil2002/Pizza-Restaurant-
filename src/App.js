import './App.css';
import { Hero } from './components/herosection/heroelements';
import './components/herosection/heroelements.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Products from './components/products';
import { productData } from './components/products/data';
import Dead from './components/featured';
import { Desert } from './components/products/data';
import Deserts from './components/products/index2';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Hero />
      <Products heading='Choose your favourite' data={productData} />
      <Dead />
      <Deserts heading='Sweet Treat for you' data={Desert} />
      <Footer />
    </Router>

  );
}

export default App;
