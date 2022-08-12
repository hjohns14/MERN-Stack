import React from 'react'

const Box = (props) => {
    const {item:{color, height}} = props

    const box = {
        width: height+'px',
        height: height+'px',
        backgroundColor: color,
        margin: '20px'
    }
    return (
        <span style={box}>
        </span>
    )
}

export default Box