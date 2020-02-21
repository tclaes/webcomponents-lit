import { LitElement, customElement, html, css, property } from 'lit-element';
import './navbar-logo';
import './navbar-link';

@customElement('navbar-element')
export class NavbarElement extends LitElement {

  @property() name;

  static styles = css`
    :host {
      background: rgba(0,0,0,0.3);
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
        <navbar-link name="Home"></navbar-link>
        <navbar-link name="About"></navbar-link>
        <navbar-link name="Contact"></navbar-link>
      </ul>
    `;
  }
}