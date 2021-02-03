import styled from 'styled-components';
import { colors } from 'assets/global/tokens';

export const StyledFooter = styled.header`
  display: block;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  background-color: ${colors.black};

  p {
    color: ${colors.white};

    a {
      position: relative;
      display: inline-block;
      padding: 3px 0;
      font-weight: 700;
      color: ${colors.yellow300};
      text-decoration: none;

      &:before,
      &:after {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 3px;
        background-color: ${colors.yellow300};
        transition: all 0.4s ease-out;
        content: '';
      }

      &:before {
        left: 0;
      }

      &:after {
        right: 0;
      }

      &:hover {
        &:before,
        &:after {
          width: 100%;
        }
      }
    }
  }
`;
