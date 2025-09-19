import React from 'react';
import styles from './plan-option.module.scss';
import { Button, Paper } from '../../../../components';

export interface PlanOptionProps {
  icon: React.ReactNode;
  title: string;
  price: number;
  descriptionItems: string[];
  isSelected?: boolean;
  discountedPrice?: number;
}

const PlanOption: React.FC<PlanOptionProps> = ({
  icon,
  title,
  price,
  descriptionItems,
  isSelected,
  discountedPrice,
}) => {
  return (
    <Paper width='280px' height='680px' withBorder={isSelected}>
      <div className={styles['plan-option__container']}>
        <div className={styles['plan-option__header']}>
          <div className={styles['plan-option__header-badge']}></div>
          <div className={styles['plan-option__header-content']}>
            <div className={styles['plan-option__header-info']}>
              <h3>{title}</h3>
              <div className={styles['plan-option__header-price']}>
                <div className={styles['plan-option__header-subtitle']}>
                  Costo del plan
                </div>
                {discountedPrice && (
                  <div className={styles['plan-option__header-original-price']}>
                    ${price} antes
                  </div>
                )}
                <h4>${discountedPrice || price} al mes</h4>
              </div>
            </div>

            <div className={styles['plan-option__header-icon']}>{icon}</div>
          </div>
        </div>
        <div className={styles['plan-option__content']}>
          <ul className={styles['plan-option__description-list']}>
            {descriptionItems.map(item => (
              <li key={item} className={styles['plan-option__description']}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Button size='medium' fullWidth>
          Seleccionar Plan
        </Button>
      </div>
    </Paper>
  );
};

export default PlanOption;
