import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import AllProducts from './components/AllProducts';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path='/products/:id' element={<OneProduct/>}/>
          <Route path='/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
