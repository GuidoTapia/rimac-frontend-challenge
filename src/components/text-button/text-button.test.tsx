import { render, screen, fireEvent } from '@testing-library/react';
import TextButton, { type TextButtonProps } from './text-button';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

const renderTB = (props?: Partial<TextButtonProps>) =>
  render(<TextButton {...props}>Press me</TextButton>);

describe('TextButton', () => {
  it('renders children', () => {
    renderTB();
    expect(screen.getByText('Press me')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    renderTB();
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/textbutton--primary/);
    expect(btn.className).toMatch(/textbutton--md/);
  });

  it('applies custom variant and size', () => {
    renderTB({ variant: 'danger', size: 'sm' });
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/textbutton--danger/);
    expect(btn.className).toMatch(/textbutton--sm/);
  });

  it('applies underline class when underline is true', () => {
    renderTB({ underline: true });
    expect(screen.getByRole('button').className).toMatch(
      /textbutton--underline/
    );
  });

  it('merges custom className', () => {
    renderTB({ className: 'extra-class' });
    expect(screen.getByRole('button').className).toMatch(/extra-class/);
  });

  it('fires onClick when clicked', () => {
    const onClick = vi.fn();
    renderTB({ onClick });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('respects disabled prop', () => {
    renderTB({ disabled: true });
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
