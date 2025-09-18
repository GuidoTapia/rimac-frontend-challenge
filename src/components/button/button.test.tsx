import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button, { type ButtonProps } from './button';

const renderButton = (props?: Partial<ButtonProps>) =>
  render(<Button {...props}>Click me</Button>);

describe('Button component', () => {
  it('renders children', () => {
    renderButton();
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    renderButton();
    const btn = screen.getByRole('button');
    expect(btn.className).toMatch(/button--primary/);
    expect(btn.className).toMatch(/button--x-large/);
  });

  it('applies custom variant', () => {
    renderButton({ variant: 'secondary' });
    expect(screen.getByRole('button').className).toMatch(/button--secondary/);
  });

  it('applies custom size', () => {
    renderButton({ size: 'small' });
    expect(screen.getByRole('button').className).toMatch(/button--small/);
  });

  it('handles fullWidth', () => {
    renderButton({ fullWidth: true });
    expect(screen.getByRole('button').className).toMatch(/button--fullWidth/);
  });

  it('handles disabled state', () => {
    renderButton({ disabled: true });
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn.className).toMatch(/button--disabled/);
  });

  it('fires onClick when enabled', () => {
    const handleClick = vi.fn();
    renderButton({ onClick: handleClick });
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn();
    renderButton({ onClick: handleClick, disabled: true });
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('accepts custom className', () => {
    renderButton({ className: 'custom-class' });
    expect(screen.getByRole('button').className).toMatch(/custom-class/);
  });
});
