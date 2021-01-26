import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledItem = styled.div`
  padding: 10px;
  background-color: ${colors.gray100};
  border-radius: 10px;

  h3 {
    margin: 0;
    padding: 10px;
    font-family: ${fonts.primary};
  }
`;
