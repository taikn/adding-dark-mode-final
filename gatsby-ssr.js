import React from 'react'
import { initColorModeCompressd } from './src/colormode'

export const onRenderBody = ({
  setBodyAttributes,
  setPreBodyComponents
}) => {
  setBodyAttributes({
    'data-loading': true
  })
  setPreBodyComponents(
    <script
      key='initColorMode'
      dangerouslySetInnerHTML={{ __html: initColorModeCompressd }}
    />
  )
}
