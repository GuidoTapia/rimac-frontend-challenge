import React from 'react';
import styles from './text-input.module.scss';

export type TextInputSize = 'sm' | 'md' | 'lg';

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  size?: TextInputSize;
  fullWidth?: boolean;
  groupVariant?: 'left' | 'right';
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      helperText,
      error,
      size = 'lg',
      fullWidth = false,
      className,
      groupVariant,
      ...rest
    },
    ref
  ) => {
    const rootClasses = [
      styles.textinput,
      styles[`textinput--${size}`],
      fullWidth ? styles['textinput--fullWidth'] : '',
      error ? styles['textinput--error'] : '',
      className,
      groupVariant ? styles[`textinput--group-${groupVariant}`] : '',
    ]
      .filter(Boolean)
      .join(' ');

    const id = rest.id || `ti-${Math.random().toString(36).slice(2, 8)}`;
    const describedBy = error
      ? `${id}-err`
      : helperText
        ? `${id}-help`
        : undefined;

    return (
      <div className={rootClasses}>
        {label && (
          <label htmlFor={id} className={styles['textinput__label']}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={styles['textinput__field']}
          aria-invalid={!!error}
          aria-describedby={describedBy}
          {...rest}
        />
        {helperText && !error && (
          <div id={`${id}-help`} className={styles['textinput__helper']}>
            {helperText}
          </div>
        )}
        {error && (
          <div id={`${id}-err`} className={styles['textinput__error']}>
            {error}
          </div>
        )}
      </div>
    );
  }
);

TextInput.displayName = 'TextInput';
export default TextInput;
