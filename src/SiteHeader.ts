import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('site-header')
export class SiteHeader extends LitElement {
  static styles = css`
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
  `;

  render() {
    return html`
      <header>
        <img width="300px" src="src/assets/header/logo-dream.webp" alt="Dreams Board Game Logo" />
      </header>
    `;
  }
}
