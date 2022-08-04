import React from 'react'

const PersonalCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    return (
        <>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
        </>
    )
}

export default PersonalCard