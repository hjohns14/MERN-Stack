import React from 'react'


const PlayerForm = (props) => {
    const {
        name, 
        position, 
        status,
        errors, 
        handleChange, 
        handleSubmit
    } = props

    return (
    <form className='flex flex-col border-2 border-black p-8 w-96' onSubmit={handleSubmit}>
        
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} type="text" name="name"  className='my-3 border border-black'/>
        <label htmlFor="position">Position</label>
        <input value={position} onChange={handleChange} type="text" name="position"  className='my-3 border border-black'/>
        <label htmlFor="status">Status</label>
        <select value={status} onChange={handleChange} name="status" id="status" className='my-3 border border-black'>
            <option value="Playing" selected>Playing</option>
            <option value="Not Playing">Not Playing</option>
            <option value="Undecided">Undecided</option>
        </select>
        {errors.map((item, idx) =>(
            <>
                <p className='text-red-500 my-2'>{item}</p>
            </>
        ))}
        <button>Submit!</button>
    </form>
    )
}

export default PlayerForm