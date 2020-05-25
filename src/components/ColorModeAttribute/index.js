/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import { ColorModeContext } from '../ColorModeContext'

export default ({ children }) => {
  const { colorMode } = useContext(ColorModeContext)
  
  useEffect(() => {
    document.body.setAttribute('data-color-mode', colorMode)
  }, [colorMode])

  return children
}
