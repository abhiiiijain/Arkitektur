import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Arkitektur site', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Arkitektur/i })).toBeInTheDocument();
});
