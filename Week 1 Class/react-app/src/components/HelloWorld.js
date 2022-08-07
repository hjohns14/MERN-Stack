import React from 'react'
import styles from '../static/HelloWorld.module.css'

const HelloWorld = (props) => {
    return (
        <>
        <div className={styles.box}>
            <div className={styles.header}>
                <h3>Name: {props.name}</h3>
            </div>
            <h3>Age:  {props.age}</h3>
        </div>
        </>
    )
}

export default HelloWorld