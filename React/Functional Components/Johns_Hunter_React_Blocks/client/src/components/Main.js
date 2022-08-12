import React from 'react'

const Main = (props) => {
    return (
        <main className='flex flex-1 m-5 bg-orange-300 flex-wrap'>
            {props.children}
        </main>
    )
}

export default Main