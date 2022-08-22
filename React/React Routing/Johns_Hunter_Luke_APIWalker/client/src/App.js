import './App.css';
import {useState, useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Form from './components/Form';
import Card from './components/Card';
import Main from './components/Main';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function App() {
  const [searchFor, setSearchFor] = useState('')
  const [id, setID] = useState('')
  const [results, setResults] = useState({})

  const baseUrl = "https://swapi.dev/api/"

  useEffect(()=>{

    axios.get(baseUrl + searchFor + '/' + id)
    .then(res =>{
      setResults(res.data)
    })
    .catch(err =>{
      console.log(err)
      axios.get(baseUrl+searchFor)
      .then(results =>{

        //Trying to fix error where it will auto correct the first input of 2 digit number
        setTimeout(() =>{
          if (parseInt(id) < results.data.count){
              setID(`${parseInt(id) + 1}`)
            }}, 500)
        

      })
      setResults({name: "Not Found"})
    })
  },[id, searchFor])



  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main searchFor={searchFor} setSearchFor={setSearchFor} setID={setID} id={id} state={results}/>}/>
      <Route path='/:nav' element={<Main searchFor={searchFor} setSearchFor={setSearchFor} setID={setID} id={id} state={results}/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
