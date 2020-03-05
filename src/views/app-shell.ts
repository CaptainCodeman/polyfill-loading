import { customElement, LitElement, html, css } from 'lit-element'

import './app-routes'

@customElement('app-shell')
export class AppShellElement extends LitElement {
  render() {
    return html`
      <app-routes></app-routes>
    `
  }

  static get styles() {
    return css`
      app-routes {
        height: 100%;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
    `
  }
}
