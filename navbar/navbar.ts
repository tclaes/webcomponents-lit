import { LitElement, customElement, html, css, property } from 'lit-element';
import './navbar-logo';

@customElement('navbar-element')
export class NavbarElement extends LitElement {

  @property() name;

  static styles = css`
    :host {
      background: white;
      box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.2);
      color: black;
      display: flex;
      margin: 0;
      padding: 1rem;
    }

    .nav {
      display: flex;
      list-style-type: none;
      font-size: 1.2rem;
      margin: 0 0 0 auto;
    }

    .nav--item {
      padding: 0 1rem;
    }

  `

  render() {
    return html`
      <navbar-logo name='${this.name}'></navbar-logo>
      <ul class="nav">
        <li class="nav--item">Home</li>
        <li class="nav--item">About</li>
        <li class="nav--item">Contact</li>
      </ul>
    `;
  }
}