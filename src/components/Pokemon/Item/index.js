import React from 'react';
import { Link } from 'react-router-dom';
import { StyledItem, StyledItemImg } from './styled';

const PokemonItem = ({ name, id }) => {
  return (
    <StyledItem>
      <Link to={`/pokemon/${name}`} title={name}>
        <StyledItemImg>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt={name}
          />
        </StyledItemImg>
        <h3>{name}</h3>
      </Link>
    </StyledItem>
  );
};

export default PokemonItem;
