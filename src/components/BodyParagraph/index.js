import React from 'react'
import styles from './styles.module.css'

export default ({ children }) => (
  <p className={styles.bodyParagraph}>
    {children}
  </p>
)
