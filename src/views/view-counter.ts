import { LitElement, customElement, property, html } from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'

console.log('view-counter registered')

@customElement("view-counter")
export class CounterElement extends connect(store, LitElement) {
  private static readonly Observer = window.Polyfilled.then(() => new IntersectionObserver(entries => entries
    .filter(entry => entry.isIntersecting)
    .map(entry => <CounterElement>entry.target)
    .forEach(el => console.log('view-counter visible', el)))
  )

  @property({ type: Number }) count = 0

  constructor() {
    super()
    console.log('view-counter constructed')
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('view-counter connected')
    CounterElement.Observer.then(o => o.observe(this))
  }

  disconnectedCallback() {
    CounterElement.Observer.then(o => o.unobserve(this))
    console.log('view-counter disconnected')
    super.disconnectedCallback()
  }

  mapState(state: State) {
    return {
      count: state.counter
    }
  }

  render() {
    return html`
      <button @click=${store.dispatch.counter.dec}>-</button>
      <span>${this.count}</span>
      <button @click=${store.dispatch.counter.inc}>+</button>`
  }
}
