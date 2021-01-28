import styled from 'styled-components';
import { fonts } from 'assets/global/tokens';

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  padding: 50px 0;
`;

export const StyledTitle = styled.h2`
  font-family: ${fonts.primary};
  font-size: 32px;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 420px) {
    font-size: 20px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -10px;
  padding: 0;
`;
