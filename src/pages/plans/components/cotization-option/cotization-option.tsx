import React from 'react';
import styles from './cotization-option.module.scss';
import { Paper } from '../../../../components';

export interface CotizationOptionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const CotizationOption: React.FC<CotizationOptionProps> = ({
  icon,
  title,
  description,
  isSelected,
  onClick,
}) => {
  const radioCheckboxClasses = [
    styles['cotization-option__radio-checkbox'],
    isSelected && styles['cotization-option__radio-checkbox--selected'],
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Paper height='212px' withBorder={isSelected} onClick={onClick}>
      <div className={styles['cotization-option__container']}>
        <div className={styles['cotization-option__header']}>
          <div className={radioCheckboxClasses} />
        </div>
        <div className={styles['cotization-option__content']}>
          <div>{icon}</div>
          <h4>{title}</h4>
          <p className={styles['cotization-option__description']}>
            {description}
          </p>
        </div>
      </div>
    </Paper>
  );
};

export default CotizationOption;
