import React from 'react'

const Box = (props) => {
    const {item:{color}} = props

    const box = {
        width: '150px',
        height: '150px',
        backgroundColor: color,
        margin: '20px'
    }
    return (
        <span style={box}>
        </span>
    )
}

export default Box