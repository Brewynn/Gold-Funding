import styled from '@emotion/styled';

const Container = styled.div`
  .slideshow {
    align-items: center;
    background-image: url('../../asset/images/${prop => prop.imageName}');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    height: 100vh;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    transform: scale(100%);
    transition: background 1s ease-in-out;
    width: 100%;

    &:after {
      background: #0000006e;
      content: '';
      height: 100vh;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    &__header {
      margin-left: 10%;
      z-index: 1;
    }

    &__title {
      font-size: 80px;
      white-space: nowrap;
    }

    &__sub-title {
      color: #ffd934;
      display: block;
      text-transform: capitalize;
    }

    &__pagination {
      bottom: 5%;
      display: flex;
      justify-content: center;
      left: 0;
      position: absolute;
      width: 100%;
      z-index: 1;

      &-control {
        position: absolute;
      }

      &-buttons {
        background: transparent;
        border: 1px solid #fff;
        color: white;
        cursor: pointer;
        height: 60px;
        transition: background 0.3s ease-in;
        width: 60px;

        &:hover {
          background: #fff;
          color: black;
        }
      }

      &-item {
        &:hover,
        &:nth-of-type(${prop => prop.paginationIndex + 1}) {
          background-color: #fff;
        }

        background: transparent;
        border: 1px solid #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 0;
        height: 15px;
        margin: 0 5px;
        white-space: nowrap;
        width: 15px;
      }
    }
  }
`;

export default Container;
