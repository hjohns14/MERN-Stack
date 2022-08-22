import React from 'react'
import Card from './Card'
import Form from './Form'
import { useParams } from 'react-router-dom'

const Main = (props) => {
    const {id, setID, searchFor, setSearchFor, state} = props
    const {nav} = useParams()
    return (
        <>
        <Form nav={nav} searchFor={searchFor} setSearchFor={setSearchFor} setID={setID} id={id}/>
        <Card state={state} searchFor={searchFor}/>
        </>
    )
}

export default Main