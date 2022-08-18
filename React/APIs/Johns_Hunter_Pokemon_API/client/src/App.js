import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const baseUrl ="https://pokeapi.co/api/v2/pokemon?limit=10000"
  const [state, setState] = useState([])
  
  useEffect(() =>{
    axios.get(baseUrl)
    .then(results => {
      console.log(results)
      setState(results.data.results)
  })
}, [])




  return (
    <div className="App">
      <h2 className='underline text-4xl'>All Pokemon</h2>
      {state.map((item,index) => (
        <div key={index}>
          <h1 className='text-md'>Name: {item.name} || PokeDex Number: {index+1}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
