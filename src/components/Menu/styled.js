import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledMenu = styled.nav`
  display: block;
`;

export const StyledMenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 0;
  list-style-type: none;
`;

export const StyledMenuItem = styled.li`
  margin-left: 20px;

  a {
    position: relative;
    display: inline-block;
    padding: 3px 0;
    font-family: ${fonts.primary};
    font-size: 20px;
    font-weight: 600;
    color: ${colors.gray300};
    text-decoration: none;
    transition: all 0.4s ease-out;

    &:before,
    &:after {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 3px;
      background-color: ${colors.gray300};
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
      color: ${colors.blue300};

      &:before,
      &:after {
        width: 100%;
        background-color: ${colors.blue300};
      }
    }

    @media screen and (max-width: 420px) {
      font-size: 16px;
    }
  }
`;
