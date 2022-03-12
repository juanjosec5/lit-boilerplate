import {LitElement, css, html} from 'lit';
import Styles from './test-component.scss'

export class Test extends LitElement {
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
      <h1>Testing here</h1>
    `;
  }
}
customElements.define('test-component', Test);