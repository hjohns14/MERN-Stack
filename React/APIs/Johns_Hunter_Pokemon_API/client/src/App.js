import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const baseUrl ="https://pokeapi.co/api/v2/pokemon?limit=10000"
  const [state, setState] = useState([])
  
  useEffect(() =>{
    fetch(baseUrl)
    .then(results => {return results.json()})
    .then(res =>{
      setState(res.results)
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
