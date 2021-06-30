import React from 'react'
import styles from './use-case.module.css'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

const UseCase = ({ children }) => {
  return (
    <div className={styles.container}>
      {/* Col */}
      <div className={`${styles.col} ${styles.colL}`}>{children}</div>
      {/* Col */}
      <div className={`${styles.col} ${styles.colR}`}>
        Code snippet here
        <Tabs
          defaultValue="js"
          values={[
            { label: 'JavaScript', value: 'js' },
            { label: 'Python', value: 'py' },
            { label: 'Java', value: 'java' },
          ]}
        >
          <TabItem value="js">

            ```js function helloWorld() {console.log('Hello, world!')}
            ```

          </TabItem>
        </Tabs>
      </div>
    </div>
  )
}

export default UseCase
