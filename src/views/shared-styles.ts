import { css } from 'lit-element';

export const baseStyle = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  :host([hidden]), [hidden] {
    display: none !important;
  }
`