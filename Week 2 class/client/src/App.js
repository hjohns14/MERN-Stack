import './App.css';
import { useState } from 'react';
import DynamicPersonCard from './components/DynamicPersonCard';
import Form from './components/Form';

function App() {
  const apiData =[
    {
      name: "Billy",
      email: "email@email.com",
      password: "pass"
  },
  {
    name: "Jim",
    email: "email2@email.com",
    password: "password"
  },
]
  const [state, setState] = useState(apiData)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")


  return (
    <div className="App">
      <Form name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} state={state} setState={setState}/>
      {state.map((item, index)=>{
        return <DynamicPersonCard key={index} item={item}/>
      })}
    </div>
  );
}

export default App;
