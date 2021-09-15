import styled from '@emotion/styled';
import { COLORS } from '../../../../utils/universal/constant';

const cssVar = {
  ICON_USERS: '#03a9f4',
  ICON_DIAMOND: '#3f51b5',
  ICON_HEART: '#e91e63',
  ICON_CLOCK: '#2196f3'
};

const Container = styled.article`
  .about {
    background-image: url('../../asset/images/about-us.jpg');
    justify-content: space-evenly;

    &__section {
      border-bottom: solid 2px ${COLORS.GOLDEN_FUNDING};
      position: absolute;
      text-transform: uppercase;
      top: 10%;
      z-index: 1;
    }

    &__items {
      z-index: 1;
    }

    &__item {
      cursor: pointer;
      max-width: 200px;

      .fa {
        transition: all 0.5s ease;
      }

      &:hover {
        .fa-users {
          color: ${cssVar.ICON_USERS};
        }

        .fa-diamond {
          color: ${cssVar.ICON_DIAMOND};
        }
 
        .fa-heart {
          color: ${cssVar.ICON_HEART};
        }

        .fa-clock-o {
          color: ${cssVar.ICON_CLOCK};
        }
      }

      &-title {
        font-size: 22px;
        margin-bottom: 18px;
      }

      &-text {
        line-height: 1.6;
      }

      &-icon {
        color: ${COLORS.GOLDEN_FUNDING};
        font-size: 30px;
        margin-left: -64px;
        position: absolute;
      }
    }
  }
`;

export default Container;
