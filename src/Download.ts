import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { CONTENT_WIDTH, headingStyles } from "./common";

@customElement('download-section')
export class DownloadSection extends LitElement {
  static styles = [headingStyles, css`
    section {
      position: relative;
      color: white;
      overflow-y: clip;
      width: 100%;
      background: linear-gradient(135deg, #00C6FD, #003ACD);
    }

    #boat-wrapper {
      margin: 0 auto;
      width: ${CONTENT_WIDTH}px;
    }

    img:nth-of-type(1) {
      position: absolute;
      height: 100%;
      transform: translateX(-50%) rotate(-7deg) scale(1.05);

      @media (max-width: 1080px) {
        transform: translateY(30%) rotate(-7deg) scale(0.5);
      }
    }

    img:nth-of-type(2) {
      width: 80px;
      right: 0;
    }

    img:nth-of-type(3) {
      width: 180px;
      right: 0;
    }

    a {
      color: white;
    }

    #download-wrapper {
      margin: 0 auto;
      padding: 64px 0;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        margin-top: 0;
        margin-bottom: 32px;
      }

      #button-wrapper {
        margin-bottom: 24px;
        padding: 8px;
        border-radius: 1000px;
        background: linear-gradient(90deg, #F5A777, #D5495C);
      }

      button {
        width: fit-content;
        padding: 12px 64px;
        border: none;
        border-radius: 1000px;
        font-family: 'Sansita Swashed';
        font-size: 20px;
        font-weight: normal;
        color: white;
        background: linear-gradient(90deg, #F1954B, #C30322);
        cursor: pointer;
      }

      small {
        max-width: 600px;
        font-size: 11px;
        line-height: 1.5em;
        text-align: center;
      }
    }
  `];

  render() {
    return html`
      <section>
        <div id="boat-wrapper">
          <img src="src/assets/boat-white.svg" />
        </div>
        <div id="download-wrapper">
          <h2>Pobierz, wydrukuj i graj!</h2>
          <div id="button-wrapper">
            <button>Pobierz</button>
          </div>
          <small>
            Niniejsze materiały są udostępniane na licencji <b>Creative Commons BY-NC-ND 4.0</b>.
            <br/>
            Szczegóły licencji można znaleźć tutaj: <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">https://creativecommons.org/licenses/by-nc-nd/4.0/</a>
          </small>
        </div>
      </section>
    `;
  }
}