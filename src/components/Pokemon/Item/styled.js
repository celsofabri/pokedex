import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledItem = styled.div`
  flex: 1 1 auto;
  width: 25%;
  padding: 10px;
  margin: 10px;
  background-color: ${colors.gray75};
  border-radius: 10px;

  a {
    color: ${colors.gray300};
    text-decoration: none;
  }

  h3 {
    margin: 0;
    padding: 10px;
    font-family: ${fonts.primary};
    font-size: 20px;

    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

export const StyledItemImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;

  img {
    display: block;
    max-width: 100px;
    height: auto;
    margin: 0;
  }
`;
