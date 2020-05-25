import React, { useState } from 'react'
import { ColorModeContext } from '../ColorModeContext'
import { initialSwitchMode } from '../ModeControls'

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

export default ({ children }) => {
  const [
    colorMode,
    setColorMode
  ] = useState(determineColorMode(initialSwitchMode))

  const activateColorMode = (switchMode) => {
    setColorMode(determineColorMode(switchMode))
  }

  return (
    <ColorModeContext.Provider
      value={{ colorMode, activateColorMode }}
    >
      {children}
    </ColorModeContext.Provider>
  )
}
