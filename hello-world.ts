import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('hello-world')
export class HelloElement extends LitElement {

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