import React from 'react'
import { useContext } from 'react'
import { MyContext } from './MyContext'

const Navbar = () => {
    const context = useContext(MyContext)
    const {name,} = context

    return (
        <div className='flex justify-end bg-purple-600 h-[4rem] px-12'>
            <h1 className='text-xl flex items-center'>Hello {name}!</h1>
        </div>
    )
}

export default Navbar