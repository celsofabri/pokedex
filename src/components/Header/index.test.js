import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Header from 'components/Header';

describe('components <Header/>', () => {
  it('displays header', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByAltText('Pokémon')).toBeInTheDocument();
  });

  it('check url logo', () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    expect(screen.getByTitle('Home').href).toContain('/');
  });
});
