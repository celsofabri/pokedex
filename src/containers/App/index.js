import React from 'react';
import Header from 'components/Header';
import PokemonsList from 'containers/PokemonsList';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <PokemonsList />
    </React.Fragment>
  );
};

export default App;
