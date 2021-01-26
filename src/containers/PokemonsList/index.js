import React from 'react';
import PokemonItem from 'components/Pokemon/Item';
import { StyledSection, StyledList } from './styled';

const PokemonsList = () => {
  return (
    <StyledSection>
      <StyledList>
        <PokemonItem />
      </StyledList>
    </StyledSection>
  );
};

export default PokemonsList;
