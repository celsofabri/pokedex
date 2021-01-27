import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledItem = styled.div`
  flex: 1 1 auto;
  width: 25%;
  padding: 10px;
  margin: 10px;
  background-color: ${colors.gray75};
  border-radius: 10px;
  transition: all 0.4s ease-out;

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

  &:hover {
    background-color: ${colors.gray100};

    img {
      transform: scale(1.2);
      transform: scale3d(1.2, 1.2, 1.2);
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
    transition: all 0.4s ease-out;
  }
`;
