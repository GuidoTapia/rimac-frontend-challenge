import { createRef } from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Checkbox from './checkbox';

describe('Checkbox component', () => {
  it('renderiza el label cuando se pasa la prop "label"', () => {
    render(<Checkbox label='Acepto términos' />);
    expect(screen.getByText('Acepto términos')).toBeInTheDocument();
  });

  it('no renderiza el contenedor de error cuando no hay "error"', () => {
    render(<Checkbox label='Demo' />);
    expect(screen.queryByText(/.+/)).not.toHaveClass?.('checkbox__error');

    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('setea aria-invalid y muestra el mensaje cuando hay "error"', () => {
    render(<Checkbox label='Demo' error='Campo requerido' />);
    const input = screen.getByRole('checkbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(screen.getByText('Campo requerido')).toBeInTheDocument();
  });

  it('dispara onChange al hacer click y al presionar Space cuando está enfocado', async () => {
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

  it('aplica la prop "disabled": deshabilita el input y agrega clase de estado', () => {
    render(<Checkbox label='Demo' disabled />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();

    const root = checkbox.closest('label');
    expect(root?.className).toMatch(/checkbox--disabled/);
  });

  it('agrega clase de error al root cuando "error" está presente', () => {
    render(<Checkbox label='Demo' error='Oops' />);
    const root = screen.getByText('Demo').closest('label');
    expect(root?.className).toMatch(/checkbox--error/);
  });

  it('acepta y fusiona className personalizado en el root', () => {
    render(<Checkbox label='Demo' className='extra-class' />);
    const root = screen.getByText('Demo').closest('label');
    expect(root).toHaveClass('extra-class');
  });

  it('reenvía correctamente el ref al <input>', () => {
    const ref = createRef<HTMLInputElement>();
    render(<Checkbox label='Demo' ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);

    ref.current?.focus();
    expect(document.activeElement).toBe(ref.current);
  });

  it('propaga atributos nativos (name, id, checked, defaultChecked)', () => {
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

  it('funciona como controlado cuando se pasa "checked"', async () => {
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

  it('renderiza sin label ni error (estructura mínima)', () => {
    render(<Checkbox data-testid='chk' />);
    const checkbox = screen.getByTestId('chk');
    expect(checkbox).toBeInTheDocument();

    const root = checkbox.closest('label');
    expect(root).toBeInTheDocument();

    expect(root?.querySelector('[class*="checkbox__label"]')).toBeNull();
    expect(root?.querySelector('[class*="checkbox__error"]')).toBeNull();
  });
});
