import './App.css';
import Chat from './components/Chat';
import Header from './components/Header';
import Home from './components/Home';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  const [name, setName] = useState("")

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Router>
      <Routes>
        <Route path='/' element={<Home setName={setName} name={name}/>}/>
        <Route path="/chat" element={<Chat name={name} setName={setName} />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
