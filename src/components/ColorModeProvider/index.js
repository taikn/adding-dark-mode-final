import React, { useState } from 'react'
import { ColorModeContext } from '../ColorModeContext'

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

const getColorMode = () => {
  if (typeof window === 'undefined') return undefined
  return document.body.getAttribute('data-color-mode')
}

export default ({ children }) => {
  const [
    colorMode,
    setColorMode
  ] = useState(getColorMode)

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
