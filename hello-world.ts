import { LitElement, customElement, html, property } from 'lit-element';

@customElement('hello-world')
export class HelloElement extends LitElement {

  @property() name;

  render() {
    return html`
      <div>Hello ${this.name}</div>
    `;
  }
}