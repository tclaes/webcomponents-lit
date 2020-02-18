import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('navbar-logo')
export class NavbarLogo extends LitElement {

  @property() name;
  @property() logoUrl;

  

  static styles = css`
    :host {
      display: block;
    }

    .name {
      font-size: 2rem;
      line-height: 2rem;
      padding: 0;
      margin: 0;
    }
  `

  render() {
    return html`
    ${this.logoUrl ?
      html`<div class="logo">${this.logoUrl}</div>`:
      html`<div class="name">${this.name}</div>`
      }
    `;
  }
}