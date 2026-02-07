import { css } from "lit";

export const CONTENT_WIDTH = 960;
export const MOBILE_BREAKPOINT = 800;

export const mobileCss = (args: Parameters<typeof css>[0]) => css`
  @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
    ${css(args)}
  }
`;

export const sectionStyles = css`
  section {
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
  }
`

export const headingStyles = css`
  h2 {
    font-family: 'Sansita Swashed';
    font-size: 32px;
    font-weight: normal;
    line-height: 1em;
  }
`

export const textSectionStyles = css`
  .section-text {
    display: flex;
    flex-direction: column;
  }

  p, ul {
    margin: 0;
    max-width: 480px;

    @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
      max-width: 100%;
    }
  }

  section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const isSafari = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes('safari') && !userAgent.includes('chrome');
}
