import styled from '@emotion/styled';
import { COLORS } from '../../../../utils/universal/constant';

const Container = styled.header`
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;

    &__logo {
      position: absolute;
      background-color: ${COLORS.WHITE};
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

    &__link {
      color: ${COLORS.WHITE};
      cursor: pointer;
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
`;

export default Container;
