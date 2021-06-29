import React from 'react';
import styles from './test.module.css';

const Test = ({children}) => {
    return ( <div className={styles.container}>
        <div className={`${styles.col} ${styles.colL}`}>
            {children}
            </div>
        <div className={`${styles.col} ${styles.colR}`}>
            Code snippet here
        </div>
            
        </div> );
}
 
export default Test