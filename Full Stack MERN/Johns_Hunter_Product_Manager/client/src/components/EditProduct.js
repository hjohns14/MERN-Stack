import React from 'react'
import { Link, useParams,  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const EditProduct = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [name, setName] = useState('')
    const [description, setDesc] = useState('')
    const [price, setPrice] = useState()
    //console.log(id)

    useEffect(() =>{
        axios.get(`http://localhost:9000/api/products/${id}`)
        .then(res => {
            console.log(res.data.product)
            setName(res.data.product.name)
            setDesc(res.data.product.description)
            setPrice(res.data.product.price)
        }
        )
    },[id])

    const handleChange = (e) =>{
        switch (e.target.name){
            case 'name':
                setName(e.target.value)
                break
            case 'description':
                setDesc(e.target.value)
                break
            case 'price':
                setPrice(e.target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.put(`http://localhost:9000/api/products/${id}`,{
            name,
            description,
            price
        })
        .then(res => {
            console.log(res.data)
            navigate(`/products/${id}`)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
        <form onSubmit={handleSubmit} className='mt-5 flex justify-center'>
            <div className='w-96 bg-blue-500 flex flex-col items-end p-2'>
                <div>
                    <label className='mr-5' htmlFor="name">Name: </label>
                    <input onChange={handleChange} value={name} type='text' name='name' className='bg-blue-50 p-2 mx-1 my-2 border border-neutral-900'/>
                </div>
                <div>
                    <label className='mr-5' htmlFor="description">Description</label>
                    <input onChange={handleChange} value={description} type='text' name='description' className='bg-blue-50 p-2 mx-1 my-2 border border-neutral-900'/>
                </div>
                <div>
                    <label className='mr-5' htmlFor="description">Price</label>
                    <input onChange={handleChange} value={price} type='number' name='price' className='bg-blue-50 p-2 mx-1 my-2 border border-neutral-900'/>
                </div>
                <button type='submit' className='bg-green-600 self-center w-80 p-1 m-1 border border-black text-white'>Submit Changes</button>
            </div>
        </form>
        <div className='flex justify-center'>
        <Link to={"/products"}>
            <button className='bg-red-600 w-80 p-1 m-1 border border-black text-white'>Go Back</button>
        </Link>
        </div>
        </>
    )
}

export default EditProduct