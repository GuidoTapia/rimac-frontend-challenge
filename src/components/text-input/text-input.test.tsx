import { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TextInput, { type TextInputProps } from './text-input';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

const renderTI = (props?: Partial<TextInputProps>) =>
  render(<TextInput id='myti' {...props} />);

describe('TextInput', () => {
  it('renders with default size and no label', () => {
    renderTI();
    const input = screen.getByRole('textbox');
    const root = input.closest('div');
    expect(root.className).toMatch(/textinput--md/);
  });

  it('renders label when provided and associates it with input', () => {
    renderTI({ label: 'Email' });
    const input = screen.getByRole('textbox');
    expect(screen.getByLabelText('Email')).toBe(input);
  });

  it('applies custom size and fullWidth class', () => {
    renderTI({ size: 'lg', fullWidth: true });
    const input = screen.getByRole('textbox');
    const root = input.closest('div');
    expect(root?.className).toMatch(/textinput--lg/);
    expect(root?.className).toMatch(/textinput--fullWidth/);
  });

  it('merges custom className on root', () => {
    renderTI({ className: 'extra-root' });
    const input = screen.getByRole('textbox');
    const root = input.closest('div');
    expect(root?.className).toMatch(/extra-root/);
  });

  it('shows helperText and sets aria-describedby when no error', () => {
    renderTI({ helperText: 'Helpful hint' });
    const input = screen.getByRole('textbox');
    expect(screen.getByText('Helpful hint')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-describedby', 'myti-help');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('shows error and sets aria attributes when error present', () => {
    renderTI({ error: 'Required field' });
    const input = screen.getByRole('textbox');
    expect(screen.getByText('Required field')).toBeInTheDocument();
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAttribute('aria-describedby', 'myti-err');
    const root = input.closest('div');
    expect(root?.className).toMatch(/textinput--error/);
  });

  it('fires onChange and respects value', () => {
    const onChange = vi.fn();
    renderTI({ onChange });
    const input = screen.getByRole('textbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('respects disabled prop', () => {
    renderTI({ disabled: true });
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('supports placeholder and type props', () => {
    renderTI({ placeholder: 'Type here', type: 'email' });
    const input = screen.getByPlaceholderText('Type here');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('forwards ref to input element', () => {
    const ref = createRef<HTMLInputElement>();
    render(<TextInput id='myti' ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
