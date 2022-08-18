import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Display from './components/Display';

import React from 'react'





function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:first' element={<Display/>}/>
        <Route path='/:first/:textColor/:bgColor' element={<Display/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
