/* eslint no-use-before-define: 0 */
import React, { useEffect } from 'react'
import style from '../styles/404.module.css'
import { useRouter } from 'next/router'


const ErrorPage = () => {

    const router = useRouter();

    const HnadleInput = () => {
        router.push("/");
    }

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 5000);
    })

    return (
        <div className={style.errorbody}>
            <div className={style.notfound}>
                <div className={style.notfound404}>
                    <h1>Oops!</h1>
                </div>
                <h2>404 - Page not found</h2>
                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                <div className={style.btn} onClick={HnadleInput}>
                    <a>Go To Homepage</a>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage