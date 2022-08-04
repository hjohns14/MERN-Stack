import './App.css';
import React from 'react';
import Dash from './components/Dash';

function App() {
  return (
    <div className="App">
      <Dash fruits={['bananna', 'apple', 'grapes']}/>
    </div>
  );
}

export default App;
