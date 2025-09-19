import { createRef } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dropdown, { type DropdownProps } from './dropdown';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

const baseOptions = [
  { value: 'a', label: 'Alpha' },
  { value: 'b', label: 'Beta' },
  { value: 'c', label: 'Gamma', disabled: true },
];

const renderDropdown = (props?: Partial<DropdownProps>) =>
  render(<Dropdown id='mydd' options={baseOptions} {...props} />);

describe('Dropdown', () => {
  it('renders label and options', () => {
    renderDropdown({ label: 'Choose one' });
    expect(screen.getByLabelText('Choose one')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Alpha' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Beta' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Gamma' })).toBeInTheDocument();
  });

  it('applies default size and allows custom size', () => {
    const { rerender } = renderDropdown();
    const root =
      screen.getByTestId('dropdown-root') ||
      screen.getByRole('combobox').closest('div');
    expect(root?.className).toMatch(/dropdown--lg/);
    rerender(<Dropdown id='mydd' options={baseOptions} size='lg' />);
    expect(root?.className).toMatch(/dropdown--lg/);
  });

  it('applies fullWidth class', () => {
    renderDropdown({ fullWidth: true });
    const root = screen.getByTestId('dropdown-root').closest('div');
    expect(root?.className).toMatch(/dropdown--fullWidth/);
  });

  it('shows helperText when no error and sets aria-describedby', () => {
    renderDropdown({ helperText: 'Helpful' });
    expect(screen.getByText('Helpful')).toBeInTheDocument();
    const sel = screen.getByRole('combobox');
    expect(sel).toHaveAttribute('aria-describedby', 'mydd-help');
    expect(sel).toHaveAttribute('aria-invalid', 'false');
  });

  it('shows error when provided and sets aria attributes', () => {
    renderDropdown({ error: 'Required' });
    expect(screen.getByText('Required')).toBeInTheDocument();
    const sel = screen.getByRole('combobox');
    expect(sel).toHaveAttribute('aria-invalid', 'true');
    expect(sel).toHaveAttribute('aria-describedby', 'mydd-err');
    const root = screen.getByTestId('dropdown-root');
    expect(root?.className).toMatch(/dropdown--error/);
  });

  it('disables options marked as disabled', () => {
    renderDropdown();
    expect(screen.getByRole('option', { name: 'Gamma' })).toBeDisabled();
  });

  it('fires onChange', () => {
    const onChange = vi.fn();
    renderDropdown({ onChange });
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'b' } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('respects disabled prop on select', () => {
    renderDropdown({ disabled: true });
    expect(screen.getByRole('combobox')).toBeDisabled();
  });

  it('forwards ref to the select element', () => {
    const ref = createRef<HTMLSelectElement>();
    render(<Dropdown id='mydd' options={baseOptions} ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLSelectElement);
  });
});
