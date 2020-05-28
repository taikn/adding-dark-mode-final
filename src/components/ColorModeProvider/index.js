import React, { useState } from 'react'
import { ColorModeContext } from '../ColorModeContext'
import { storageAvailable } from '../../utils'

const determineColorMode = (switchMode) => {
  switch (switchMode) {
    case 'night':
      return 'dark'
    case 'auto':
      if (window.matchMedia(
        '(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    // falls through
    default:
      return 'light'
  }
}

const saveSwitchMode = (switchMode) => {
  if (typeof window === 'undefined') return undefined
  if (storageAvailable()) {
    window.localStorage.setItem('switchMode', switchMode)
  }
}

const getSwitchMode = () => {
  if (typeof window === 'undefined') return undefined
  if (storageAvailable() &&
    window.localStorage.getItem('switchMode')) {
    return window.localStorage.getItem('switchMode')
  }
  return 'auto'
}

const initialSwitchMode = getSwitchMode()

export default ({ children }) => {
  const [
    colorMode,
    setColorMode
  ] = useState(determineColorMode(initialSwitchMode))

  const [
    switchMode,
    setSwitchMode
  ] = useState(initialSwitchMode)

  const handleSwitch = (switchMode) => {
    saveSwitchMode(switchMode)
    setSwitchMode(switchMode)
    setColorMode(determineColorMode(switchMode))
  }

  return (
    <ColorModeContext.Provider
      value={{ colorMode, switchMode, handleSwitch }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
