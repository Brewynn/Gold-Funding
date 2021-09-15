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
        font-family: arial;
      }

      .about,
      .contact,
      .slideshow {
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: relative;

        &:after {
          background: #000000d9;
          content: '';
          height: 100vh;
          position: absolute;
          width: 100%;
        }
      }

      article {
        & > div {
          align-items: center;
          color: white;
          display: flex;
          height: 100vh;
          justify-content: center;
          width: 100%;
        }
      }
    `}
  />
);

export default GlobalStyle;
