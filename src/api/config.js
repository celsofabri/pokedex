import axios from 'axios';

const PokemonInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
});

export default PokemonInstance;
