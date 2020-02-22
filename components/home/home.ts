import { LitElement, customElement, html, css, property } from 'lit-element';

@customElement('app-home')
export class HomeComponent extends LitElement {

  @property() name;

  static styles = css`
    :host {
      background: rgba(255,255,255,.5);
      display: block;
      min-height: 500px;
      padding: 1rem;
    }

    h1 {
      color: white;
      font-size: 2rem;
      margin: 0 ;
    }

    p {
      color: #333;
      font-size: 1rem;
      line-height; 1.5rem;
    }
  `

  render() {
    return html`
      <h1>Home</h1>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan nunc in sapien dapibus, eget imperdiet odio elementum. Suspendisse potenti. Donec libero eros, fringilla non urna eu, laoreet scelerisque dui. Quisque vitae lorem est. Vivamus urna enim, mollis at scelerisque ac, viverra in nisi. Aenean vulputate turpis in nulla hendrerit, sed feugiat risus tempus. Nulla facilisi. Nulla facilisi. Integer lacinia varius hendrerit. Sed id mollis quam, ut vulputate nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan consequat augue, sed elementum eros pharetra sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id massa elit.

Cras eget justo dignissim, blandit urna non, ultricies velit. Morbi sagittis eu ante nec posuere. Aliquam ornare nulla ex, eget aliquet magna tempus quis. Suspendisse porttitor augue quis fermentum efficitur. Cras est purus, elementum ultrices eros et, viverra interdum eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam scelerisque vestibulum pharetra. Praesent metus nisl, tincidunt vitae risus id, vulputate cursus mi. Duis eget arcu tincidunt, fringilla libero vitae, tempus odio. Vivamus purus lacus, tristique non laoreet eget, tempor et orci. Phasellus sit amet consequat massa. Donec dictum eu dui sit amet tempor.

Vestibulum maximus eu est eget dignissim. Donec ut purus eget sapien fringilla imperdiet ut in orci. Phasellus ut lacus nisi. Proin ornare mi et ex facilisis, a interdum leo viverra. Nunc orci enim, sodales quis justo id, imperdiet mattis ligula. Suspendisse cursus sollicitudin blandit. Nullam ac aliquam massa. Phasellus ut quam scelerisque, feugiat tellus at, pharetra lacus. Ut nec nulla a magna tincidunt posuere at tincidunt elit. Suspendisse potenti. Mauris volutpat eros ut mauris congue, eu interdum enim feugiat. Donec rhoncus laoreet tincidunt. Sed ut orci sed sem malesuada placerat ut eget neque. Mauris pharetra quam quis lacus condimentum mollis. Nullam egestas vulputate massa, et accumsan tellus. Integer ut hendrerit lectus.

Fusce venenatis, erat a condimentum egestas, purus nulla dapibus ipsum, nec porttitor nunc dolor ac mi. Nullam faucibus risus cursus, placerat sem a, fermentum elit. Maecenas laoreet sollicitudin dui ut aliquet. Proin ut ligula in ligula faucibus aliquet. Etiam viverra ex at sapien sagittis ultricies. Sed vel semper erat. Nulla malesuada justo varius, euismod mauris ac, sollicitudin eros. Nam pretium a purus non tristique. Vestibulum congue a dolor ut tempus. Pellentesque id fermentum ipsum. Vestibulum ornare, lectus a commodo mattis, tortor massa gravida orci, commodo facilisis diam sem sit amet ex. Suspendisse facilisis commodo est, nec vulputate nulla elementum ut. Cras ut porttitor leo, vel auctor augue. Donec ac orci ac dui placerat rutrum. Duis volutpat arcu sit amet tellus vestibulum, sit amet porta metus facilisis. Quisque id ligula enim.

Maecenas ac pharetra ex. Aliquam non purus consequat, aliquet dolor nec, varius orci. Nunc eu orci egestas, euismod mauris quis, pulvinar nulla. In hac habitasse platea dictumst. Curabitur vulputate, quam at finibus posuere, diam dolor sagittis nibh, vel congue nunc eros sit amet turpis. Proin augue velit, rhoncus eget viverra eget, accumsan quis nibh. Nunc a mattis lorem, ut iaculis sapien. Nullam placerat ante nec magna elementum, non ultrices tellus vulputate.
      </p>

    `;
  }
}