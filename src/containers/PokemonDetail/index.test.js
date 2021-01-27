import React from 'react';
import { GlobalState } from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import PokemonDetail from 'containers/PokemonDetail';
import { getPokemonByName } from 'api';

jest.mock('../../api', () => ({
  getPokemonByName: jest.fn().mockImplementation(() => {
    Promise.resolve({ results: { data: [] } });
  })
}));

describe('containers <PokemonDetail/>', () => {
  it('displays container', async () => {
    render(
      <GlobalState>
        <Router>
          <PokemonDetail />
        </Router>
      </GlobalState>
    );

    await waitFor(() => expect(getPokemonByName).toHaveBeenCalled());
  });
});
