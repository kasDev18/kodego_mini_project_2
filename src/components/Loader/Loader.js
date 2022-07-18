import React from 'react'
import styles from './Loader.module.css';

export default function Loader() {
    return (
        <>
            <div className={styles.footer}>
                <div className={styles.wrapper}>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.circle}></div>
                    <div className={styles.shadow}></div>
                    <div className={styles.shadow}></div>
                    <div className={styles.shadow}></div>
                    <span>Loading</span>
                </div>
            </div>
        </>
    )
}
