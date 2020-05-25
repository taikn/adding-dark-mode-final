import React from 'react'
import styles from './styles.module.css'

export default ({ id, checked, children, ...rest }) => {
  const checkedIconStyles = checked
    ? styles.checkedIconWrapper
    : styles.iconWrapper
  return (
    <div className={styles.radioContainer}>
      <input
        className={styles.radioInput}
        id={id}
        checked={checked}
        type='radio'
        {...rest}
      />
      <label className={styles.radioLabel} htmlFor={id}>
        <span className={checkedIconStyles}>
          {children}
        </span>
      </label>
    </div>
  )
}
