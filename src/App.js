import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Slider from './components/Slider/Slider';
import Pizza from './components/pizza/Pizza'

function App() {
  return (
    <div className='mainContainer'>
      <Header />
      <Navigation />
      <Slider />
      <Pizza/>
    </div>
  );
}

export default App;
