import React from 'react'

const View = (props) => {
    const {name, email, password} = props
    const viewStyle = {
        width: "250px",
        border: "2px solid red"
    }
    return (
        <div style={viewStyle}>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Password: {password}</h3>
        </div>
    )
}

export default View