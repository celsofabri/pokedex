import React, { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Context } from 'context';
import PokemonItem from 'components/Pokemon/Item';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSection,
  StyledTitle,
  StyledBack,
  StyledList
} from './styled';
import { getPokemonsByGeneration } from 'api';

const PokemonsByGeneration = () => {
  const { id } = useParams();
  const { state, setState } = useContext(Context);
  const { pokemonsByGeneration, currentGeneration } = state;
  let history = useHistory();

  const goBackHistory = () => {
    history.go(-1);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    async function getPokemonsGenerationList() {
      try {
        const payload = await getPokemonsByGeneration(id);
        const data = payload?.data || {};

        if (data) {
          setState((prevState) => ({
            ...prevState,
            pokemonsByGeneration: data.pokemon_species || []
          }));

          setTimeout(() => {
            setState((prevState) => ({
              ...prevState,
              isLoading: false
            }));
          }, 1500);
        }
        return data;
      } catch (err) {
        console.log(err);
      }
    }
    getPokemonsGenerationList();
  }, [setState, id]);

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTitle>
          <StyledBack type="button" onClick={goBackHistory}>
            Voltar
          </StyledBack>
          {currentGeneration}
        </StyledTitle>
        <StyledList>
          {pokemonsByGeneration.map((pokemon, index) => {
            const { name, url } = pokemon;
            const id = url.substring(
              url.lastIndexOf('/pokemon-species/') + 17,
              url.length - 1
            );

            return <PokemonItem key={index} name={name} id={id} />;
          })}
        </StyledList>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonsByGeneration;
