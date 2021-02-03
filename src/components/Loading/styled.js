import styled, { css, keyframes } from 'styled-components';
import { colors } from 'assets/global/tokens';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${colors.white};
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transform: scale3d(1.1, 1.1, 1.1);

  img {
    max-width: 150px;
    height: auto;
    animation: ${rotate} 0.5s linear infinite;
  }

  ${(props) =>
    props.isLoading &&
    css`
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      transform: scale3d(1, 1, 1);
    `}
`;
