import { customElement, LitElement, html, property } from 'lit-element'
import { unsafeHTML } from 'lit-html/directives/unsafe-html'
import { connect } from '@captaincodeman/rdx'
import { RoutingState } from '@captaincodeman/rdx-model'
import { store, State } from '../store'
import { baseStyle } from './shared-styles'

@customElement('app-shell')
export class AppShellElement extends connect(store, LitElement) {
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
