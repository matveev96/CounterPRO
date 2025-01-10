import React from 'react';
import { render, screen } from '@testing-library/react';
import AppUseState from './AppUseState';

test('renders learn react link', () => {
  render(<AppUseState />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
