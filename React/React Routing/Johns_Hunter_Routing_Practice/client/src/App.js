import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import React from 'react'

const Home = (props) => {
  return (
    <div>
      <h1>
        Home Component
      </h1>
      <Link to={'/about'}>Go To About Page</Link>
    </div>
  )
}

const About = (props) => {
  return (
    <div>
      <h1>
        About Component
      </h1>
      <Link to={'/'}>Go To Home Page</Link>
    </div>
  )
}



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
