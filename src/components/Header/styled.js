import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';
import { colors } from 'assets/global/tokens';

export const StyledHeader = styled.header`
  display: block;
  width: 100%;
  background-color: ${colors.gray100};

  ${StyledWrapper} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledLogo = styled.h1`
  display: block;
  max-width: 300px;
  margin: 0;

  img {
    max-width: 100%;
    height: auto;
  }
`;
