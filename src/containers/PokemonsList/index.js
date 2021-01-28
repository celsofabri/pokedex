import React, { useEffect, useContext } from 'react';
import { Context } from 'context';
import PokemonItem from 'components/Pokemon/Item';
import { StyledWrapper } from 'assets/global/styled';
import { StyledSection, StyledTitle, StyledList } from './styled';
import { getPokemons } from 'api';

const PokemonsList = () => {
  const { state, setState } = useContext(Context);
  const { pokemons } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    async function getPokemonsList() {
      try {
        const payload = await getPokemons();
        const data = payload?.data || {};

        if (data) {
          setState((prevState) => ({
            ...prevState,
            pokemons: data.results || []
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
    getPokemonsList();
  }, [setState]);

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTitle>Generation I</StyledTitle>
        <StyledList>
          {pokemons.length > 0 &&
            pokemons.map((pokemon, index) => {
              const { name, url } = pokemon;
              const id = url.substring(
                url.lastIndexOf('/pokemon/') + 9,
                url.length - 1
              );

              return <PokemonItem key={index} name={name} id={id} />;
            })}
        </StyledList>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonsList;
