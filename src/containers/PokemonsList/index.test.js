import React from 'react';
import { GlobalState } from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import PokemonsList from 'containers/PokemonsList';
import { getPokemons } from 'api';

jest.mock('../../api', () => ({
  getPokemons: jest.fn().mockImplementation(() => {
    Promise.resolve({ results: { data: [] } });
  })
}));

describe('containers <PokemonsList/>', () => {
  it('displays container', async () => {
    render(
      <GlobalState>
        <Router>
          <PokemonsList />
        </Router>
      </GlobalState>
    );

    await waitFor(() => expect(getPokemons).toHaveBeenCalled());
  });
});
