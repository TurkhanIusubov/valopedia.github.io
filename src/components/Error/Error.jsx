import React from 'react'
import { useNavigate } from 'react-router-dom'
import * as HiIcons from 'react-icons/hi'

import styles from './Error.module.css'

function Error() {

    const navigate = useNavigate()

    const replace_page = () => {
        navigate('/', {replace: true})
    }


    return (
        <div className={styles.error_container}>
            <h1>Error 404</h1>
            <h3>Not Found Page...</h3>
            <li onClick={replace_page}>
                <HiIcons.HiArrowNarrowLeft /> Back to Home Page.
            </li>
        </div>
    )
}

export default Error