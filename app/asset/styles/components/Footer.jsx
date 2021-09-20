import styled from '@emotion/styled';
import { COLORS } from '../../../../utils/universal/constant';

const Container = styled.footer`
  .footer {
    background-color: ${COLORS.BLACK};
    display: block;

    &__text {
      color: ${COLORS.WHITE};
      font-family: arial;
      font-size: 12px;
      margin: 0;
      padding: 20px;
      text-align: center;
    }
  }
`;

export default Container;
