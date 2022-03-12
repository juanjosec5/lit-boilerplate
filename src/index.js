import {LitElement, css, html} from 'lit';
import Styles from './styles/main.scss'

import { Test } from './components/test/test-component';

export class MainApp extends LitElement {
  static get properties(){
    return {
      name: { type: String },
    };
  }

  static get styles() {
    return [Styles]
  }

  constructor() {
    super();
    this.name = 'World';
  }

  render() {
    return html`
      <test-component></test-component>
    `;
  }
}
customElements.define('main-app', MainApp);