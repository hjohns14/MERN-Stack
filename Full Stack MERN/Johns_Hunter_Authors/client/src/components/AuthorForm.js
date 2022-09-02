import React from 'react'


const AuthorForm = (props) => {
    const {name, handleChange, handleSubmit, context} = props
    return (
        <>
        <form onSubmit={handleSubmit} className='bg-fuchsia-50 p-8 flex flex-col w-96 items-center'>
            <h5 className='text-xl self-start'>{context}</h5>
            <label htmlFor="name" className='text-lg mt-5 self-start'>Name:</label>
            <input value={name} onChange={handleChange} type="text" name="name" className='p-2 m-2 w-full border border-black'/>
            <button className='self-end bg-green-500 rounded-lg p-2 border border-black shadow-md shadow-neutral-600'>Submit</button>
        </form>
        </>
    )
}

export default AuthorForm