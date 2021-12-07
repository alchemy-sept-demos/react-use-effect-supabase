import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  const res = await screen.findByText(/Pip's Original/i);
  expect(res).toBeInTheDocument();
});
