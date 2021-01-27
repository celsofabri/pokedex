import React from 'react';
import { Link } from 'react-router-dom';
import Menu from 'components/Menu';
import { StyledWrapper } from 'assets/global/styled';
import { StyledHeader, StyledLogo } from './styled';
import LogoPokemon from 'assets/images/pokemon-logo.png';

const Header = () => {
  return (
    <StyledHeader>
      <StyledWrapper>
        <StyledLogo data-testid="logo">
          <Link to="/" title="Home">
            <img
              src={LogoPokemon}
              width="150"
              height="auto"
              alt="Pokémon"
            />
          </Link>
        </StyledLogo>
        <Menu />
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
