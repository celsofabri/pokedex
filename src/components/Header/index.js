import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWrapper } from 'assets/global/styled';
import { StyledHeader, StyledLogo } from './styled';
import LogoPokemon from 'assets/images/pokemon-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo>
          <Link to="/" title="Home">
            <img
              src={LogoPokemon}
              width="150"
              height="auto"
              alt="Pokémon"
            />
          </Link>
        </StyledLogo>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
