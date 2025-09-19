import React from 'react';
import styles from './text-button.module.scss';

export type TextButtonVariant =
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'light'
  | 'dark';
export type TextButtonSize = 'sm' | 'md';

export interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TextButtonVariant;
  size?: TextButtonSize;
  underline?: boolean;
  icon?: React.ReactNode;
}

const TextButton: React.FC<TextButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  underline = false,
  className,
  icon,
  ...rest
}) => {
  const classes = [
    styles.textbutton,
    styles[`textbutton--${variant}`],
    styles[`textbutton--${size}`],
    underline ? styles['textbutton--underline'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {icon && <span className={styles['textbutton__icon']}>{icon}</span>}
      <span className={styles['textbutton__label']}>{children}</span>
    </button>
  );
};

export default TextButton;
