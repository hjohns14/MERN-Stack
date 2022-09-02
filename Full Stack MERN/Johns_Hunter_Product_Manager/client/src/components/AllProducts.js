import React, {useState, useEffect} from 'react'
import ProductDisplay from './ProductDisplay'
import ProductForm from './ProductForm'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProducts = () => {
    const [products, setProducts] = useState([])
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    useEffect(() =>{
        axios.get("http://localhost:9000/api/products")
        .then(res => {
            console.log(res.data)
            setProducts(res.data.allProducts)
        })
        .catch(err => console.log(err))
    }, [])

    const createNewProduct = (e) =>{
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
        <>
            <p className='text-blue-600 text-lg underline self-start my-2 mx-5 w-fit'>
                <Link to="/">
                    Home
                </Link>
            </p>
        <ProductForm products={products} setProducts={setProducts} handleSubmit={createNewProduct}
        name={name} setName={setName} description={description} setDescription={setDescription} 
        price={price} setPrice={setPrice} editing={false}/>

        <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
            {products.map((item, index) =>
                    <ProductDisplay key={index} product={item} setAllProducts={setProducts}/>
                )}
        </div>
        </>
    )
}

export default AllProducts