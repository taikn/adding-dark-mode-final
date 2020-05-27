import React from 'react'

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    <script
      key='/scripts/colormode.js'
      src='/scripts/colormode.js'
    />
  ])
  setBodyAttributes({
    'data-loading': true
  })
}
