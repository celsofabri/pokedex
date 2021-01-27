import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Context } from 'context';
import Header from 'components/Header';
import PokemonsList from 'containers/PokemonsList';
import GenerationsList from 'containers/GenerationsList';
import PokemonDetail from 'containers/PokemonDetail';
import PokemonsByGeneration from 'containers/PokemonsByGeneration';
import Loading from 'components/Loading';

const App = () => {
  const { state } = useContext(Context);
  const { isLoading } = state;

  return (
    <React.Fragment>
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
      <Loading isLoading={isLoading} />
    </React.Fragment>
  );
};

export default App;
