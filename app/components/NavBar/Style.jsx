import styled from '@emotion/styled';

const Container = styled.div`
  .nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;

    &__logo {
      padding-left: 20px;
      position: absolute;
      width: 150px;
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
      &[href="#${prop => prop.stateSection}"] {
        color: black;
        background: #ffd934;
        border-radius: 8px;
      }

      color: white;
      cursor: pointer;
      font-size: 20px;
      padding: 4px 10px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
      text-decoration: none;
    }
  }
`;

export default Container;
