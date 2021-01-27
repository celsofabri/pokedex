import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Menu from 'components/Menu';

describe('components <Menu/>', () => {
  it('displays menu', () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Generations')).toBeInTheDocument();
  });

  it('check correct url', () => {
    render(
      <Router>
        <Menu />
      </Router>
    );

    expect(screen.getByText('Home').href).toContain('/');
    expect(screen.getByText('Generations').href).toContain(
      '/generations'
    );
  });
});
