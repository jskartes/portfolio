import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Footer from './components/Footer';
import Home from './pages/Home';
import Nav from './components/Nav';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
