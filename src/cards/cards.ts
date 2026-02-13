import { css, html, LitElement, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { cardStyles } from './card.styles';
import { classMap } from 'lit/directives/class-map.js';
import type { AnimationStage } from './RulesAnimationController';
import { isSafari } from '../common';
import backgroundUrl from '../assets/cards/card-background.webp';

const NEUTRAL_GRAY = '#aaa';

type Location = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

@customElement('animated-card')
export class AnimatedCard extends LitElement {
    static styles = [cardStyles, !isSafari() ? css`filter: drop-shadow(0 0 16px rgba(0, 0, 0, 0.05));` : css``];

    @property({ type: String })
    location!: Location;

    @property({ type: Boolean })
    isWinning!: boolean;

    @property({ type: String })
    animationStage!: AnimationStage;

    @property({ type: Object })
    svg: TemplateResult = html``;

    render() {
        const strokeOnly = this.animationStage === 'ONLY_STROKES' || (this.animationStage === 'SHAPE_HIGHLIGHTED' && !this.isWinning);

        return html`
        <div class=${classMap({
            'card-container': true,
            'stroke-only': strokeOnly,
            [this.location]: true,
            'initial-offset': this.animationStage === 'START',
            'stacked': this.animationStage === 'CARDS_STACKED',
            'final-offset': this.animationStage === 'END',
            'winning': this.isWinning,
            'scaled-up': this.animationStage === 'SHAPE_HIGHLIGHTED' && this.isWinning,
        })}>
            <img width="100%" height="100%" src="${backgroundUrl}" />
            ${this.svg}
        </div>
    `;
    }
}

@customElement('card-key')
export class CardKey extends LitElement {
    @property({ type: String })
    animationStage!: AnimationStage;

    @property({ type: Boolean })
    isWinning = false;

    @property({ type: String })
    location!: Location;

    #getActualColor(color: string) {
        const shouldGrayOut = this.animationStage === 'ONLY_STROKES' || (this.animationStage === 'SHAPE_HIGHLIGHTED' && !this.isWinning);
        return shouldGrayOut && isSafari() ? NEUTRAL_GRAY : color;
    }

    get svg(): TemplateResult {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 945 945" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g id="Klucz" transform="matrix(1,0,0,1,-26.087,38.6952)">
                    <g transform="matrix(1,0,0,1,26.087,-38.6952)">
                        <g transform="matrix(1,0,0,1,-26.087,38.6952)">
                            <g transform="matrix(1,0,0,1,-17.0978,-34.7416)">
                                <circle cx="356.805" cy="574.128" r="80.99" style="fill:${this.#getActualColor('rgb(255,131,170)')};" />
                            </g>
                            <g transform="matrix(0.556716,-0.573665,0.717629,0.696426,115.786,448.225)">
                                <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:rgb(90,171,255);stroke:rgb(0,48,172);stroke-width:6.9px;"/>
                            </g>
                            <g transform="matrix(0.892329,-0.905923,0.824845,0.812468,-171.68,349.842)">
                                <rect x="541.282" y="434.646" width="33.296" height="112.486" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                            </g>
                            <g transform="matrix(0.779238,-0.791109,0.522321,0.514483,-14.1257,456.323)">
                                <rect x="541.282" y="434.646" width="33.296" height="112.486" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                            </g>
                            <g transform="matrix(1,0,0,1,-14.6038,-15.8943)">
                                <g transform="matrix(100,0,0,100,698.403,813.498)">
                                </g>
                                <text x="375.003px" y="813.498px" style="font-family:'Lato-Regular', 'Lato', sans-serif;font-size:100px;">KLUCZ</text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        `;
    }

    render() {
        return html`
            <animated-card animationStage=${this.animationStage} .svg=${this.svg} location=${this.location} .isWinning=${this.isWinning}></animated-card>
        `
    }
}

@customElement('card-jellyfish')
export class CardJellyfish extends LitElement {
    @property({ type: String })
    animationStage!: AnimationStage;

    @property({ type: Boolean })
    isWinning = false;

    @property({ type: String })
    location!: Location;

    #getActualColor(color: string) {
        const shouldGrayOut = this.animationStage === 'ONLY_STROKES' || (this.animationStage === 'SHAPE_HIGHLIGHTED' && !this.isWinning);
        return shouldGrayOut && isSafari() ? NEUTRAL_GRAY : color;
    }

    get svg(): TemplateResult {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 945 945" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g id="Meduza" transform="matrix(1,0,0,1,-26.087,38.6952)">
                    <g transform="matrix(1,0,0,1,26.087,-38.6952)">
                        <g transform="matrix(1,0,0,1,-26.087,38.6952)">
                            <g transform="matrix(-0.331945,-0.639036,0.425455,-0.221001,538.428,824.715)">
                                <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:rgb(90,171,255);stroke:rgb(0,48,172);stroke-width:10.22px;"/>
                            </g>
                            <g transform="matrix(-0.402918,-0.775669,0.475126,-0.246802,650.168,898.039)">
                                <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                            </g>
                            <g transform="matrix(-0.381355,-0.734158,0.420991,-0.218682,704.888,827.378)">
                                <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                            </g>
                            <g transform="matrix(-0.897635,0.440739,-0.440739,-0.897635,776.718,393.522)">
                                <path d="M371.911,276.391C371.911,348 313.773,406.137 242.165,406.137C170.556,406.137 112.419,348 112.419,276.391L371.911,276.391Z" style="fill:${this.#getActualColor('rgb(255,207,110)')};"/>
                            </g>
                            <g transform="matrix(1,0,0,1,-38.5283,-15.8943)">
                                <g transform="matrix(100,0,0,100,751.103,813.498)">
                                </g>
                                <text x="322.303px" y="813.498px" style="font-family:'Lato-Regular', 'Lato', sans-serif;font-size:100px;">MEDUZA</text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        `;
    }

    render() {
        return html`
            <animated-card animationStage=${this.animationStage} .svg=${this.svg} location=${this.location} .isWinning=${this.isWinning}></animated-card>
        `
    }
}

@customElement('card-sword')
export class CardSword extends LitElement {
    @property({ type: String })
    animationStage!: AnimationStage;

    @property({ type: Boolean })
    isWinning = false;

    @property({ type: String })
    location!: Location;

    #getActualColor(color: string) {
        const shouldGrayOut = this.animationStage === 'ONLY_STROKES' || (this.animationStage === 'SHAPE_HIGHLIGHTED' && !this.isWinning);
        return shouldGrayOut && isSafari() ? NEUTRAL_GRAY : color;
    }

    get svg(): TemplateResult {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 945 945" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g id="Miecz" transform="matrix(1,0,0,1,-26.087,38.6952)">
                    <g>
                        <g transform="matrix(0.473499,0.0967666,-0.0967666,0.473499,211.463,313.831)">
                            <circle cx="356.805" cy="574.128" r="80.99" style="fill:rgb(255,131,170);stroke:rgb(175,0,92);stroke-width:12.93px;"/>
                        </g>
                        <g transform="matrix(0.566503,-0.65754,0.953422,0.821421,121.244,463.461)">
                            <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                        </g>
                        <g transform="matrix(0.0651298,-0.0755961,0.716705,0.617477,194.514,473.983)">
                            <rect x="233.521" y="188.976" width="516.536" height="28.796" style="fill:${this.#getActualColor('rgb(90,171,255)')};"/>
                        </g>
                        <g transform="matrix(0.385646,0.331075,-0.331075,0.385646,437.585,298.51)">
                            <path d="M371.911,276.391C371.911,348 313.773,406.137 242.165,406.137C170.556,406.137 112.419,348 112.419,276.391L371.911,276.391Z" style="fill:${this.#getActualColor('rgb(255,207,110)')};"/>
                        </g>
                        <g transform="matrix(1,5.55112e-17,-5.55112e-17,1,-38.0254,-15.8943)">
                            <g transform="matrix(100,0,0,100,692.553,813.498)">
                            </g>
                            <text x="380.853px" y="813.498px" style="font-family:'Lato-Regular', 'Lato', sans-serif;font-size:100px;">MIECZ</text>
                        </g>
                    </g>
                </g>
            </svg>
        `
    }

    render() {
        return html`
            <animated-card animationStage=${this.animationStage} .svg=${this.svg} location=${this.location} .isWinning=${this.isWinning}></animated-card>
        `
    }
}

@customElement('card-frog')
export class CardFrog extends LitElement {
    @property({ type: String })
    animationStage!: AnimationStage;

    @property({ type: Boolean })
    isWinning = false;

    @property({ type: String })
    location!: Location;

    #getActualColor(color: string) {
        const shouldGrayOut = this.animationStage === 'ONLY_STROKES' || (this.animationStage === 'SHAPE_HIGHLIGHTED' && !this.isWinning);
        return shouldGrayOut && isSafari() ? NEUTRAL_GRAY : color;
    }

    get svg(): TemplateResult {
        return html`
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 945 945" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
                <g id="Żaba" transform="matrix(1,0,0,1,-26.087,38.6952)">
                    <g>
                        <g transform="matrix(0.266654,0,0,0.266654,569.859,97.4391)">
                            <circle cx="356.805" cy="574.128" r="80.99" style="fill:${this.#getActualColor('rgb(255,131,170)')};"/>
                        </g>
                        <g transform="matrix(1.31837,0,0,1.31837,-105.92,-272.915)">
                            <path d="M266.284,639.778L658.524,414.899L399.678,440.414L266.284,639.778Z" style="fill:${this.#getActualColor('rgb(0,214,97)')};"/>
                        </g>
                        <g transform="matrix(1.15385,0,0,1.15385,-40.1758,-157.08)">
                            <path d="M267.601,626.906L445.495,525.909L537.073,628.234L267.601,626.906Z" style="fill:${this.#getActualColor('rgb(0,214,97)')};"/>
                        </g>
                        <g transform="matrix(-0.781102,0.450969,0.450969,0.781102,679.716,44.6448)">
                            <path d="M371.911,276.391C371.911,348 313.773,406.137 242.165,406.137C170.556,406.137 112.419,348 112.419,276.391L371.911,276.391Z" style="fill:rgb(255,207,110);stroke:rgb(205,127,0);stroke-width:6.93px;"/>
                        </g>
                        <g transform="matrix(1,0,0,1,-38.0254,-15.8943)">
                            <g transform="matrix(100,0,0,100,668.253,813.498)">
                            </g>
                            <text x="405.153px" y="813.498px" style="font-family:'Lato-Regular', 'Lato', sans-serif;font-size:100px;">ŻABA</text>
                        </g>
                    </g>
                </g>
            </svg>
        `
    }

    render() {
        return html`
            <animated-card animationStage=${this.animationStage} .svg=${this.svg} location=${this.location} .isWinning=${this.isWinning}></animated-card>
        `
    }
}
