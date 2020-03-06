import { LitElement, property, html } from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'

export class CounterElement extends connect(store, LitElement) {
  private static readonly Observer = new IntersectionObserver(entries => entries
    .filter(entry => entry.isIntersecting)
    .map(entry => <CounterElement>entry.target)
    .forEach(_el => console.log('view-counter visible')))

  @property({ type: Number }) count = 0

  constructor() {
    super()
    console.log('view-counter constructed')
  }

  connectedCallback() {
    super.connectedCallback()
    console.log('view-counter connected')
    CounterElement.Observer.observe(this)
  }

  disconnectedCallback() {
    CounterElement.Observer.unobserve(this)
    console.log('view-counter disconnected')
    super.disconnectedCallback()
  }

  mapState(state: State) {
    return {
      count: state.counter
    }
  }

  render() {
    console.log('view-counter render')
    return html`
      <h2>Counter</h2>
      <p>Behold, the counter of clicks!</p>
      <button @click=${store.dispatch.counter.dec}>-</button>
      <span>${this.count}</span>
      <button @click=${store.dispatch.counter.inc}>+</button>`
  }
}
