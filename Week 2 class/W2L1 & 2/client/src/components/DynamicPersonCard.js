import React, {useState} from 'react'

const DynamicPersonCard = (props) => {
    const {item:{name, email, password}} = props
    //const [ageState, setAgeState] = useState(age)

    // const clickHandler = (e) =>{
    //     e.preventDefault()
    //     setAgeState(ageState+1)
    // }

    const box ={
        border: '2px dotted black',
        width: '250px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '20px',
        margin: '10px 0px'

    }
    
    return (
        <div style={box}>
            <h2>Name: {name}</h2>
            <h4>email: {email}</h4>
            <h3>password: {password}</h3>
        </div>
    )
}

export default DynamicPersonCard