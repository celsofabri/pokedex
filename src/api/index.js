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

export const getGenerations = () => {
  return PokemonInstance({
    method: 'get',
    url: `/generation/`
  });
};

export const getPokemonsByGeneration = (id) => {
  return PokemonInstance({
    method: 'get',
    url: `/generation/${id}`
  });
};
