import React, {useReducer} from 'react'
import styles from '../static/Main.module.css'

const Main = () => {

    const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
    }

    const reducer = (state, action) =>{
        switch (action.type){
            case "SET_EMAIL_VALUE":
                return{
                    ...state,
                    email:{
                        ...state.email,
                        value: action.payload
                    }
                }
            case "SET_EMAIL_ERROR":
                return{
                    ...state,
                    email: {
                        ...state.email,
                        error: action.payload
                    }
                }
            case "SET_FIRSTNAME_VALUE":
                return{
                    ...state,
                    firstName:{
                        ...state.firstName,
                        value: action.payload
                    }
                }
            case "SET_FIRSTNAME_ERROR":
                return{
                    ...state,
                    firstName: {
                        ...state.firstName,
                        error: action.payload
                    }
                }
            case "SET_LASTNAME_VALUE":
                return{
                    ...state,
                    lastName:{
                        ...state.lastName,
                        value: action.payload
                    }
                }
            case "SET_LASTNAME_ERROR":
                return{
                    ...state,
                    lastName: {
                        ...state.lastName,
                        error: action.payload
                    }
                }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleEmailChange = (e) =>{
        if (e.target.value.length < 5){
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: "Email Must be at least 5 chars"
            })
        }
        else{
            dispatch({
                type: "SET_EMAIL_ERROR",
                payload: null
            })

        }
        dispatch({
            type: "SET_EMAIL_VALUE",
            payload: e.target.value
        })
    }

    const handleFirstNameChange = (e) =>{
        if (e.target.value.length < 3){
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: "Name must be at least 3 chars"
            })
        }
        else{
            dispatch({
                type: "SET_FIRSTNAME_ERROR",
                payload: null
            })

        }
        dispatch({
            type: "SET_FIRSTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleLastNameChange = (e) =>{
        if (e.target.value.length < 3){
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: "Name must be at least 3 chars"
            })
        }
        else{
            dispatch({
                type: "SET_LASTNAME_ERROR",
                payload: null
            })

        }
        dispatch({
            type: "SET_LASTNAME_VALUE",
            payload: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return (
        <>
        <h1>{JSON.stringify(state)}</h1>
            <form className={styles.main} onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                {state.firstName.error !== null &&
                    (<p className={styles.error}>{state.firstName.error}</p>)
                }
                <input type="text" name="firstName" id="firstName" onChange={(e) => handleFirstNameChange(e)}/>
                <label htmlFor="lastName">Last Name:</label>
                {state.lastName.error !== null &&
                    (<p className={styles.error}>{state.lastName.error}</p>)
                }
                <input type="text" name="lastName" value={state.lastName.value} id="lastName" onChange={(e) => handleLastNameChange(e)}/>
                <label htmlFor="email">Email:</label>
                {state.email.error !== null &&
                    (<p className={styles.error}>{state.email.error}</p>)
                }
                <input type="email" name="email" value={state.email.value} id="email" onChange={(e) => handleEmailChange(e)}/>
                <button type="submit" id='formSubmit'>Send</button>
            </form>
        </>
    )
}

export default Main