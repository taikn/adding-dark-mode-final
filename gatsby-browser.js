import './static/fonts/fonts.css'
import './src/globals.css'
import wrapWithProviders from './src/providers'

export const wrapRootElement = wrapWithProviders

export const onClientEntry = () => {
  window.addEventListener('load', () => {
    document.body.removeAttribute('data-loading');
  })
}
