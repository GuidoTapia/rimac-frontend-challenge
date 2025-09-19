import React from 'react';
import styles from './dropdown.module.scss';

export type DropdownSize = 'sm' | 'md' | 'lg';

export interface Option {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: DropdownSize;
  options: Option[];
  fullWidth?: boolean;
  groupVariant?: 'left' | 'right';
}

const Dropdown = React.forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'lg',
      options,
      fullWidth = false,
      className,
      groupVariant,
      ...rest
    },
    ref
  ) => {
    const id = rest.id || `dd-${Math.random().toString(36).slice(2, 8)}`;
    const root = [
      styles.dropdown,
      styles[`dropdown--${size}`],
      fullWidth ? styles['dropdown--fullWidth'] : '',
      error ? styles['dropdown--error'] : '',
      className,
      groupVariant ? styles[`dropdown--group-${groupVariant}`] : '',
    ]
      .filter(Boolean)
      .join(' ');

    const describedBy = error
      ? `${id}-err`
      : helperText
        ? `${id}-help`
        : undefined;

    return (
      <div className={root} data-testid='dropdown-root'>
        {label && (
          <label htmlFor={id} className={styles['dropdown__label']}>
            {label}
          </label>
        )}
        <div className={styles['dropdown__wrap']}>
          <select
            ref={ref}
            id={id}
            className={styles['dropdown__select']}
            aria-invalid={!!error}
            aria-describedby={describedBy}
            {...rest}
          >
            {options.map(opt => (
              <option
                key={String(opt.value)}
                value={opt.value}
                disabled={opt.disabled}
              >
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {helperText && !error && (
          <div id={`${id}-help`} className={styles['dropdown__helper']}>
            {helperText}
          </div>
        )}
        {error && (
          <div id={`${id}-err`} className={styles['dropdown__error']}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
export default Dropdown;
