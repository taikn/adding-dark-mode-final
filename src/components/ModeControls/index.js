import React, { useState, useContext } from 'react'
import styles from './styles.module.css'
import DayIcon from '../DayIcon'
import NightIcon from '../NightIcon'
import AutoIcon from '../AutoIcon'
import ModeRadioButton from '../ModeRadioButton'
import { ColorModeContext } from '../ColorModeContext'

const saveSwitchMode = (switchMode) => {
  if (typeof window === 'undefined') return undefined
  window.localStorage &&
    window.localStorage.setItem('switchMode', switchMode)
}

const getSwitchMode = () => {
  if (typeof window === 'undefined') return undefined
  if (window.localStorage &&
      window.localStorage.getItem('switchMode')) {
    return window.localStorage.getItem('switchMode')
  }
  return 'auto'
}

export const initialSwitchMode = getSwitchMode()

export default () => {
  const [switchMode, setSwitchMode] = useState(initialSwitchMode)
  const { activateColorMode } = useContext(ColorModeContext)

  const handleSwitch = (switchMode) => {
    saveSwitchMode(switchMode)
    setSwitchMode(switchMode)
    activateColorMode(switchMode)
  }

  if (!switchMode) {
    return <div className={styles.controlsContainer} />
  }

  return (
    <div className={styles.controlsContainer}>
      <ModeRadioButton
        id='daySwitchMode'
        name='switchMode'
        value='day'
        onChange={() => handleSwitch('day')}
        checked={switchMode === 'day'}
      >
        <DayIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='autoSwitchMode'
        name='switchMode'
        value='auto'
        onChange={() => handleSwitch('auto')}
        checked={switchMode === 'auto'}
      >
        <AutoIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='nightSwitchMode'
        name='switchMode'
        value='night'
        onChange={() => handleSwitch('night')}
        checked={switchMode === 'night'}
      >
        <NightIcon size='28px' />
      </ModeRadioButton>
    </div>
  )
}
