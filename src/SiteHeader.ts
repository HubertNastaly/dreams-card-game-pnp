import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import logoUrl from './assets/header/logo-dream.webp';

@customElement('site-header')
export class SiteHeader extends LitElement {
  static styles = [css`
    header {
      width: 100%;
      min-height: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      margin-top: 100px;
      margin-bottom: 80px;
    }
  `, css`
    @media screen and (max-width: 1080px) {
      header {
        min-height: 0;
      }
      img {
        margin-top: 64px;
        margin-bottom: 64px;
      }
     }
   `];

  render() {
    return html`
      <header>
        <img width="300px" src="${logoUrl}" alt="Dreams Board Game Logo" />
      </header>
    `;
  }
}
