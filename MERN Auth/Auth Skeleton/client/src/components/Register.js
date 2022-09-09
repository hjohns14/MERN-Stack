import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = (props) => {
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loginUserName, setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigate = useNavigate()

    const [errors, setErrors] = useState([])

    const handleRegisterChange = (e) =>{
        switch (e.target.name){
            case "userName":
                setUserName(e.target.value)
                break
            case "email":
                setEmail(e.target.value)
                break
            case "password":
                setPassword(e.target.value)
                break
            case "confirmPassword":
                setConfirmPassword(e.target.value)
                break
            default: break
        }
    }

    const handleLoginChange = (e) =>{
        switch (e.target.name){
            case "userName":
                setLoginUsername(e.target.value)
                break
            case "password":
                setLoginPassword(e.target.value)
                break
            default: break
        }
    }

    const hanldeRegisterSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9000/api/users", {
            userName,
            email,
            password, 
            confirmPassword
        }, {withCredentials:true})
        .then(res =>{
            console.log(res.data)
            window.sessionStorage.setItem("loggedIn", true)
            window.sessionStorage.setItem("id", res.data.id)
            navigate("/home")
        })
        .catch(err =>{
            console.log(err.response.data.errors)
            const errorResponse = err.response.data.errors
            const errorArr = []
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })}

    const handleLoginSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:9000/api/users/login", {
            userName: loginUserName,
            password: loginPassword
        }, {withCredentials:true})
        .then(res =>{
            window.sessionStorage.setItem("loggedIn", true)
            window.sessionStorage.setItem("id", res.data.id)
            navigate("/home")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='flex justify-around m-10'>
            <div className='m-5 p-5 flex-auto bg-neutral-200 border border-neutral-300'>
            <h3 className='text-xl font-bold'>Register</h3>
                <form onSubmit={hanldeRegisterSubmit} className='flex flex-col' id='register'>
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="userName">User Name: </label>
                    <input onChange={handleRegisterChange} className='w-10/12 px-2 py-1' type="text" name="userName" />
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="email">Email: </label>
                    <input onChange={handleRegisterChange} className='w-10/12 px-2 py-1' type="text" name="email" />
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="password">Password: </label>
                    <input onChange={handleRegisterChange} className='w-10/12 px-2 py-1' type="password" name="password" />
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="confirmPassword">Confirm Password: </label>
                    <input onChange={handleRegisterChange} className='w-10/12 px-2 py-1' type="password" name="confirmPassword" />
                    <div className="flex flex-col">
                        <ul className='text-red-400'>
                            {errors.map((item,idx) => <li key={idx}>{item}</li>)}
                        </ul>
                    </div>
                    <div className="flex justify-end w-10/12 mt-6">
                        <button className='px-2 py-1 bg-green-300 rounded border border-black'>Submit</button>
                    </div>
                </form>
            </div>

            <div className='flex-auto m-5 p-5 bg-neutral-200 border border-neutral-300 h-fit'>
            <h3 className='text-xl font-bold'>Login</h3>
                <form onSubmit={handleLoginSubmit} className='flex flex-col' id='login'>
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="userName">User Name: </label>
                    <input onChange={handleLoginChange} className='w-10/12 px-2 py-1' type="text" name="userName" />
                    <label className='text-lg font-semibold mt-5 mb-1' htmlFor="password">Password: </label>
                    <input onChange={handleLoginChange} className='w-10/12 px-2 py-1' type="password" name="password" />
                    <div className="flex justify-end w-10/12 mt-6">
                        <button className='px-2 py-1 bg-green-300 rounded border border-black'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register