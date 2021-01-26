import React from 'react';
import PokemonItem from 'components/Pokemon/Item';
import { StyledWrapper } from 'assets/global/styled';
import { StyledSection, StyledList } from './styled';

const PokemonsList = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyledList>
          <PokemonItem />
        </StyledList>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonsList;
