import React from 'react';
import styles from './use-case.module.css';

const UseCase = ({children}) => {
    return ( <div className={styles.container}>
        {/* Col */}
        <div className={`${styles.col} ${styles.colL}`}>
            {children}
            </div>
            {/* Col */}
        <div className={`${styles.col} ${styles.colR}`}>
            Code snippet here
        </div>
            
        </div> );
}
 
export default UseCase