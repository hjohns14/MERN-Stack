import React from 'react'
import AuthorForm from './AuthorForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const EditAuthor = (props) => {
    const {id} = useParams()
    const [name, setName] = useState('')
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const context = "Edit Author"

    useEffect(() =>{
        axios.get("http://localhost:9000/api/authors/" + id)
        .then(res => {
            console.log(res.data)
            setName(res.data.author.name)
        })
        .catch(err => console.log(err))
    },[id])

    const handleChange = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put("http://localhost:9000/api/authors/" +id, {name})
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
        <div className='flex flex-col items-center my-5'>
            <p className='text-red'>{errors}</p>
            <AuthorForm context={context} name={name} setName={setName} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default EditAuthor