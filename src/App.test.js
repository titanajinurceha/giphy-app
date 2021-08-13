import { render, screen } from '@testing-library/react';
import App from './App';

test('All component is rendered', () => {
  render(<App />);

  const selectionInput = screen.getByPlaceholderText("Search");
  const selectionButton = screen.getByRole("button");

  expect(selectionInput).toBeInTheDocument();
  expect(selectionButton).toBeInTheDocument();
});
