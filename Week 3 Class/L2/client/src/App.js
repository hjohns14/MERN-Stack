import './App.css';
import { useEffect, useState } from 'react'
import Cards from './components/Cards';

function App() {
  const baseURL = "https://pokeapi.co/api/v2/pokemon"
  const [view, setView] = useState([])
  const [state, setState] = useState([])
  const [ url, setUrl] = useState('')

  useEffect(() =>{
    fetch(baseURL)
    .then((result) => {
      return result.json()
    })
    .then((res) =>{                                                                   
      setState(res.results)
      console.log(res.results)
    })
    .catch((err) =>{
      console.log(err)
    })
  }, [])


  return (
    <div className="App grid grid-cols-4 gap-4 m-5">
      {state.map((item,idx) =>(
        <Cards key={idx} val={item} url={url} setUrl={setUrl}/>
      ))}    
    </div>
  );
}

export default App;
