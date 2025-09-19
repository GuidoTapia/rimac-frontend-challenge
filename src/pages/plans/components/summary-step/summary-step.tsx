import React from 'react';
import styles from './summary-step.module.scss';
import { Paper } from '../../../../components';
import Family from '../../../../assets/family.svg';
import type { PlanSchemaDTO } from '../../../../api/services/plans/plans.dto';

interface SummaryStepProps {
  selectedPlan: PlanSchemaDTO | null;
  userName?: string;
  userLastName?: string;
  documentType?: string;
  userId?: string;
  phone?: string;
}

const SummaryStep: React.FC<SummaryStepProps> = ({
  selectedPlan,
  userName,
  userLastName,
  documentType,
  userId,
  phone,
}) => {
  return (
    <div className={styles.summaryStep}>
      <h1 className={styles.summaryStep__title}>Resumen del seguro</h1>
      <Paper width='100%'>
        <div className={styles.summaryStep__content}>
          <div className={styles.summaryStep__header}>
            <div className={styles.summaryStep__headerLabel}>
              Precios calculados para:
            </div>
            <div className={styles.summaryStep__headerInfo}>
              <img src={Family} alt='Family' />
              <h4 className={styles.summaryStep__userName}>
                {userName} {userLastName}
              </h4>
            </div>
          </div>
          <div className={styles.summaryStep__divider} />
          <div className={styles.summaryStep__body}>
            <div className={styles.summaryStep__item}>
              <h6 className={styles.summaryStep__itemTitle}>
                Responsable de pago
              </h6>
              <div className={styles.summaryStep__itemLabel}>
                {documentType}: {userId}
              </div>
              <div className={styles.summaryStep__itemLabel}>
                Celular: {phone}
              </div>
            </div>
            <div className={styles.summaryStep__item}>
              <h6 className={styles.summaryStep__itemTitle}>Plan elegido</h6>
              <div className={styles.summaryStep__itemLabel}>
                {selectedPlan?.name ?? 'Plan no seleccionado'}
              </div>
              <div className={styles.summaryStep__itemLabel}>
                Costo del Plan: ${selectedPlan?.price} al mes
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default SummaryStep;
