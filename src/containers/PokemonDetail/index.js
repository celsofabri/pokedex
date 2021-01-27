import React, { useEffect, useContext } from 'react';
import { Context } from 'context';
import { useParams } from 'react-router-dom';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSection,
  StyledTitle,
  StyledContent,
  StyledImage,
  StyledInfo,
  StyledSubtitle
} from './styled';
import { getPokemonByName } from 'api';

const PokemonDetail = () => {
  const { name } = useParams();
  const { state, setState } = useContext(Context);
  const { pokemonDetail } = state;

  useEffect(() => {
    getPokemonByName(name)
      .then((res) => {
        const { data } = res;

        setState((prevState) => ({
          ...prevState,
          pokemonDetail: data
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setState, name]);

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledTitle>{name}</StyledTitle>
        <StyledContent>
          <StyledImage>
            {pokemonDetail?.id && (
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`}
                width="300"
                height="auto"
                alt={name}
              />
            )}
          </StyledImage>
          <StyledInfo>
            {pokemonDetail?.order && (
              <React.Fragment>
                <StyledSubtitle>ID</StyledSubtitle>
                <p>{pokemonDetail.order}</p>
              </React.Fragment>
            )}

            {pokemonDetail?.abilities &&
              pokemonDetail.abilities.map(({ ability }, index) => {
                const { name } = ability;

                return <p key={index}>{name}</p>;
              })}

            {pokemonDetail?.height && <p>{pokemonDetail.height}</p>}
            {pokemonDetail?.weight && <p>{pokemonDetail.weight}</p>}

            {pokemonDetail?.types &&
              pokemonDetail.types.map(({ type }, index) => {
                const { name } = type;

                return <p key={index}>{name}</p>;
              })}

            {pokemonDetail?.stats &&
              pokemonDetail.stats.map(
                ({ stat, base_stat }, index) => {
                  const { name } = stat;

                  return (
                    <p key={index}>
                      {name}: {base_stat}
                    </p>
                  );
                }
              )}
          </StyledInfo>
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonDetail;
