import {Global, css} from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import React from 'react';
import {MEDIA_QUERY, COLORS} from '../../../../utils/universal/constant';

const GlobalStyle = () => (
  <Global
    styles={css`
      ${emotionNormalize}
      html {
        background: ${COLORS.BLACK};
        font-family: arial;
        font-size: 16px;
        scroll-behavior: smooth;
      }
 
      .about,
      .contact,
      .slideshow {
        -moz-background-size: cover;
        -o-background-size: cover;
        -webkit-background-size: cover;
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        object-fit: cover;
        position: relative;

        &:after {
          background: #000000d9;
          content: '';
          height: 100%;
          position: absolute;
          top: 0;
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

      ${MEDIA_QUERY.VIEWPORT_MEDIUM} {
        .about,
        .contact,
        .slideshow {
          background-attachment: scroll;
        }
      }
    `}
  />
);

export default GlobalStyle;
