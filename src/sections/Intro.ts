import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { isSafari, sectionStyles } from "../common";

const getRotatingSquirrelShapesAnimation = () => css`
  @keyframes shape1 {
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes shape2 {
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes shape3 {
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes shape4 {
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  #squirrel > g {
    &:nth-child(1) path {
      transform: translate3d(20%, -30%, 0) rotate(435deg);
      animation-name: shape1;
      animation-delay: 3s;
    }

    &:nth-child(2) path {
      transform: translate3d(50%, -80%, 0) rotate(455deg);
      animation-name: shape2;
      animation-delay: 3.05s;
    }

    &:nth-child(3) path {
      transform: translate3d(-10%, 500%, 0) rotate(505deg);
      animation-name: shape3;
      animation-delay: 3.1s;
    }

    &:nth-child(4) path {
      transform: translate3d(-300%, -400%, 0) rotate(460deg);
      animation-name: shape4;
      animation-delay: 3.15s;
    }
  }
`;

@customElement('intro-section')
export class IntroSection extends LitElement {
  static styles = [sectionStyles, !isSafari() ? getRotatingSquirrelShapesAnimation() : css``, css`
    section {
      position: relative;
      padding: 64px 0;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 32px;
    }

    #frame-placeholder {
      position: absolute;
      z-index: -1;
      width: 82%;
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;

      transform: rotate(-5deg);

      &::before, &::after {
        width: 50%;
        content: '';
        border: 2px #eee solid;
      }

      &::before {
        height: 94%;
        border-right: none;
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
      }

      &::after {
        height: 100%;
        border-left: none;
        border-radius: 0 100% 100% 0 / 0 50% 50% 0;
      }
    }

    p {
      max-width: 400px;
      font-family: 'Oxygen', sans-serif;
    }

    svg {
      flex-shrink: 0;
      overflow: visible;
    }

    @keyframes popup {
      0% {
        opacity: 0;
        transform: scale(0.01) rotate(35deg);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.3) rotate(35deg);
      }
      100% {
        opacity: 1;
        transform: rotate(35deg);
      }
    }

    #squirrel {
      & > g {
        path {
          animation-duration: 1s;
          animation-timing-function: cubic-bezier(0, 0, 0, 1);
          animation-fill-mode: forwards;

          transform-origin: center;
          transform-box: fill-box;
        }
      }
    }

    #acorn {
      opacity: 0;
      transform: rotate(35deg);
      animation: 0.3s ease-out 5s popup forwards;
    }
  `];

  get squirrel() {
    return html`
      <svg width="200px" viewBox="0 0 569 459" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
        <g transform="matrix(1,0,0,1,-155,-203)">
            <g id="squirrel">
                <g transform="matrix(1.16741,1.55132,1.55132,-1.16741,-404.451,402.84)">
                    <path d="M371.911,276.391C371.911,348 313.773,406.137 242.165,406.137C170.556,406.137 112.419,348 112.419,276.391L371.911,276.391Z" style="fill:rgb(255,207,110);"/>
                </g>
                <g transform="matrix(1.06194,0,0,1.06194,-55.7878,-30.1742)">
                    <path d="M618.496,398.997L553.425,651.347L726.42,454.546L618.496,398.997Z" style="fill:rgb(0,214,97);"/>
                </g>
                <g transform="matrix(1.06194,0,0,1.06194,-55.7878,-30.1742)">
                    <!-- stroke:rgb(0,116,52);stroke-width:5.89px; -->
                    <path d="M597.864,302.184L616.909,381.539L731.181,345.036L597.864,302.184Z" style="fill:rgb(0,214,97)"/>
                </g>
                <g transform="matrix(1.06194,0,0,1.06194,-55.7878,-30.1742)">
                    <path d="M605.8,603.734L656.587,644.999L659.761,543.424L605.8,603.734Z" style="fill:rgb(0,214,97);"/>
                </g>
            </g>
        </g>
    </svg>
    `
  }

  render() {
    return html`
      <section>
        <span id="frame-placeholder"></span>
        <div>
          ${this.squirrel}
          <img id="acorn" width="30px" src="src/assets/acorn.svg" />
        </div>
        <p>
          Czy spotykasz w snach rzeczy i symbole, które pozornie nie mają ze sobą za wiele wspólnego?
          Kiedy przyjrzysz się im dłużej, zobaczysz, że niektóre z nich wydają się mieć większe znaczenie niż inne.
          <br/>
          <b>Wskaż je zanim zrobią to inni gracze!</b>
        </p>
      </section>
    `;
  }
}