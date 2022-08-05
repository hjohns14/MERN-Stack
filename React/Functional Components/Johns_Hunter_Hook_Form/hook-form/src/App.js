import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
  const [nameError, setNameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passError, setPassError] = useState('')
  const [hasErrors, setHasErrors] = useState(true)

  const updateInfo = (e) =>{
    e.preventDefault()
    const newUser ={
      firstName,
      lastName,
      email,
      password
    }
    setHasBeenSubmitted(true)
    setHasErrors(true)
    console.log("Welcome", newUser)
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }

  const handleFirstName = (e) =>{
    setFirstName(e.target.value)
    if (e.target.value.length < 2){
      setNameError("Name must be at least 2 chars")
      setHasErrors(true)
    }
    else{
      setNameError("")
      setHasErrors(false)
    }
  }

  const handleLastName = (e) =>{
    setLastName(e.target.value)
    if (e.target.value.length < 2){
      setNameError("Name must be at least 2 chars")
      setHasErrors(true)
    }
    else{
      setNameError("")
      setHasErrors(false)
    }
  }

  const handleEmail = (e) =>{
    setEmail(e.target.value)
    if (e.target.value.length < 2){
      setEmailError("Email must be at least 2 chars")
      setHasErrors(true)
    }
    else{
      setEmailError("")
      setHasErrors(false)
    }
  }

  const handleConfirmPass = (e) => {
    if (password != e.target.value){
      setPassError("Password Must Match")
      setHasErrors(true)
    }
    else{
      setPassError('')
      setHasErrors(false)
    }
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
    
    if (e.target.value.length < 8){
      setPassError("Password must be at least 8 chars")
      setHasErrors(true)
    }
    else{
      setPassError("")
      setHasErrors(false)
    }
  }


  return (
    <div className="App">
      <form onSubmit={updateInfo} className='main'>
        {hasBeenSubmitted 
          ? <h3>Thank you for submitting the form</h3>
          : <h3>Please submit the form</h3>
        }
        <label htmlFor="first_name">First Name</label>
        <input type="text" name="first_name" onChange={handleFirstName} value={firstName}/>
        {
        nameError
          ? <p Style="color: red">{nameError}</p>
          : <></>
        }
        <label htmlFor="last_name">Last Name</label>
        <input type="text" name="last_name" onChange={handleLastName} value={lastName}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" onChange={handleEmail} value={email}/>
        {
        emailError
          ? <p Style="color: red">{emailError}</p>
          : <></>
        }
        <label htmlFor="password">Password</label>
        <input type="password" name='password'onChange={handlePassword}/>
        {
        passError
          ? <p Style="color: red">{passError}</p>
          : <></>
        }
        <label htmlFor="pass_confirm">Confirm Password</label>
        <input type="password" name="pass_confirm" onChange={handleConfirmPass}/>
        {
          hasErrors ?
          <button type="submit" disabled>Send!</button>:
          <button type="submit">Send!</button>
          
        }
      </form>
      <p>Name: { firstName }, { lastName }</p>
      <p>Pass: { password }</p>
      <p>Emai: { email }</p>
    </div>
  );
}

export default App;
