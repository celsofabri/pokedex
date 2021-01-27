import React from 'react';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();

  return <h1>{name}</h1>;
};

export default PokemonDetail;
