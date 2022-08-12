import React from 'react'

const MyForm = (props) => {
    const {state, setState, error, setError} = props
    const styledForm = {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",-
    }

    const handleChange = (e) =>{

    }
    return (
        <>
        <form onSubmit={()=>{return}} style={styledForm}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">Email: </label>
            <input type="email" name="email" id="email"/>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="pass"/>
            <button type="submit">Send</button>
        </form>
        </>
    )
}

export default MyForm