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
  StyledProgress
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

            {pokemonDetail?.id && (
              <p>
                <strong>ID: </strong>
                {pokemonDetail.id}
              </p>
            )}

            {pokemonDetail?.base_experience && (
              <p>
                <strong>Base Experience: </strong>
                {pokemonDetail.base_experience}
              </p>
            )}

            {pokemonDetail?.types && (
              <StyledTypes>
                {pokemonDetail.types.map(({ type }, index) => {
                  const { name } = type;

                  return (
                    <StyledBadge key={index} type={name}>
                      {name}
                    </StyledBadge>
                  );
                })}
              </StyledTypes>
            )}

            {pokemonDetail?.height && (
              <p>
                {' '}
                <strong>Height: </strong>
                {pokemonDetail.height}
              </p>
            )}
            {pokemonDetail?.weight && (
              <p>
                <strong>Weight: </strong>
                {pokemonDetail.weight}
              </p>
            )}
          </StyledImage>
          <StyledInfo>
            {pokemonDetail?.abilities && (
              <React.Fragment>
                <p>
                  <strong>Abilities:</strong>
                </p>
                {pokemonDetail.abilities.map(({ ability }, index) => {
                  const { name } = ability;

                  return <p key={index}>{name}</p>;
                })}
              </React.Fragment>
            )}

            {pokemonDetail?.stats && (
              <React.Fragment>
                <p>
                  <strong>Stats:</strong>
                </p>
                {pokemonDetail.stats.map(
                  ({ stat, base_stat }, index) => {
                    const { name } = stat;

                    return (
                      <StyledBar>
                        <StyledProgress
                          key={index}
                          progress={base_stat}
                        />
                        <p>
                          {name}: {base_stat}
                        </p>
                      </StyledBar>
                    );
                  }
                )}
              </React.Fragment>
            )}
          </StyledInfo>
        </StyledContent>
      </StyledWrapper>
    </StyledSection>
  );
};

export default PokemonDetail;
