interface Window {
  Polyfilled: Promise<void>
  ResizeObserver: any
}

window.Polyfilled.then(() => {
  console.log('polyfilled')
  console.log(new window.ResizeObserver(() => {}))
  import ('./views')
})