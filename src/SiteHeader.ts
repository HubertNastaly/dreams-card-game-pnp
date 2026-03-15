import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import logoUrl from './assets/header/logo-dream.avif';
import logoFallbackUrl from './assets/header/logo-dream.webp';

@customElement('site-header')
export class SiteHeader extends LitElement {
  static styles = [css`
    header {
      width: 100%;
      height: 298px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    img {
      margin-top: 64px;
      margin-bottom: 64px;
    }
  `, css`
    @media screen and (max-width: 1080px) {
      img {
        margin-top: 48px;
      }
     }
   `];

  render() {
    return html`
      <header>
        <picture>
          <source srcset="${logoUrl}" />
          <img width="300px" src=${logoFallbackUrl} alt="Dreams Board Game Logo" />
        </picture>
      </header>
    `;
  }
};
