import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import { getGenerations } from 'api';
import { StyledWrapper } from 'assets/global/styled';
import { StyledSection, StyledGenerations } from './styled';

const GenerationsList = () => {
  const { state, setState } = useContext(Context);
  const { generations } = state;

  useEffect(() => {
    getGenerations()
      .then((res) => {
        const { results } = res.data;

        setState((prevState) => ({
          ...prevState,
          generations: results,
          isLoading: false
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setState]);

  const formatGenerationName = (name) => {
    const generation = name.split('-')[1];

    return `Generation ${generation.toUpperCase()}`;
  };

  return (
    <StyledSection>
      <StyledWrapper>
        <StyledGenerations>
          {generations.map((generation) => {
            const { name, url } = generation;
            const id = url.substring(
              url.lastIndexOf('/generation/') + 12,
              url.length - 1
            );

            return (
              <Link
                to={`/generation/${id}`}
                title={formatGenerationName(name)}
                key={id}
              >
                {formatGenerationName(name)}
              </Link>
            );
          })}
        </StyledGenerations>
      </StyledWrapper>
    </StyledSection>
  );
};

export default GenerationsList;
