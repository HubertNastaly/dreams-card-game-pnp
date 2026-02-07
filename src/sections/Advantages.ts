import { css, html, LitElement } from "lit";
import { customElement, query } from "lit/decorators.js";
import { headingStyles, mobileCss, sectionStyles, textSectionStyles } from "../common";

const CARD_SIZE = 140;

@customElement('advantages-section')
export class AdvantagesSection extends LitElement {
  static styles = [sectionStyles, headingStyles, textSectionStyles, css`
    @keyframes transformCard1 {
      0% {
        transform: perspective(1000px) rotateZ(-3deg) translateZ(0px);
      }
      100% {
        transform: perspective(1000px) translate3d(-30%, 55%, 60px) rotateX(-28deg) rotateY(-30deg) rotateZ(-3deg);
      }
    }

    @keyframes transformCard2 {
      0% {
        transform: perspective(1000px) rotateZ(-9deg) translateZ(0px);
      }
      100% {
        transform: perspective(1000px) translate3d(-40%, -25%, 50px) rotateX(30deg) rotateY(-24deg) rotateZ(3deg);
      }
    }

    @keyframes transformCard3 {
      0% {
        transform: perspective(1000px) rotateZ(6deg) translateZ(0px);
      }
      100% {
        transform: perspective(1000px) translate3d(70%, -50%, 70px) rotateX(29deg) rotateY(28deg) rotateZ(6deg);
      }
    }

    @keyframes transformCard4 {
      0% {
        transform: perspective(1000px) rotateZ(-5deg) translateZ(0px);
      }
      100% {
        transform: perspective(1000px) translate3d(80%, 50%, 80px) rotateX(-31deg) rotateY(35deg) rotateZ(9deg);
      }
    }

    section {
      display: flex;
    }

    #deck {
      position: relative;
      z-index: -1;
      width: ${CARD_SIZE}px;
      height: ${CARD_SIZE}px;
      filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.05));

      & img {
        width: ${CARD_SIZE}px;
        height: ${CARD_SIZE}px;
        border-radius: 4px;

        position: absolute;

        &:nth-child(1) {
          animation: transformCard1 0.5s cubic-bezier(0.87,-0.41, 0, 0.94) forwards;
          animation-play-state: paused;
          animation-delay: 0s;
        }
        &:nth-child(2) {
          animation: transformCard2 0.5s cubic-bezier(0.87,-0.41, 0, 0.94) forwards;
          animation-play-state: paused;
          animation-delay: 0.05s;
        }
        &:nth-child(3) {
          animation: transformCard3 0.5s cubic-bezier(0.87,-0.41, 0, 0.94) forwards;
          animation-play-state: paused;
          animation-delay: 0.1s;
        }
        &:nth-child(4) {
          animation: transformCard4 0.5s cubic-bezier(0.87,-0.41, 0, 0.94) forwards;
          animation-play-state: paused;
          animation-delay: 0.15s;
        }
      }
    }

    #deck.explode img {
      animation-play-state: running;
    }

    #advantages-list {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      column-gap: 16px;
      row-gap: 16px;
    }
  `, mobileCss`
    section {
      flex-direction: column;
      align-items: flex-start;
      gap: 64px;
    }

    #deck {
      margin: 0 auto;
    }
  `];

  #viewObserver!: IntersectionObserver;

  @query('#deck')
  private deck!: HTMLElement;

  firstUpdated(): void {
    this.#viewObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.deck.classList.add('explode');
        }
      })
    }, {
      threshold: 1,
      rootMargin: '0px 0px -50% 0px'
    })

    this.#viewObserver.observe(this.deck);
  }

  disconnectedCallback(): void {
    this.#viewObserver.disconnect();
  }

  render() {
    return html`
      <section>
        <div class="section-text">
          <h2>Za co możesz polubić tę grę?</h2>
          <div id="advantages-list">
            <img src="src/assets/bullets/circle.svg" /> <span>Zabierzesz ją ze sobą wszędzie - gra składa się z talii 48 kart. To wszystko.</span>
            <img src="src/assets/bullets/rectangle.svg" /> <span>Błyskawiczna rozgrywka pozwala Ci zagrać w dowolnej chwili.</span>
            <img src="src/assets/bullets/triangle.svg" /> <span>Ćwiczy refleks, spostrzegawczość i wyobraźnię.</span>
            <img src="src/assets/bullets/semicircle.svg" /> <span>Dorośli mogą rywalizować z młodszymi graczami na równym poziomie.</span>
          </div>
        </div>
        <div id="deck">
          <img src="src/assets/cards/space.webp" />
          <img src="src/assets/cards/vulture.webp" />
          <img src="src/assets/cards/warrior.webp" />
          <img src="src/assets/cards/rabbit.webp" />
        </div>
      </section>
    `;
  }
}
