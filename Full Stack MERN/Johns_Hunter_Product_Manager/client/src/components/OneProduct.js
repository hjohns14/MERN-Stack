import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const OneProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const {name, description: desc, price} = product

    useEffect(() =>{
        axios.get(`http://localhost:9000/api/products/${id}`)
        .then(res => {
            setProduct({})
            console.log(res.data.product)
            setProduct(res.data.product)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className='my-5 flex justify-center'>
            <div className='w-96 bg-blue-500 flex flex-col items-center'>
                <p className='text-white text-center bg-blue-800 w-full px-5 py-2 border-b border-neutral-900'>
                    <span className='text-lg text-amber-300'> {name}</span>
                </p>
                <p className=' bg-blue-300 py-5 w-full text-center'>{desc}</p>
                <img className='px-2' src="https://i.kym-cdn.com/entries/icons/original/000/029/959/Screen_Shot_2019-06-05_at_1.26.32_PM.jpg" alt="stonk man" />
                <p className='py-1 text-start w-full px-5'>${price}</p>
                <Link to={"/products"}>
                    <button className='bg-red-600 w-80 p-1 m-1 border border-black text-white'>Go Back</button>
                </Link>
                <Link to={`/edit/${id}`}>
                    <button className='bg-yellow-500 w-80 p-1 m-1 border border-black'>Edit</button>
                </Link>
            </div>
        </div>
    )
}

export default OneProduct