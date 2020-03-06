import { AppShellElement } from './app-shell'
import { CounterElement } from './view-counter'

export const register = () => {
  customElements.define('app-shell', AppShellElement)
  customElements.define('view-counter', CounterElement)
}
