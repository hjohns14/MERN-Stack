import './App.css';
import ProductDisplay from './components/ProductDisplay';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' 
import AllProducts from './components/AllProducts';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProducts/>}/>
        </Routes>
      </Router>
      <div className='grid grid-cols-4'>

      </div>
    </>
    
  );
}

export default App;
