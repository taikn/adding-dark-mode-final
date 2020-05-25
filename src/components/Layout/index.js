import React from 'react'
import styles from './styles.module.css'
import ModeControls from '../ModeControls'
import ColorModeAttribute from '../ColorModeAttribute'

export default ({ children }) => (
  <ColorModeAttribute>
    <ModeControls />
    <div className={styles.layoutContainer}>
      {children}
    </div>
  </ColorModeAttribute>
)
