import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';
import { darken, lighten } from 'polished';

const types = {
  fire: '#f42',
  water: '#39f',
  electric: '#fc3',
  grass: '#7c5',
  ice: '#6cf',
  fighting: '#b54',
  poison: '#a59',
  ground: '#db5',
  flying: '#89f',
  psychic: '#f59',
  bug: '#ab2',
  rock: '#ba6',
  ghost: '#66b',
  dragon: '#76e',
  dark: '#754',
  steel: '#aab',
  fairy: '#e9e'
};

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  padding: 50px 0;
`;

export const StyledTitle = styled.h2`
  font-family: ${fonts.primary};
  font-size: 32px;
  font-weight: 700;

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
  padding: 16px;
  text-align: center;
  border: 1px solid ${colors.gray100};
  border-radius: 10px;

  p {
    strong {
      font-family: ${fonts.primary};
    }
  }
`;

export const StyledTypes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: -5px;
`;

export const StyledBadge = styled.p`
  display: inline-block;
  margin: 5px;
  padding: 5px 20px;
  color: ${colors.gray300};
  background-color: ${(props) =>
    props.type && types[props.type]
      ? lighten(0.15, types[props.type])
      : colors.white};
  border: 1px solid
    ${(props) =>
      props.type && types[props.type]
        ? darken(0.15, types[props.type])
        : colors.grey50};
  border-radius: 30px;
`;

export const StyledInfo = styled.div`
  width: 48.5%;
  padding: 16px;
  border: 1px solid ${colors.gray100};
  border-radius: 10px;

  p {
    strong {
      font-family: ${fonts.primary};
    }
  }
`;

export const StyledLabel = styled.div`
  display: block;
  margin-top: 10px;

  > p {
    font-size: 14px;
    font-weight: 600;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const StyledBar = styled.div`
  position: relative;
  display: block;
  width: 100%;
  background-color: ${colors.gray300};
  border-radius: 30px;

  p {
    position: relative;
    z-index: 10;
    padding: 5px 10px;
    font-size: 14px;
    color: ${colors.white};
  }
`;

export const StyledProgress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: ${(props) => props.progress && props.progress}%;
  max-width: 100%;
  height: 100%;
  background-color: ${colors.blue300};
  border-radius: 30px;
`;

export const StyledRow = styled.div`
  border-top: 1px solid ${colors.gray100};
  padding: 5px;

  p {
    margin: 5px;
  }

  &:first-child,
  &:first-of-type {
    border-top: none;
  }
`;
