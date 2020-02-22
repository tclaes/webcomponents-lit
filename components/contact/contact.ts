import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('app-contact')
export class ContactComponent extends LitElement {

  @property() name;

  static styles = css`
    :host {
      color: white;
      display: block;
      font-size: 2rem;
    }
  `

  render() {
    return html`
      <div>Hello ${this.name}</div>
    `;
  }
}