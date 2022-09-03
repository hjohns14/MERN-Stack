import React from 'react'
import { Link } from 'react-router-dom'

const ManagePlayerHeader = () => {
    return (
        <nav className='flex w-3/4 my-5'>
            <Link to="/players/list" className='text-xl text-blue-500 mx-4'>
                List
            </Link>
            <span className='text-xl'>|</span>
            <Link to="/players/add" className='text-xl text-blue-500 mx-4'>
                Add Player
            </Link>
        </nav>
    )
}

export default ManagePlayerHeader