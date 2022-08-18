import React from 'react'

const Cards = (props) => {
    const {val, setUrl} = props

    const onClick = (e) =>{
        setUrl(val.url)
    }
    return (
        <div className='bg-yellow-500 h-24 flex flex-col justify-center items-center shadow-lg'>
            <h2>{val.name}</h2>
            <h2>{}</h2>
            <button className='bg-slate-300 px-2 py-1 rounded my-2 border border-black shadow-lg'>View</button>
        </div>
    )
}

export default Cards