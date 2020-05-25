import React from 'react'

export const onRenderBody = ({ setHeadComponents, setBodyAttributes }) => {
  setHeadComponents([
    <script
      key='/scripts/switchmode.js'
      src='/scripts/switchmode.js'
    />
  ])
  setBodyAttributes({
    'data-loading': true
  })
}
