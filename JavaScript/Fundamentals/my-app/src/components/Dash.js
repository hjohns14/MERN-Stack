import React from 'react'
const Dash = (props) => {
    const {fruits: [f1, f2, f3]} = props
    return (
        <div className='col'>
            <h1>Hello World</h1>
            <ul>
                <li>{f1}</li>
                <li>{f2}</li>
                <li>{f3}</li>
            </ul>
            <a href="https://www.youtube.com/watch?v=jfKfPfyJRdk">Lofi Girl</a>
        </div>
    )
}

export default Dash