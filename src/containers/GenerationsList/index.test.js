import React from 'react';
import { GlobalState } from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import GenerationsList from 'containers/GenerationsList';
import { getGenerations } from 'api';

jest.mock('../../api', () => ({
  getGenerations: jest.fn().mockImplementation(() => {
    Promise.resolve({ results: { data: [] } });
  })
}));

describe('containers <GenerationsList/>', () => {
  it('displays container', async () => {
    render(
      <GlobalState>
        <Router>
          <GenerationsList />
        </Router>
      </GlobalState>
    );

    await waitFor(() => expect(getGenerations).toHaveBeenCalled());
  });
});
