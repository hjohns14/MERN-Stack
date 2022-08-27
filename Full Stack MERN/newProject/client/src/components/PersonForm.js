import React, { useEffect, useState } from 'react'
import axios from 'axios'


const PersonForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [message, setMessage] = useState("Loading...")
    
    useEffect(() =>{
        axios.get("http://localhost:9000/api")
        .then(res => setMessage(res.data.message))
        .catch(err => console.log(err))
    }, [])

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/api/persons",{
            firstName,
            lastName
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
        
    }

    return (
        <div>
            <h2 className='text-xl'>Message from backend: {message}</h2>
            <form onSubmit={onSubmitHandler} method="post" className='flex flex-col items-center my-3 border-t-4 border-slate-400'>
                <label htmlFor="firstName">First Name: </label>
                <input className='border border-black w-48 my-2' type="text" name="firstName" onChange={(e) =>{setFirstName(e.target.value)}} />
                <label htmlFor="lastName">Last Name: </label>
                <input className='border border-black w-48 my-2' type="text" name="lastName" onChange={(e) =>{setLastName(e.target.value)}} />
                <button className='border border-black px-3 py-1 bg-green-400' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PersonForm