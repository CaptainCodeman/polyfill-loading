import { LitElement, property, html, customElement } from 'lit-element'
import { connect } from '@captaincodeman/rdx'
import { store, State } from '../store'
import { baseStyle } from './shared-styles'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { RoutingState } from '@captaincodeman/rdx-model'

@customElement('app-routes')
export class AppRoutesElement extends connect(store, LitElement) {
  @property({ type: Object }) routing: RoutingState

  mapState(state: State) {
    return {
      routing: state.routing
    }
  }

  render() {
    switch (this.routing.page) {
      default:
        return html`${unsafeHTML(`<${this.routing.page}></${this.routing.page}>`)}`
    }
  }

  static get styles() {
    return [
      baseStyle,
    ]
  }
}