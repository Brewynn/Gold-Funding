import styled from '@emotion/styled';
import { COLORS, MEDIA_QUERY } from '../../../../utils/universal/constant';

const cssVar = {
  ICON_USERS: '#03a9f4',
  ICON_DIAMOND: '#3f51b5',
  ICON_HEART: '#e91e63',
  ICON_CLOCK: '#2196f3'
};

const Container = styled.article`
  .about {
    background-image: url('../../asset/images/about-us.jpg');

    &__section {
      border-bottom: solid 2px ${COLORS.GOLDEN_FUNDING};
      position: absolute;
      text-transform: uppercase;
      top: 10%;
      z-index: 1;
    }

    &__items {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      width: 100%;
      z-index: 1;
    }

    &__item {
      cursor: pointer;
      margin-bottom: 30px;
      padding: 0 20px;
      width: 200px;

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
        margin-left: -46px;
      }

      &-text {
        line-height: 1.6;
      }

      &-icon {
        color: ${COLORS.GOLDEN_FUNDING};
        font-size: 30px;
        padding-right: 20px;
      }
    }
  }

   ${MEDIA_QUERY.VIEWPORT_MEDIUM} {
    .about {
      height: auto;

      &__item {
        &-title {
          margin: 0;
          text-align: center;
        }

        &-text {
          margin-top: 20px;
        }

        &-icon {
          display: block;
          margin-bottom: 10px;
        }
      }

      &__items {
        margin-top: 180px;
      }

      &__section {
        top: 30px;
      }
    }
  }
`;

export default Container;
