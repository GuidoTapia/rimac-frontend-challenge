import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { name: /vite \+ react \+ sass/i })
    ).toBeInTheDocument();
  });

  it('renders the count button', () => {
    render(<App />);
    expect(
      screen.getByRole('button', { name: /count is 0/i })
    ).toBeInTheDocument();
  });

  it('increments count when button is clicked', async () => {
    const user = userEvent.setup();
    render(<App />);

    const button = screen.getByRole('button', { name: /count is 0/i });
    await user.click(button);

    expect(
      screen.getByRole('button', { name: /count is 1/i })
    ).toBeInTheDocument();
  });

  it('renders the logos', () => {
    render(<App />);
    expect(screen.getByAltText(/vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/react logo/i)).toBeInTheDocument();
  });
});
