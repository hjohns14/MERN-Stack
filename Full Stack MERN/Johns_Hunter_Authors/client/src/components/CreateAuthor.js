import React from 'react'
import AuthorForm from './AuthorForm'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateAuthor = () => {
    const [name, setName] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const context = "Add a new Author"

    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/api/authors", {name})
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []

            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors([errorArr])
        })
    }

    return (
        <div className='flex flex-col items-center mt-5 p-5 border'>
            <p className='text-red-500'>{errors}</p>
            <AuthorForm context={context} handleSubmit={handleSubmit} handleChange={handleChange} name={name}/>
        </div>
    )
}

export default CreateAuthor