import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context } from 'context';
import PokemonItem from 'components/Pokemon/Item';
import Loading from 'components/Loading';
import { StyledWrapper } from 'assets/global/styled';
import { StyledSection, StyledList } from './styled';
import { getPokemonsByGeneration } from 'api';

const PokemonsList = () => {
  const { id } = useParams();
  const { state, setState } = useContext(Context);
  const { pokemonsByGeneration } = state;

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true
    }));

    getPokemonsByGeneration(id)
      .then((res) => {
        const { pokemon_species } = res.data;

        setState((prevState) => ({
          ...prevState,
          pokemonsByGeneration: pokemon_species
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
  }, []);

  return (
    <StyledSection>
      <StyledWrapper>
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

export default PokemonsList;
