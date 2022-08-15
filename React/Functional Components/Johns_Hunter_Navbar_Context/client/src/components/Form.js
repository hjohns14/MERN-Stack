import React from 'react'
import { MyContext } from './MyContext'
import { useContext } from 'react'

const Form = () => {
    const {name, setName} = useContext(MyContext)

    const handleChange = (e) =>{
        setName(e.target.value)
    }

    return (
        <form className='my-4'>
            <label htmlFor="name" className='text-lg underline mx-2'>Name:</label>
            <input className='border border-neutral-400 rounded-md px-2' type="text" name="name" id="name" value={name} onChange={handleChange}/>
        </form>
    )
}

export default Form