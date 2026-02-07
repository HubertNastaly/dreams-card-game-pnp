import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../cards/cards';
import { CARD_SIZE } from '../cards/card.styles';
import { RulesAnimationController } from '../cards/RulesAnimationController';
import { sectionStyles, headingStyles, textSectionStyles } from '../common';

@customElement('rules-section')
export class RulesSection extends LitElement {
  static styles = [sectionStyles, headingStyles, textSectionStyles, css`
    #card-grid {
      display: grid;
      grid-template-columns: ${CARD_SIZE}px ${CARD_SIZE}px;
      gap: 16px;
    }
  `];

  #rulesAnimationController: RulesAnimationController = new RulesAnimationController(this);

  render() {
    return html`
      <section>
        <div id="card-grid">
          <card-key animationStage=${this.#rulesAnimationController.stage} location="top-left"></card-key>
          <card-jellyfish animationStage=${this.#rulesAnimationController.stage} location="top-right"></card-jellyfish>
          <card-sword animationStage=${this.#rulesAnimationController.stage} location="bottom-left" .isWinning=${true}></card-sword>
          <card-frog animationStage=${this.#rulesAnimationController.stage} location="bottom-right"></card-frog>
        </div>
        <div class="section-text">
          <h2>Na czym to polega?</h2>
          <p>Gracze po kolei wykładają karty ze wspólnej talii na stół. Karty przedstawiają różnego rodzaju symbole, które pojawiają się we śnie. Każdy z symboli składa się z kolorowych kształtów, przy czym jeden z nich jest wyróżniony obwódką. W chwili gdy któryś z widocznych na stole symboli można zbudować z dostępnych kształtów w obwódkach, należy powiedzieć na głos nazwę tego symbolu - najszybsza osoba zdobywa punkt. Wygrywa gracz, który zbierze najwięcej punktów do wyczerpania kart z talii. </p>
        </div>
      </section>
    `;
  }
}
