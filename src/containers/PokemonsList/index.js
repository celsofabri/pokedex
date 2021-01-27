import React, { useEffect, useContext } from 'react';
import { Context } from 'context';
import PokemonItem from 'components/Pokemon/Item';
import { StyledWrapper } from 'assets/global/styled';
import { StyledSection, StyledList } from './styled';
import { getPokemons } from 'api';

const PokemonsList = () => {
  const { state, setState } = useContext(Context);
  const { pokemons } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    getPokemons()
      .then((res) => {
        const { results } = res.data;

        setState((prevState) => ({
          ...prevState,
          pokemons: results
        }));

        setTimeout(() => {
          setState((prevState) => ({
            ...prevState,
            isLoading: false
          }));
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setState]);

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledList>
          {pokemons.map((pokemon, index) => {
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
