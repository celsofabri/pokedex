import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalState } from 'context';
import Header from 'components/Header';
import PokemonsList from 'containers/PokemonsList';
import GenerationsList from 'containers/GenerationsList';
import PokemonDetail from 'containers/PokemonDetail';
import PokemonsByGeneration from 'containers/PokemonsByGeneration';

const App = () => {
  return (
    <GlobalState>
      <Header />

      <Switch>
        <Route exact path="/" component={PokemonsList} />
        <Route
          exact
          path="/generations"
          component={GenerationsList}
        />
        <Route
          exact
          path="/pokemon/:name"
          component={PokemonDetail}
        />
        <Route
          exact
          path="/generation/:id"
          component={PokemonsByGeneration}
        />
      </Switch>
    </GlobalState>
  );
};

export default App;
