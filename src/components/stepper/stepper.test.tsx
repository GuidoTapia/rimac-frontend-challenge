import { render, screen, fireEvent } from '@testing-library/react';
import Stepper, { type StepperProps } from './stepper';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';

const steps = [
  { label: 'Account' },
  { label: 'Details', optional: 'Optional' },
  { label: 'Confirm' },
];

const renderStepper = (props?: Partial<StepperProps>) =>
  render(<Stepper steps={steps} activeIndex={1} {...props} />);

describe('Stepper', () => {
  it('renders steps with labels and optional text', () => {
    renderStepper();
    expect(screen.getByRole('list')).toBeInTheDocument();
    steps.forEach(s => expect(screen.getByText(s.label)).toBeInTheDocument());
    expect(screen.getByText('Optional')).toBeInTheDocument();
  });

  it('applies state classes based on activeIndex', () => {
    renderStepper({ activeIndex: 1 });
    const items = screen.getAllByRole('listitem');
    expect(items[0].className).toMatch(/stepper__item--completed/);
    expect(items[1].className).toMatch(/stepper__item--active/);
    expect(items[2].className).toMatch(/stepper__item--pending/);
  });

  it('renders dividers between items', () => {
    const { container } = renderStepper();
    const dividers = container.querySelectorAll('[class*="stepper__divider"]');
    expect(dividers.length).toBe(steps.length - 1);
  });

  it('adds clickable class and triggers onStepClick when clickable', () => {
    const onStepClick = vi.fn();
    renderStepper({ clickable: true, onStepClick });
    const items = screen.getAllByRole('listitem');
    expect(items[0].className).toMatch(/stepper__item--clickable/);
    fireEvent.click(items[0]);
    fireEvent.click(items[1]);
    fireEvent.click(items[2]);
    expect(onStepClick).toHaveBeenCalledTimes(3);
    expect(onStepClick).toHaveBeenNthCalledWith(1, 0);
    expect(onStepClick).toHaveBeenNthCalledWith(2, 1);
    expect(onStepClick).toHaveBeenNthCalledWith(3, 2);
  });

  it('does not trigger onStepClick when not clickable', () => {
    const onStepClick = vi.fn();
    renderStepper({ clickable: false, onStepClick });
    const items = screen.getAllByRole('listitem');
    fireEvent.click(items[1]);
    expect(onStepClick).not.toHaveBeenCalled();
  });

  it('merges custom className on root', () => {
    renderStepper({ className: 'extra-root' });
    const root = screen.getByRole('list');
    expect(root.className).toMatch(/extra-root/);
  });

  it('updates state classes when activeIndex changes', () => {
    const { rerender } = render(<Stepper steps={steps} activeIndex={0} />);
    let items = screen.getAllByRole('listitem');
    expect(items[0].className).toMatch(/active/);
    expect(items[1].className).toMatch(/pending/);
    rerender(<Stepper steps={steps} activeIndex={2} />);
    items = screen.getAllByRole('listitem');
    expect(items[0].className).toMatch(/completed/);
    expect(items[1].className).toMatch(/completed/);
    expect(items[2].className).toMatch(/active/);
  });
});
