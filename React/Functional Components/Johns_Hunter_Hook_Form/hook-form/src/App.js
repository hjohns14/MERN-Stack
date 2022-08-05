import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const updateInfo = (e) =>{
    e.preventDefault()
    const newUser ={
      firstName,
      lastName,
      email,
      password
    }
    console.log("Welcome", newUser)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  return (
    <div className="App">
      <form onSubmit={updateInfo} className='main'>
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" onChange={(e) => {setFirstName(e.target.value)}} value={firstName}/>
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" onChange={(e) => {setLastName(e.target.value)}} value={lastName}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={(e) => {setEmail(e.target.value)}} value={email}/>
        <label htmlFor="password">Password</label>
        <input type="password" name='password'onChange={(e) => {setPassword(e.target.value)}} value={password}/>
        <label htmlFor="pass_confirm">Confirm Password</label>
        <input type="password" name="pass_confirm"/>
        <button type="submit">Send!</button>
      </form>
      <p>Name: { firstName }, { lastName }</p>
      <p>Pass: { password }</p>
      <p>Emai: { email }</p>
    </div>
  );
}

export default App;
