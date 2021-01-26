import React from 'react';
import { StyledWrapper } from 'assets/global/styled';
import { StyledHeader, StyledLogo } from './styled';
import LogoPokemon from 'assets/images/pokemon-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo>
          <img
            src={LogoPokemon}
            width="150"
            height="auto"
            alt="Pokémon"
          />
        </StyledLogo>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
