import React from 'react'
import AuthorTable from './AuthorTable'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AllAuthors = (props) => {
    const [allAuthors, setAllAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/api/authors")
            .then(res => {
                console.log(res.data)
                setAllAuthors(res.data.allAuthors)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className='flex justify-center flex-col items-center'>
            <h1 className='text-3xl text-blue-700'>Favorite Authors!</h1>
            <div>
                <Link className='underline text-purple-600' to={"/new"}>Add an author</Link>
                <p className='self-start text-lime-500'>We have quotes by: </p>
                <AuthorTable allAuthors={allAuthors} setAllAuthors={setAllAuthors}/>
            </div>
        </div>
    )
}

export default AllAuthors