import React from 'react'
import styles from './styles.module.css'

export default ({ children }) => (
  <h1 className={styles.primaryHeading}>
    {children}
  </h1>
)
