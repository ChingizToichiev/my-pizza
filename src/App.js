import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Slider from './components/Slider/Slider';
import Product from './components/product/Product'

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
      <Product id="pizzas" name="Пицца"/>
      <Product id="snacks" name="Закуски"/>
      <Product id="deserts" name="Десерты"/>
    </div>
  );
}

export default App;
