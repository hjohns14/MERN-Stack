import React from 'react'
import DeleteButton from './DeleteButton'
import { Navigate } from 'react-router-dom'

const ProductForm = (props) => {
    const handleSubmit = props.handleSubmit
    const handleDelete = props.handleDelete
    const {name, setName, price, setPrice, description, setDescription} = props
    const editing = props.editing

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


    return (
        <div className='flex flex-col justify-center items-center'>
                {editing?
                <div className='flex mt-5 mb-2'>
                <h1 className='text-2xl font-bold'>Edit this prodct!</h1>
                <DeleteButton handleDelete={handleDelete} redirect={true}/>
                </div>
                :
                <h1 className='text-lg font-bold'>Add a New Product!</h1>
                }
            <form onSubmit={handleSubmit} className='flex flex-col border border-neutral-500 w-fit bg-blue-50 p-5'>
                <div className='my-3'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={name} name="name" className='w-full py-1 px-2' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="description">Description: </label>
                    <input type="text" value={description} name="description" className='w-full py-1 px-2' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="price">Price: </label>
                    <input type="number" value={price} name="price" className='w-24 py-1 px-2' step="0.01" onChange={handleChange}/>
                </div>
                <button className='px-2 py-1 border 
                border-neutral-600 shadow-blue-900 shadow-md bg-fuchsia-500
                text-white hover:bg-fuchsia-600 active:bg-fuchsia-700 
                active:translate-y-0.5 active:translate-x-0.5'>
                    Submit!
                </button>
            </form>
        </div>
    )
}

export default ProductForm