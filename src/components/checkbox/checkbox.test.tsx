import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './checkbox';

describe('Checkbox component', () => {
  it('renders the label when "label" prop is provided', () => {
    render(<Checkbox label='Acepto términos' />);
    expect(screen.getByText('Acepto términos')).toBeInTheDocument();
  });

  it('does not render error container when no "error" is provided', () => {
    render(<Checkbox label='Demo' />);
    expect(screen.queryByText(/.+/)).not.toHaveClass?.('checkbox__error');

    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('sets aria-invalid and shows message when "error" is present', () => {
    render(<Checkbox label='Demo' error='Campo requerido' />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Campo requerido')).toBeInTheDocument();
  });

  it('fires onChange when clicked and when pressing Space while focused', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Checkbox label='Notificaciones' onChange={onChange} />);

    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);

    checkbox.focus();
    await user.keyboard('[Space]');
    expect(onChange).toHaveBeenCalledTimes(2);
  });

  it('applies "disabled" prop: disables input and adds disabled class', () => {
    render(<Checkbox label='Demo' disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();

    const root = checkbox.closest('label');
    expect(root?.className).toMatch(/checkbox--disabled/);
  });

  it('adds error class to root when "error" is present', () => {
    render(<Checkbox label='Demo' error='Oops' />);
    const root = screen.getByText('Demo').closest('label');
    expect(root?.className).toMatch(/checkbox--error/);
  });

  it('accepts and merges custom className on the root', () => {
    render(<Checkbox label='Demo' className='extra-class' />);
    const root = screen.getByText('Demo').closest('label');
    expect(root).toHaveClass('extra-class');
  });

  it('forwards ref correctly to the <input>', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox label='Demo' ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);

    ref.current?.focus();
    expect(document.activeElement).toBe(ref.current);
  });

  it('propagates native attributes (name, id, checked, defaultChecked)', () => {
    render(
      <Checkbox
        label='Boletín'
        name='newsletter'
        id='chk-news'
        defaultChecked
        data-testid='chk'
      />
    );
    const checkbox = screen.getByTestId('chk');
    expect(checkbox).toHaveAttribute('name', 'newsletter');
    expect(checkbox).toHaveAttribute('id', 'chk-news');
    expect((checkbox as HTMLInputElement).checked).toBe(true);
  });

  it('works as controlled when "checked" is passed', async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    const { rerender } = render(
      <Checkbox label='Ctrl' checked={false} onChange={onChange} />
    );
    const checkbox = screen.getByRole('checkbox');

    await user.click(checkbox);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(checkbox).not.toBeChecked();

    rerender(<Checkbox label='Ctrl' checked={true} onChange={onChange} />);
    expect(checkbox).toBeChecked();
  });

  it('renders without label or error (minimal structure)', () => {
    render(<Checkbox data-testid='chk' />);
    const checkbox = screen.getByTestId('chk');
    expect(checkbox).toBeInTheDocument();

    const root = checkbox.closest('label');
    expect(root).toBeInTheDocument();

    expect(root?.querySelector('[class*="checkbox__label"]')).toBeNull();
    expect(root?.querySelector('[class*="checkbox__error"]')).toBeNull();
  });
});
