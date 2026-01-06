import { LitElement, type ReactiveController } from 'lit';

const ANIMATION_SCHEDULE = {
  START: 700,
  ALL_COLORIZED: 1300,
  ONLY_STROKES: 1500,
  SHAPE_HIGHLIGHTED: 1500,
  CARDS_STACKED: 500,
  END: 500,
} satisfies Record<string, number>;

export type AnimationStage = keyof typeof ANIMATION_SCHEDULE;

export class RulesAnimationController implements ReactiveController {
  public stage: AnimationStage = 'START';
  #timeoutId: number | null = null;
  #host: LitElement;

  constructor(host: LitElement) {
    host.addController(this);
    this.#host = host;
  }

  hostConnected(): void {
    this.#runAnimation();
  }

  hostDisconnected(): void {
    if (this.#timeoutId !== null) {
      clearTimeout(this.#timeoutId);
    }
  }

  #setStage(stage: AnimationStage) {
    this.stage = stage;
    this.#host.requestUpdate();
  }

  async #runAnimation() {
    const stages = Object.keys(ANIMATION_SCHEDULE) as AnimationStage[];
    
    let i = 0;
    while (true) {
      const stage = stages[i];
      this.#setStage(stage);
      const delay = ANIMATION_SCHEDULE[stage];
      await new Promise(resolve => {
        this.#timeoutId = setTimeout(resolve, delay)
      });
      i = (i + 1) % stages.length;
    }
  }
}
