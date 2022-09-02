import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import DeleteButton from './DeleteButton'

const ProductDisplay = (props) => {
    const {_id, name, description, price} = props.product
    const {setAllProducts} = props

    const handleDelete = () =>{
        axios.delete(`http://localhost:9000/api/products/${_id}`)
        .then(res => {
            axios.get("http://localhost:9000/api/products")
            .then(res => {
                setAllProducts(res.data.allProducts)
            })
            .catch(err => console.log(err))
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }


    return (
        <>
        <div className="flex justify-center">
            <div className='px-6 py-4 flex flex-col justify-start border 
            shadow-neutral-200 shadow-sm border-neutral-100 bg-teal-50 
            my-5 min-w-[20rem] w-fit
            hover:scale-[1.1]'>
                <Link to={`/products/${_id}`}>
                        <h1 className='text-2xl mb-5'>{name}</h1>
                </Link>
                <h3 className='text-lg mb-5 self-center'>{description}</h3>
                <h5 className='text-sm self-end'>Price: ${price}
                    <button className='self-end ml-4 px-2 py-1 border 
                    border-neutral-600 shadow-blue-900 shadow-md bg-fuchsia-500
                    text-white hover:bg-fuchsia-600 active:bg-fuchsia-700 
                    active:translate-y-0.5 active:translate-x-0.5'>Buy</button>
                    <DeleteButton handleDelete={handleDelete}/>
                </h5>
            </div>
        </div>
        </>
    )
}

export default ProductDisplay