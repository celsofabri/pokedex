import styled from 'styled-components';
import { StyledWrapper } from 'assets/global/styled';

export const StyledHeader = styled.header`
  display: block;
  width: 100%;

  ${StyledWrapper} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLogo = styled.h1`
  display: block;
  max-width: 300px;

  img {
    max-width: 100%;
    height: auto;
  }
`;
