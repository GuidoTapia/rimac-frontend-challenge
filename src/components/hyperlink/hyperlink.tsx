import React from 'react';
import styles from './hyperlink.module.scss';

export type HyperlinkVariant = 'primary' | 'muted' | 'danger';
export type HyperlinkSize = 'sm' | 'md';

export interface HyperlinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: HyperlinkVariant;
  size?: HyperlinkSize;
  external?: boolean;
  underline?: boolean;
}

const Hyperlink: React.FC<HyperlinkProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  external,
  underline = false,
  className,
  ...rest
}) => {
  const classes = [
    styles.hyperlink,
    styles[`hyperlink--${variant}`],
    styles[`hyperlink--${size}`],
    underline ? styles['hyperlink--underline'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={classes}
      target={external ? '_blank' : rest.target}
      rel={external ? 'noopener noreferrer' : rest.rel}
      {...rest}
    >
      <span className={styles['hyperlink__label']}>{children}</span>
      {external && (
        <span className={styles['hyperlink__icon']} aria-hidden>
          ↗
        </span>
      )}
    </a>
  );
};

export default Hyperlink;
