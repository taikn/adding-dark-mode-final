import React from 'react'
import { initColorModeCompressd } from './src/colormode'

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes
}) => {
  setPreBodyComponents(
    <script
      key='initColorMode'
      dangerouslySetInnerHTML={{ __html: initColorModeCompressd }}
    />
  )
  setBodyAttributes({
    'data-loading': true
  })
}
