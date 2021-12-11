import React from 'react';
import { render, screen } from '@testing-library/react';
import Homepage from './views/pages/Homepage';
import About from './views/pages/About';

describe('fwfewef  ', () => {
  test('renders learn react link', () => {
    render(<Homepage />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<About />);
    const linkElement = screen.getByText(/About/i);
    expect(linkElement).toBeInTheDocument();
  });
});
