import { css } from "lit";

export const CONTENT_WIDTH = 960;

export const sectionStyles = css`
  section {
    width: 100%;
    max-width: ${CONTENT_WIDTH}px;
    margin: 0 auto;
    padding: 0 16px;
  }
`

export const headingStyles = css`
  h2 {
    font-family: 'Sansita Swashed';
    font-size: 32px;
    font-weight: normal;
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
