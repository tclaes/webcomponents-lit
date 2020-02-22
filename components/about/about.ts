import { LitElement, customElement, html, css, property } from 'lit-element';
import { paragraphStyles } from '../../styles/paragraphs.ts';

@customElement('app-about')
export class AboutComponent extends LitElement {

  @property() name;

  static get styles() {
    return [
      paragraphStyles,
      css`
        :host {
          color: white;
          display: block;
          font-size: 2rem;
        }
      `
    ]
  }

  render() {
    return html`
      <div>Hello ${this.name}</div>
    `;
  }
}