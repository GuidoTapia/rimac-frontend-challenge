import { render, screen } from '@testing-library/react';
import Hyperlink, { type HyperlinkProps } from './hyperlink';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

const renderHL = (props?: Partial<HyperlinkProps>) =>
  render(
    <Hyperlink href='https://example.com' {...props}>
      Visit
    </Hyperlink>
  );

describe('Hyperlink', () => {
  it('renders children text', () => {
    renderHL();
    expect(screen.getByText('Visit')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    renderHL();
    const link = screen.getByRole('link');
    expect(link.className).toMatch(/hyperlink--primary/);
    expect(link.className).toMatch(/hyperlink--md/);
  });

  it('applies custom variant and size', () => {
    renderHL({ variant: 'danger', size: 'sm' });
    const link = screen.getByRole('link');
    expect(link.className).toMatch(/hyperlink--danger/);
    expect(link.className).toMatch(/hyperlink--sm/);
  });

  it('applies underline class when underline is true', () => {
    renderHL({ underline: true });
    expect(screen.getByRole('link').className).toMatch(/hyperlink--underline/);
  });

  it('renders external link with target and rel', () => {
    renderHL({ external: true });
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(screen.getByText('↗')).toBeInTheDocument();
  });

  it('respects custom target and rel when not external', () => {
    renderHL({ target: '_self', rel: 'nofollow' });
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_self');
    expect(link).toHaveAttribute('rel', 'nofollow');
  });

  it('merges custom className', () => {
    renderHL({ className: 'extra' });
    expect(screen.getByRole('link').className).toMatch(/extra/);
  });
});
