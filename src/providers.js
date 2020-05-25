import React from 'react'
import ColorModeProvider from '../src/components/ColorModeProvider'

export default ({ element }) => (
  <ColorModeProvider>
    {element}
  </ColorModeProvider>
)
