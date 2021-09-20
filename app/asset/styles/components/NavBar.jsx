import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERY } from '../../../../utils/universal/constant';

const Container = styled.header`
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;

    &__logo {
      position: absolute;
      padding: 10px 22px;
      width: 80px;
    }

    &__items {
      padding-right: 30px;
      text-align: right;
    }

    &__item {
      display: inline;
      list-style: none;
    }

    &__mobile-button,
    &__link {
       color: ${COLORS.WHITE};
       cursor: pointer;
    }

    &__mobile-button {
      font-size: 30px;
      display: none;
    }

    &__link {
      font-size: 20px;
      padding: 4px 10px;
      text-decoration: none;
      font-size: 15px;
      text-transform: uppercase;

      &[href="#${prop => prop.stateSection}"] {
        border-bottom: solid 2px ${COLORS.GOLDEN_FUNDING};
      }
    }
  }

  ${MEDIA_QUERY.VIEWPORT_MEDIUM} {
    .nav {
      right: 0;
      background: ${COLORS.BLACK};
      
      &__items {
        text-align: center;
      }

      &__logo {
        display: none;
      }

      &__mobile-button {
        display: block;
        text-align: right;
      }
    }
  }
`;

export default Container;
