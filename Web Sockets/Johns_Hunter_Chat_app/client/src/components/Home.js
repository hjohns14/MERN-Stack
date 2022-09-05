import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
    const {name, setName} = props
    const navigate = useNavigate()

    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (name === ""){
            navigate("/")
        }
        else{
            navigate("/chat")
        }
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit} className='border border-black h-48 flex flex-col justify-around bg-slate-50'>
                <div>
                    <label htmlFor="name">Chat name:</label>
                    <input onChange={handleChange} value={name} type="text" name="name" className='bg-neutral-50 border border-black rounded p-1 mx-5' />
                </div>
                <button className='bg-green-400 w-fit self-center px-4 py-1 rounded-lg border border-black'>Submit</button>
            </form>
        </div>
    )
}

export default Home