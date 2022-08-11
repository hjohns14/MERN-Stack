import React from 'react'

const Form = (props) => {
    const {name, email, password, setName, setEmail, setPassword, state, setState} = props
    
    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault()
        const newUser = {
            name,
            email, 
            password
        }
        setState([...state, newUser])
    }

    const styledForm = {
        display: "flex",
        flexDirection: 'column'
    }

    return (
        <>
        <h3>{JSON.stringify(state)}</h3>
        <form onSubmit={submitForm} style={styledForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" value={name} onChange={handleName}/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email" value={email} onChange={handleEmail}/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="pass" value={password} onChange={handlePassword}/>
            <button type="submit">Send</button>
        </form>
        </>
    )
}

export default Form