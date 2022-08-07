import React from 'react'
import styles from '../static/Base.module.css'

const Base = (props) => {
    return (
        <div className={styles.container}>
            
            {props.children}
        </div>
    )
}

export default Base