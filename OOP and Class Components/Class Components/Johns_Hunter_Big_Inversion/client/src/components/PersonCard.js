import React, { Component } from 'react'

export class PersonCard extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <>
                <h1>{firstName}, {lastName}</h1>
                <h5>Age: {age}</h5>
                <h5>Hair Color: {hairColor}</h5>
            </>
        )
    }
}

export default PersonCard