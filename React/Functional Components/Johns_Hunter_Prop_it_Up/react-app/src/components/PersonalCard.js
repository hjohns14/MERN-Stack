import React, {useState} from 'react'

const PersonalCard = (props) => {
    const [age, setAge] = useState(props.age)
    const {firstName, lastName, hairColor} = props
    const increaseAge = () =>{
        setAge(age + 1)
    }
    return (
        <>
            <h2>{ lastName }, { firstName }</h2>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <button onClick={increaseAge}>Age up!</button>

        </>
    )
}

export default PersonalCard