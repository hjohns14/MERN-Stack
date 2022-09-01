import React from 'react'
import { useState } from 'react'
import axios from "axios"

const ProductForm = (props) => {
    const [newProduct, setNewProduct] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    const {products, setProducts} = props

    const handleChange = (e) =>{
        switch (e.target.name){
            case "name":
                setName(e.target.value)
                break
            case "description":
                setDescription(e.target.value)
                break
            case "price":
                setPrice(e.target.value)
                break
            default:
                break
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        axios.post("http://localhost:9000/api/products", {
            name,
            description,
            price
        })
        .then(res => {
            console.log(res.data)
            setProducts([...products, res.data.newProduct])
        })
        .catch(err => console.log(err))

    }


    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col border border-neutral-500 w-fit bg-blue-50 p-5'>
                <h1 className='text-lg font-bold'>Add a New Product!</h1>
                <div className='my-3'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" className='w-full py-1 px-2' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" className='w-full py-1 px-2' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="price">Price: </label>
                    <input type="number" name="price" className='w-24 py-1 px-2' step="0.01" onChange={handleChange}/>
                </div>
                <button className='px-2 py-1 border 
                border-neutral-600 shadow-blue-900 shadow-md bg-fuchsia-500
                text-white hover:bg-fuchsia-600 active:bg-fuchsia-700 
                active:translate-y-0.5 active:translate-x-0.5'>
                    Add Product
                </button>
            </form>
        </div>
    )
}

export default ProductForm