import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div className="flex justify-center items-center flex-col">
            <h1>Home</h1>
            <Link to="/products">
                <p className='text-blue-600 underline'>Products</p>
            </Link>
        </div>
    )
}

export default Home