import styled from 'styled-components';
import { colors, fonts } from 'assets/global/tokens';

export const StyledSection = styled.section`
  display: block;
  width: 100%;
  padding: 50px 0;
`;

export const StyledGenerations = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: -10px;

  a {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 30%;
    min-height: 150px;
    margin: 10px;
    padding: 30px;
    font-family: ${fonts.primary};
    font-size: 24px;
    font-weight: 700;
    color: ${colors.gray300};
    text-decoration: none;
    border: 1px solid ${colors.gray100};
    border-radius: 30px;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 420px) {
      width: 100%;
      min-height: 80px;
      font-size: 16px;
    }

    &:hover {
      color: ${colors.white};
      background-color: ${colors.blue300};
    }
  }
`;
