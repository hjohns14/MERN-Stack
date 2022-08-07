import React from 'react'
import styles from '../static/Nav.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}>
                Logo
            </div>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>
    )
}

export default Nav