import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import { StyledItem, StyledItemImg } from './styled';

const PokemonItem = ({ name, id }) => {
  const { setState } = useContext(Context);

  return (
    <StyledItem>
      <Link
        to={`/pokemon/${name}`}
        title={name}
        onClick={() => {
          setState((prevState) => ({
            ...prevState,
            isLoading: true
          }));
        }}
      >
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
