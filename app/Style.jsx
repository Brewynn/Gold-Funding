import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html {
        scroll-behavior: smooth;
        background: #1b1b1b;
      }

      article {
        & > div {
          align-items: center;
          display: flex;
          justify-content: center;
          height: 100vh;
          width: 100%;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      }
    `}
  />
);

export default GlobalStyle;
