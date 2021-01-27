import React, { useEffect, useContext } from 'react';
import { Context } from 'context';
import { useParams } from 'react-router-dom';
import { StyledWrapper } from 'assets/global/styled';
import {
  StyledSection,
  StyledTitle,
  StyledContent,
  StyledImage,
  StyledTypes,
  StyledBadge,
  StyledInfo,
  StyledBar,
  StyledProgress,
  StyledRow
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
          pokemonDetail: data,
          isLoading: false
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

            {pokemonDetail?.id && (
              <StyledRow>
                <p>
                  <strong>ID: </strong>
                  {pokemonDetail.id}
                </p>
              </StyledRow>
            )}

            {pokemonDetail?.base_experience && (
              <StyledRow>
                <p>
                  <strong>Base Experience: </strong>
                  {pokemonDetail.base_experience}
                </p>
              </StyledRow>
            )}

            {pokemonDetail?.types && (
              <StyledRow>
                <StyledTypes>
                  {pokemonDetail.types.map(({ type }, index) => {
                    const { name } = type;

                    return (
                      <StyledBadge
                        key={`${index}-${name}`}
                        type={name}
                      >
                        {name}
                      </StyledBadge>
                    );
                  })}
                </StyledTypes>
              </StyledRow>
            )}

            {pokemonDetail?.height && (
              <StyledRow>
                <p>
                  {' '}
                  <strong>Height: </strong>
                  {pokemonDetail.height}
                </p>
              </StyledRow>
            )}
            {pokemonDetail?.weight && (
              <StyledRow>
                <p>
                  <strong>Weight: </strong>
                  {pokemonDetail.weight}
                </p>
              </StyledRow>
            )}
          </StyledImage>
          <StyledInfo>
            {pokemonDetail?.abilities && (
              <StyledRow>
                <p>
                  <strong>Abilities:</strong>
                </p>
                {pokemonDetail.abilities.map(({ ability }, index) => {
                  const { name } = ability;

                  return <p key={`${index}-${name}`}>{name}</p>;
                })}
              </StyledRow>
            )}

            {pokemonDetail?.stats && (
              <StyledRow>
                <p>
                  <strong>Stats:</strong>
                </p>
                {pokemonDetail.stats.map(
                  ({ stat, base_stat }, index) => {
                    const { name } = stat;

                    return (
                      <StyledBar>
                        <StyledProgress
                          key={`${index}-${name}`}
                          progress={base_stat}
                        />
                        <p>
                          <strong>{name}</strong>: {base_stat}
                        </p>
                      </StyledBar>
                    );
                  }
                )}
              </StyledRow>
            )}
          </StyledInfo>
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonDetail;
