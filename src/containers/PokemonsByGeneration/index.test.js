import React from 'react';
import { GlobalState } from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import PokemonsByGeneration from 'containers/PokemonsByGeneration';
import { getPokemonsByGeneration } from 'api';

jest.mock('../../api', () => ({
  getPokemonsByGeneration: jest.fn().mockImplementation(() => {
    Promise.resolve({ results: { data: [] } });
  })
}));

describe('containers <PokemonsByGeneration/>', () => {
  it('displays container', async () => {
    render(
      <GlobalState>
        <Router>
          <PokemonsByGeneration />
        </Router>
      </GlobalState>
    );

    await waitFor(() =>
      expect(getPokemonsByGeneration).toHaveBeenCalled()
    );
  });
});
