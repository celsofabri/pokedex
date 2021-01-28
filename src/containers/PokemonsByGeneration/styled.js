import styled from 'styled-components';
import { fonts } from 'assets/global/tokens';
import IconBack from 'assets/images/icon-back.svg';

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  padding: 50px 0;
`;

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
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

export const StyledBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  text-indent: -9999px;
  background-image: url(${IconBack});
  background-repeat: no-repeat;
  background-size: 24px auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -10px;
  padding: 0;
`;
