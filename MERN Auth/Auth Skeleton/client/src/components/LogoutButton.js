import React from 'react'
import { useNavigate } from 'react-router-dom'

const LogoutButton = () => {
    const navigate = useNavigate()

    const handleLogout = (e) =>{
        window.sessionStorage.clear()
        navigate("/")
    }
    
    return (
        <>
        <button onClick={handleLogout} className='px-3 py-1 
        bg-red-400 border border-black rounded-lg shadow-md shadow-neutral-400
        hover:bg-red-500 active:bg-red-600 active:translate-x-[1px] active:translate-y-[1px]'>
            Logout
        </button>
        </>
    )
}

export default LogoutButton