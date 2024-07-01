import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '@/App';

test('renders learn react', () => {
  render(<App />);
  const linkElement = screen.getByText(/bookStore/i);
  expect(linkElement).toBeInTheDocument();
});
