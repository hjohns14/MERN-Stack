import React from 'react'


const Delete = (props) => {
    const {id, name, toggle} = props
    
    

    return (
        <>
            <button onClick={() => toggle(name, id)} className='bg-red-500 w-full py-1 rounded-md border border-black shadow-md 
            shadow-red-300 hover:bg-red-600 active:bg-red-700 
            active:translate-x-[0.1rem] active:translate-y-[0.1rem]'>
                Delete
            </button>
        </>
    )
}

export default Delete