import React from 'react';
import IconPokeball from 'assets/images/icon-pokeball.svg';
import { StyledLoading } from './styled';

const Loading = ({ isLoading }) => {
  return (
    <StyledLoading isLoading={isLoading}>
      <img src={IconPokeball} alt="Carregando" />
    </StyledLoading>
  );
};

export default Loading;
