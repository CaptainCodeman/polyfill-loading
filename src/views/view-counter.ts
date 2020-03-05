import { LitElement, customElement, property, html } from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'

@customElement("view-counter")
export class CounterElement extends connect(store, LitElement) {
  private static readonly Observer = new IntersectionObserver(entries => entries
    .filter(entry => entry.isIntersecting)
    .map(entry => <CounterElement>entry.target)
    .forEach(el => console.log('visible', el)))

  @property({ type: Number }) count = 0

  connectedCallback() {
    super.connectedCallback()
    CounterElement.Observer.observe(this)
  }

  disconnectedCallback() {
    CounterElement.Observer.unobserve(this)
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

console.log('view-counter registered')
