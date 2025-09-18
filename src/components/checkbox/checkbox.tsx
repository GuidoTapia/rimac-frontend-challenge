import React from 'react';
import styles from './checkbox.module.scss';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, disabled, ...rest }, ref) => {
    const rootClasses = [
      styles.checkbox,
      disabled ? styles['checkbox--disabled'] : '',
      error ? styles['checkbox--error'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <label className={rootClasses}>
        <input
          ref={ref}
          type='checkbox'
          className={styles['checkbox__input']}
          disabled={disabled}
          aria-invalid={!!error}
          {...rest}
        />
        <span className={styles['checkbox__box']} aria-hidden />
        {label ? (
          <span className={styles['checkbox__label']}>{label}</span>
        ) : null}
        {error ? (
          <span className={styles['checkbox__error']}>{error}</span>
        ) : null}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
