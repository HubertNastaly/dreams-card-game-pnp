import { css } from 'lit';

export const CARD_SIZE = 140;

export const cardStyles = css`
  .card-container {
    --offset: 50px;

    position: relative;
    display: block;
    width: ${CARD_SIZE}px;
    height: ${CARD_SIZE}px;


    transition: transform 0.5s cubic-bezier(0.79,-0.44, 0.57, 0.98), opacity 0.5s ease;

    &.top-left {
      &.initial-offset {
        transform: translateX(calc(var(--offset) * -1));
        opacity: 0;
      }

      &.stacked {
        transform: translateX(50%) translateY(50%);
        &:not(.winning) {
          opacity: 0;
        }
      }

      &.final-offset {
        opacity: 0;
        &.winning {
          transform: translateX(200%) translateY(50%);
        }
      }
    }

    &.top-right {
      &.initial-offset {
        transform: translateY(calc(var(--offset) * -1));
        opacity: 0;
      }

      &.stacked {
        transform: translateX(-50%) translateY(50%);
        &:not(.winning) {
          opacity: 0;
        }
      }

      &.final-offset {
        opacity: 0;
        &.winning {
          transform: translateX(100%) translateY(50%);
        }
      }
    }

    &.bottom-left {
      &.initial-offset {
        transform: translateY(var(--offset));
        opacity: 0;
      }

      &.stacked {
        transform: translateX(50%) translateY(-50%);
        &:not(.winning) {
          opacity: 0;
        }
      }

      &.final-offset {
        opacity: 0;
        &.winning {
          transform: translateX(200%) translateY(-50%);
        }
      }
    }

    &.bottom-right {
      &.initial-offset {
        transform: translateX(var(--offset));
        opacity: 0;
      }

      &.stacked {
        transform: translateX(-50%) translateY(-50%);
        &:not(.winning) {
          opacity: 0;
        }
      }

      &.final-offset {
        opacity: 0;
        &.winning {
          transform: translateX(100%) translateY(-50%);
        }
      }
    }

    &.stroke-only {
      *:is(rect, circle, path):not([style*="stroke"]) {
        filter: grayscale(1);
      }

      img {
        filter: grayscale(1);
      }
    }

    &.scaled-up {
      transform: scale(1.1);
    }

    *:is(rect, circle, path):not([style*="stroke"]) {
      transition: filter 0.5s ease;
    }

    img {
      transition: filter 0.5s ease;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 4px;
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;