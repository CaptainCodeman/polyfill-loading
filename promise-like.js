// Promise-like:
window.Polyfilled = {
  resolved: false,
  cbs: [],
  then(cb) {
    if (this.resolved) {
      cb()
    } else {
      this.cbs.push(cb)
    }
  },
  resolve() {
    for (var i = 0; i < this.cbs.length; i++) {
      this.cbs[i]()
    }
    this.resolved = true
  }
}
window.polyfilled = window.Polyfilled.resolve.bind(window.Polyfilled)

// minified
window.Polyfilled={r:!1,cbs:[],then(l){this.r?l():this.cbs.push(l)},resolve(){for(var l=0;l<this.cbs.length;l++)this.cbs[l]();this.r=!0}},window.polyfilled=window.Polyfilled.resolve.bind(window.Polyfilled);