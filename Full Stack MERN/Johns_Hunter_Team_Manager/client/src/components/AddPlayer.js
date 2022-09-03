import React from 'react'
import ManagePlayerHeader from './ManagePlayerHeader'
import PlayerForm from './PlayerForm'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPlayer = () => {
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [status, setStatus] = useState('Playing')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/api/players", {
            name,
            position,
            status
        })
        .then(res =>{
            console.log(res.data)
            navigate("/")
        })
        .catch(err => {
            const errorResponses = err.response.data.errors
            const errorArr = []

            for (const key of Object.keys(errorResponses)){
                errorArr.push(errorResponses[key].message)
            }
            setErrors(errorArr)
        })
        console.log(errors)
    }

    const handleChange = (e) =>{
        switch (e.target.name){
            case "name":
                setName(e.target.value)
                break
            case "position":
                setPosition(e.target.value)
                break
            case "status":
                setStatus(e.target.value)
                break
            default: break
        }
    }


    return (
        <div className='w-full flex flex-col items-center'>
            <ManagePlayerHeader/>
            <div>
                <PlayerForm errors={errors} name={name} position={position} status={status} 
                handleChange={handleChange} handleSubmit={handleSubmit}/>
            </div>
        </div>
    )
}

export default AddPlayer