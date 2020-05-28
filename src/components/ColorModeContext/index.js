import React from 'react'

export const ColorModeContext = React.createContext({
  colorMode: undefined,
  switchMode: undefined,
  handleSwitch: () => {}
})
