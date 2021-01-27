import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  padding: 50px 0;
`;

export const StyledTitle = styled.h2`
  font-family: ${fonts.primary};

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const StyledImage = styled.div`
  width: 48.5%;
`;

export const StyledInfo = styled.div`
  width: 48.5%;
`;

export const StyledSubtitle = styled.h4``;
