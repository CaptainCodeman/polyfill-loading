// Promise-like:
window.Polyfilled = {
  cbs: [],
  then(cb) {
    this.cbs.push(cb)
  },
  resolve() {
    for (var i = 0; i < this.cbs.length; i++) {
      this.cbs[i]()
    }
    this.then = (cb) => cb()
  }
}
window.polyfilled = window.Polyfilled.resolve.bind(window.Polyfilled)

// minified
window.Polyfilled={cbs:[],then(l){this.cbs.push(l)},resolve(){for(var l=0;l<this.cbs.length;l++)this.cbs[l]();this.then=(l=>l())}},window.polyfilled=window.Polyfilled.resolve.bind(window.Polyfilled);