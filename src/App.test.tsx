import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('fwfewef  ', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/ CodeSandbox/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Start editing/i);
    expect(linkElement).toBeInTheDocument();
  });
});
