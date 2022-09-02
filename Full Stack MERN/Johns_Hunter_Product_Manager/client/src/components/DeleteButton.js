import React from 'react'

const DeleteButton = (props) => {
    const handleDelete = props.handleDelete
    return (
        <>
        <button className='self-start ml-10 px-2 py-1 border 
        border-neutral-600 shadow-blue-900 shadow-md bg-red-500
        text-white hover:bg-red-600 active:bg-red-700 
        active:translate-y-0.5 active:translate-x-0.5' onClick={handleDelete}>
            Delete
        </button>
        </>
    )
}

export default DeleteButton