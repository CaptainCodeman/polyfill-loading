import './views'

declare global {
  interface Window {
    Polyfilled: Promise<void>
    ResizeObserver: any
  }
}

window.Polyfilled.then(() => {
  console.log('polyfilled')
})

