import { css } from "lit";

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