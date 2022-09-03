import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state ={
            age: props.age
        }
    }

    // You have to bind the function in the onClick method!
    birthday(){
        this.setState({
            age: this.state.age +1
        })
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props
        return (
            <>
                <h1>{firstName}, {lastName}</h1>
                <h5>Age: {this.state.age}</h5>
                <h5>Hair Color: {hairColor}</h5>
                <button onClick={this.birthday.bind(this)}>Birthday for {firstName}</button>
            </>
        )
    }
}

export default PersonCard