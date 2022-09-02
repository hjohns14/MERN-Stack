import React from 'react'
import { useParams,  useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

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

    const handleDelete = () =>{
        axios.delete(`http://localhost:9000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            navigate("/products")
        })
        .catch(err => console.log(err))
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
        <ProductForm name={name} setName={setName} description={description} setDescription={setDesc} 
        price={price} setPrice={setPrice} handleSubmit={handleSubmit} editing={true} handleDelete={handleDelete}/>
        
        </>
    )
}

export default EditProduct