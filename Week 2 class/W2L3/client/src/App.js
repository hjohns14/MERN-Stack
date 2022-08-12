import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import MyForm from './components/MyForm';

function App() {

  const initialState = {
    name:{
      value: '',
      error: null
    },
    email:{
      value: '',
      error: null
    },
    password:{
      value: '',
      error: null
    },
    confirmPassword:{
      value: '',
      error: null
    }
  }

  const [state, setState] = useState(initialState)
  const [error, setError] = useState(false)

  return (
    <div className="App">
      <MyForm state={state} setState={setState} error={error} setError={setError} />
    </div>
  );
}

export default App;
