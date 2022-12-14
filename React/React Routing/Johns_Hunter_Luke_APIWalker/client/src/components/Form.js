import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Form = (props) => {
    const {id, setID, setSearchFor, searchFor, nav} = props
    const navigate = useNavigate()
    const submitSearch = (e) => {
        e.preventDefault()
        navigate(`/${searchFor}`)
    }

    const handleChange = (e) => {
        if (e.target.name === 'search') {
            setSearchFor(e.target.value)

        }
        else {
            setID(e.target.value)
        }
    }
    return (
        <div className="flex justify-center my-4">
            <form onSubmit={submitSearch}>
                <label htmlFor="search" className='text-lg'>Search For: </label>
                <select value={nav} name="search" id="search" className='mx-5 border border-black rounded bg-gray-200' onChange={handleChange}>
                    <option value=""></option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Spaceships</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                </select>
                <label htmlFor="id" className='mx-3 text-lg'>ID: </label>
                <input value={id} onChange={handleChange} type="number" name="id" id="id" className='border border-black rounded bg-gray-200 w-24 px-2' />
                <button type='submit' className='bg-green-300 mx-3 px-1 rounded border border-black'>Submit</button>
            </form>
        </div>
    )
}

export default Form