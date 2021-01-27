import PokemonInstance from './config';

export const getPokemons = () => {
  return PokemonInstance({
    method: 'get',
    url: `/pokemon?limit=151`
  });
};

export const getPokemonByName = (name) => {
  return PokemonInstance({
    method: 'get',
    url: `/pokemon/${name}`
  });
};
