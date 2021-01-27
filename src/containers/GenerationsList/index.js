import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'context';
import { getGenerations } from 'api';

const GenerationsList = () => {
  const { state, setState } = useContext(Context);
  const { generations } = state;

  useEffect(() => {
    getGenerations()
      .then((res) => {
        const { results } = res.data;

        setState((prevState) => ({
          ...prevState,
          generations: results
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setState]);

  return (
    <React.Fragment>
      {generations.map((generation) => {
        const { name, url } = generation;
        const id = url.substring(
          url.lastIndexOf('/generation/') + 12,
          url.length - 1
        );

        return (
          <Link to={`/generation/${id}`} title={name}>
            {name}
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default GenerationsList;
