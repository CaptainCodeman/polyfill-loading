import { LitElement, html, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { connect } from '@captaincodeman/rdx'
import { RoutingState } from '@captaincodeman/rdx-model'
import { store, State } from '../store'
import { baseStyle } from './shared-styles'

export class AppShellElement extends connect(store, LitElement) {
  @property({ type: Object }) routing: RoutingState

  mapState(state: State) {
    return {
      routing: state.routing
    }
  }
  
  router() {
    switch (this.routing.page) {
      default:
        return html`${unsafeHTML(`<${this.routing.page}></${this.routing.page}>`)}`
    }
  }

  render() {
    return html`
      <h1>App Shell</h1>
      <p>The amazing app &hellip;</p>
      ${this.router()}
    `
  }

  static get styles() {
    return [
      baseStyle,
    ]
  }
}
