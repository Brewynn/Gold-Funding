import styled from '@emotion/styled';

const Container = styled.article`
  .contact {
    &__title {
      color: #ffd934;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;

      &-text {
        display: block;

        &--underline {
          border-bottom: solid 4px #ffd934;
          padding-bottom: 10px;
          width: 28px;
        }
      }
    }

     &__form,
     &__info {
      align-items: center;
      display: flex;
      height: 100%;
      justify-content: center;
      width: 50%;
    }

    &__info-container {
      margin-top: -91px;
      width: 50%;
    }

    &__info-container-text {
      color: #b7b7b7;
      font-family: monospace;
      font-size: 18px;
      margin-top: 20px;
    }

    &__info-text {
      display: block;
    }

    &__form {
      background-color: #252525;
    }

    &__form-container {
      width: 50%;
    }

    &__info {
      background: #232323;
    }

    &__label {
      color: #000000;
      text-transform: capitalize;
      margin-top: 10px;
    }

    &__input-text,
    &__input-button {
      background: none;
      border: none;
      border-bottom: 1px solid #666;
      color: #ddd;
      font-size: 14px;
      margin: 20px 0;
      outline: none;
      padding: 10px 0;
      text-transform: uppercase;
      transition: border-color .2s;
      width: 100%;
    }

    &__feedback--error {
      animation: error .3s forwards;
      color: #ff0000;
      margin-top: -12px;
      position: absolute;
    }

    &__input-text,
    &__input-button {
      &:focus {
        border-bottom-color: #ddd;
      }
    }

    &__input-button {
      background: none;
      border: none;
      color: #ffd934;
      font-size: 15px;
      cursor: pointer;
      outline: none;
      text-align: right;
      font-weight: bold;
    }

    &__message,
    &__message-button {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 16px;
      font-weight: 300;
    }

    &__message {
      background: #323232;
      border-radius: 2px;
      bottom: 20px;
      color: #ffffff;
      display: flex;
      height: 56px;
      justify-content: space-between;
      left: 20px;
      padding: 0 20px;
      position: fixed;
      width: 248px;
      z-index: 1;
      animation: message 0.5s forwards;

    }

    &__message-button {
      border: none;
      background: transparent;
      color: #edf43f;
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
