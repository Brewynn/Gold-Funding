import styled from '@emotion/styled';
import { COLORS } from '../../../../utils/universal/constant';

const cssVar = {
  FEEDBACK_ERROR: '#ff0000',
  MESSAGE_COLOR: '#212121'
};

const Container = styled.article`
  .contact {
    background-image: url('../../asset/images/map.jpg');
    position: relative;

    &__section {
      border-bottom: solid 2px ${COLORS.GOLDEN_FUNDING};
      position: absolute;
      text-transform: uppercase;
      top: 10%;
      z-index: 1;
    }

    &__titleTop,
    &__titleBottom {
      color: ${COLORS.GOLDEN_FUNDING};
      font-size: 20px;
      font-weight: bold;
      text-transform: uppercase;
    }

    &__icon {
      padding-right: 15px;
    }

    &__titleBottom {
      display: block;
    }

    &__title--underline {
      border-bottom: solid 4px ${COLORS.GOLDEN_FUNDING};
      padding-bottom: 10px;
      width: 28px;
    }

    &__subtitle {
      display: block;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
      font-weight: 400;
      margin-top: 35px;
      font-size: 18px;
    }

     &__form,
     &__info {
      align-items: center;
      display: flex;
      height: 100vh;
      height: auto;
      justify-content: center;
      margin-top: 5%;
      width: 50%;
      z-index: 1;
    }

    &__info-container {
      margin-top: -91px;
      width: 50%;
    }

    &__info-container-text {
      font-family: monospace;
      font-size: 18px;
      margin-top: 20px;
      padding: 0;
    }

    &__info-text {
      display: block;
    }

    &__form-container {
      width: 50%;
    }

    &__input-text,
    &__input-button {
      background-color: rgba(255, 255, 255, 0.06);
      border-color: #2A2A2A;
      border: none;
      box-sizing: border-box;
      color: ${COLORS.WHITE};
      font-size: 14px;
      margin: 20px 0;
      outline: none;
      padding: 10px;
      text-transform: capitalize;
      transition: all .5s ease;
      width: 100%;
    }

    &__input-text {
      padding: 14px 16px;
  
      &:focus {
        background-color: #171717;
      }
    }

    &__loading {
      left: 50%;
      position: absolute;
      top: 50%;

      &-image {
        width: 50px;
      }
    }

    &__feedback--error {
      animation: error .3s forwards;
      color: ${cssVar.FEEDBACK_ERROR};
      font-size: 14px;
      margin-top: -12px;
      position: absolute;
    }

    &__input-button {
      background-color: ${cssVar.MESSAGE_COLOR};
      border: none;
      color: ${COLORS.GOLDEN_FUNDING};
      cursor: pointer;
      font-size: 15px;
      font-weight: bold;
      outline: none;
      text-align: center;
    }

    &__message,
    &__message-button {
      font-size: 16px;
      font-weight: 300;
    }

    &__message {
      animation: message 0.5s forwards;
      background: ${cssVar.MESSAGE_COLOR};
      border-radius: 2px;
      bottom: 20px;
      color: ${COLORS.WHITE};
      display: flex;
      height: auto;
      justify-content: space-between;
      left: 20px;
      padding: 10px 20px;
      position: fixed;
      width: 248px;
      z-index: 1;
    }

    &__message-button {
      background: transparent;
      border: none;
      color: ${COLORS.GOLDEN_FUNDING};
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        text-decoration: underline;
      }
    }

    @keyframes message {
      from {
        bottom: 30px;
        opacity: 0;
      }

      to {
        bottom: 20px;
        opacity: 1;
      }
    }

    @keyframes error {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }
  }
`;

export default Container;
