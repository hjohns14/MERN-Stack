import React from 'react'
import { useParams } from 'react-router-dom'

const Display = () => {
    const {first, textColor, bgColor} = useParams()
    const isNAN = isNaN(first)

    const style = {
        color: textColor,
        backgroundColor: bgColor
    }

    return (
        <div>            
            {isNAN 
                ? <h1 style={style}>The word is {first}</h1>
                : <h1>The number is: {first}</h1>
            }
        </div>
    )
}

export default Display