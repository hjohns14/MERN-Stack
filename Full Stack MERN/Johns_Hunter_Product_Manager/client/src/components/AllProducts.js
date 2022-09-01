import React, {useState, useEffect} from 'react'
import ProductDisplay from './ProductDisplay'
import ProductForm from './ProductForm'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:9000/api/products")
        .then(res => {
            console.log(res.data)
            setProducts(res.data.allProducts)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <>
            <p className='text-blue-600 text-lg underline self-start my-2 mx-5 w-fit'>
                <Link to="/">
                    Home
                </Link>
            </p>
        <ProductForm/>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
            {products.map((item, index) =>
                    <ProductDisplay key={index} product={item}/>
                )}
        </div>
        </>
    )
}

export default AllProducts