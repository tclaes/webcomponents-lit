
import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('navbar-link')
export class NavbarLink extends LitElement {

  @property() name;

  static styles = css`
    :host {
      color: white;
      display: block;
      font-size: 2rem;
    }

    .nav--item a {
      color: white;
      font-size: 1.2rem;
      font-weight: bolder;
      padding: 0 1rem 14px;
      text-decoration: none;
    }

    .nav--item a:hover {
      color: darkred;
      border-bottom: 6px solid darkred;
      padding-bottom: 14px;
    }
  `

  render() {
    return html`
      <li class="nav--item"><a href="${this.name}">${this.name}</a></li>
    `;
  }
}


